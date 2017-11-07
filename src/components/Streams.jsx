/* eslint-env browser */
/* global OT */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Streamlink from 'components/Streamlink'

class Streams extends React.Component {

  static propTypes = {
    userId: PropTypes.string,
    roomId: PropTypes.string.isRequired,
    room: PropTypes.shape({
      seats: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      token: PropTypes.string.isRequired,
      tokBoxKey: PropTypes.string.isRequired,
      sessionId: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentWillMount() {
    const { tokBoxKey, sessionId, token } = this.props.room
    this.session = OT.initSession(tokBoxKey, sessionId)
    this.session.connect(token, (error) => {
      if (error) {
        throw error
        // return
      }
    })
  }

  setSeatsNode = (node) => {
    this.node = node
  }

  seats = {}

  renderStream = (stream) => (
    <Streamlink
      {...stream}
      session={this.session}
      userId={this.props.userId}
      key={stream.seatUserId}
    />
  )

  render() {
    const { roomId, room } = this.props
    const seats = [{
      // isHost: true,
      seatUserId: roomId,
    }].concat(room.seats.map(seatUserId => ({
      seatUserId,
      // isHost: false,
    })))
    return (
      <div className="Streams" ref={this.setSeatsNode}>
        <div>
          {seats.map(this.renderStream)}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ user }) => ({ userId: user.id })
)(Streams)
