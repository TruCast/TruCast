package main

import (
	"strings"
	"bytes"
	"log"
	"net/http"
	"net"
	"time"

	"github.com/gorilla/websocket"
	"github.com/pjebs/tokbox"
)

const (
	ROOM_DATA  = "ROOM_DATA"
	RESET_ROOM = "RESET_ROOM"

	JOIN_ACTION          = "JOIN_ACTION"
	JOIN                 = "JOIN"
	LEAVE_ACTION         = "LEAVE_ACTION"
	LEAVE                = "LEAVE"
	ADD_COMMENT_ACTION   = "ADD_COMMENT_ACTION"
	ADD_COMMENT          = "ADD_COMMENT"
	CHANGE_TITLE_ACTION  = "CHANGE_TITLE_ACTION"
	CHANGE_TITLE         = "CHANGE_TITLE"
	ACCEPT_CALLER_ACTION = "ACCEPT_CALLER_ACTION"
	ACCEPT_CALLER        = "ACCEPT_CALLER"
	LEAVE_SEAT_ACTION    = "LEAVE_SEAT_ACTION"
	LEAVE_SEAT           = "LEAVE_SEAT"
	CALL_ACTION          = "CALL_ACTION"
	CALL                 = "CALL"
	CANCEL_CALL_ACTION   = "CANCEL_CALL_ACTION"
	CANCEL_CALL          = "CANCEL_CALL"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func getMessage(
	messageType string, payload map[string]interface{},
) map[string]interface{} {
	return map[string]interface{}{
		"type":    messageType,
		"payload": payload,
	}
}

func newToken(session *tokbox.Session, role tokbox.Role, userId string) (string, error) {
	return session.Token(role, "userId="+userId, tokbox.Days30)
}

type ipRange struct {
    start net.IP
    end net.IP
}

// inRange - check to see if a given ip address is within a range given
func inRange(r ipRange, ipAddress net.IP) bool {
    // strcmp type byte comparison
    if bytes.Compare(ipAddress, r.start) >= 0 && bytes.Compare(ipAddress, r.end) < 0 {
        return true
    }
    return false
}

var privateRanges = []ipRange{
    ipRange{
        start: net.ParseIP("10.0.0.0"),
        end:   net.ParseIP("10.255.255.255"),
    },
    ipRange{
        start: net.ParseIP("100.64.0.0"),
        end:   net.ParseIP("100.127.255.255"),
    },
    ipRange{
        start: net.ParseIP("172.16.0.0"),
        end:   net.ParseIP("172.31.255.255"),
    },
    ipRange{
        start: net.ParseIP("192.0.0.0"),
        end:   net.ParseIP("192.0.0.255"),
    },
    ipRange{
        start: net.ParseIP("192.168.0.0"),
        end:   net.ParseIP("192.168.255.255"),
    },
    ipRange{
        start: net.ParseIP("198.18.0.0"),
        end:   net.ParseIP("198.19.255.255"),
    },
}


// isPrivateSubnet - check to see if this ip is in a private subnet
func isPrivateSubnet(ipAddress net.IP) bool {
    // my use case is only concerned with ipv4 atm
    if ipCheck := ipAddress.To4(); ipCheck != nil {
        // iterate over all our ranges
        for _, r := range privateRanges {
            // check if this ip is in a private range
            if inRange(r, ipAddress){
                return true
            }
        }
    }
    return false
}

func getIPAdress(r *http.Request) string {
    for _, h := range []string{"X-Forwarded-For", "X-Real-Ip"} {
        addresses := strings.Split(r.Header.Get(h), ",")
        // march from right to left until we get a public address
        // that will be the address right before our proxy.
        for i := len(addresses) -1 ; i >= 0; i-- {
            ip := strings.TrimSpace(addresses[i])
            // header can contain spaces too, strip those out.
            realIP := net.ParseIP(ip)
            if !realIP.IsGlobalUnicast() || isPrivateSubnet(realIP) {
                // bad address, go to next
                continue
            }
            return ip
        }
    }
    return ""
}

func (s *Server) HandleWS(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("upgrade:", err)
		return
	}
	defer conn.Close()

	session, err := s.RediStore.Get(r, sessionPrefix)
	if err != nil {
		handleInternalServerError(err, w)
		return
	}

	// Store the authenticated user as userId
	userId := ""
	if session.Values[tokenCredKey] != nil {
		userId = session.Values[usernameKey].(string)
	}

	// Keep the connection alive
	timeout := time.Duration(60) * time.Second
	tickDuration := timeout / 2
	tick := time.Tick(tickDuration)
	tickCloseCh := make(chan bool)
	go func() {
		for {
			select {
			case <-tick:
				deadline := time.Now().Add(tickDuration)
				err := conn.WriteControl(
					websocket.PingMessage,
					nil,
					deadline,
				)
				if err != nil {
					log.Println("tick error:", err)
					return
				}
			case <-tickCloseCh:
				return
			}
		}
	}()

	defer func() {
		tickCloseCh <- true
	}()

	// Setup state
	// Only one room available per connection
	currentRoomId := ""
	isHost := false
	var roomMessages chan StateMessage

	leave := func() {
		if currentRoomId != "" {
			s.State.CancelCall(currentRoomId, roomMessages, userId)
			s.State.LeaveSeat(currentRoomId, roomMessages, userId)
			s.State.Leave(currentRoomId, roomMessages, userId)
			if isHost {
				s.State.Reset(currentRoomId, roomMessages)
			}
		}
	}
	defer leave()

	// Receive messages
	for {
		var message StateMessage
		if err := conn.ReadJSON(&message); err != nil {
			if !websocket.IsCloseError(err, websocket.CloseGoingAway) {
				log.Println("read error:", err)
			}
			return
		}

		switch message.Type {
		case JOIN_ACTION:
			leave()
			currentRoomId = message.Payload.(string)
			isHost = userId != "" && userId == currentRoomId
			getIPAdress := getIPAdress(r)
			//TODO allow multiple clients to join same room via LAN/RemoteAddr
			room, messages := s.State.Join(currentRoomId, userId, getIPAdress)
			roomMessages = messages

			// Create the room's TokBox session if it does not exist.
			var session *tokbox.Session
			if room.sessionId == "" {
				// Add a new session id to the room.
				session, err = s.TokBox.NewSession("", tokbox.MediaRouter)
				if err != nil {
					log.Println("tokbox new session error:", err)
					return
				}

				s.State.SetRoomSessionId(currentRoomId, session.SessionId)
				// Set this before the JSON serialization.
				room.sessionId = session.SessionId
			} else {
				session = &tokbox.Session{
					SessionId: room.sessionId,
					T:         s.TokBox,
				}
			}

			role := tokbox.Role(tokbox.Publisher)
			// TODO: send specific tokens based on the user role. this
			// current solution is a vulnerability.
			// role := tokbox.Role(tokbox.Subscriber)
			// if isHost {
			// 	// Only the host gets the publish ability on initial connection.
			// 	role = tokbox.Role(tokbox.Publisher)
			// }
			// subRole := tokbox.Role(tokbox.Subscriber)

			token, err := newToken(session, role, userId)
			if err != nil {
				println("err", err.Error())
				log.Println("token generation error:", err)
				return
			}

			/* subToken, err := subToken(session, subRole, userId)
			if err != nil {
				println("err", err.Error())
				log.Println("token generation error:", err)
				return
			}*/

			// Send the initial payload on join.
			roomData := room.ToJSON()
			roomData["token"] = token
			// roomData["subToken"] = subToken
			roomData["tokBoxKey"] = s.TokBoxKey
			roomMessage := getMessage(ROOM_DATA, roomData)
			if err = conn.WriteJSON(roomMessage); err != nil {
				log.Println("join error:", err)
				return
			}

			go func() {
				for {
					message := <-roomMessages
					if message.End {
						return
					}

					if err = conn.WriteJSON(map[string]interface{}{
						"payload": message.Payload,
						"type":    message.Type,
					}); err != nil {
						log.Println("send error:", err)
					}
				}
			}()

		case LEAVE_ACTION:
			leave()

		case ADD_COMMENT_ACTION:
			// Checks that:
			// 1. A room is already loaded.
			// 2. The user is authenticated.
			if currentRoomId != "" && userId != "" {
				s.State.AddComment(currentRoomId, roomMessages, Comment{
					SenderId: userId,
					Text:     message.Payload.(string),
				})
			}

		case CHANGE_TITLE_ACTION:
			// Checks that:
			// 1. A room is already loaded.
			// 2. The user is authenticated.
			// 3. The user is the host.
			if isHost {
				title := message.Payload.(string)
				s.State.ChangeRoomTitle(currentRoomId, roomMessages, title)
			}

		case ACCEPT_CALLER_ACTION:
			if isHost {
				callerId := message.Payload.(string)
				s.State.AcceptCaller(currentRoomId, roomMessages, callerId)
			}

		case LEAVE_SEAT_ACTION:
			leavingUserId := message.Payload.(string)
			if isHost || leavingUserId == userId {
				s.State.LeaveSeat(currentRoomId, roomMessages, leavingUserId)
			}

		case CALL_ACTION:
			if currentRoomId != "" && userId != "" && currentRoomId != userId {
				s.State.Call(currentRoomId, roomMessages, userId)
			}

		case CANCEL_CALL_ACTION:
			if currentRoomId != "" && userId != "" && currentRoomId != userId {
				s.State.CancelCall(currentRoomId, roomMessages, userId)
			}
		}
	}
}
