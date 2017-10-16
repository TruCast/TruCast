/* global OT */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class Streams extends React.Component {

  static propTypes = {
    userId: PropTypes.string,
    roomId: PropTypes.string.isRequired,
    seatUserId: PropTypes.string.isRequired,
    room: PropTypes.shape({
      seats: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      token: PropTypes.string.isRequired,
      tokBoxKey: PropTypes.string.isRequired,
      sessionId: PropTypes.string.isRequired,
      session: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
        publish: PropTypes.func.isRequired,
        subscribe: PropTypes.func.isRequired,
      }).isRequired,
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

  componentDidMount() {
    const { session } = this.props.room
    if (this.isMySeat()) {
      // Publish the stream if the session is connected.
      if (session.connection) {
        this.publish()
      } else {
        session.once('sessionConnected', this.publish)
      }
    } else {
      this.props.room.session.on('streamCreated', this.handleStreamCreated)
    }
  }

  componentWillUnmount() {
    const { session } = this.props.room

    if (!this.isMySeat) {
      this.props.room.session.off('streamCreated', this.handleStreamCreated)
    }

    if (this.publisher) {
      session.unpublish(this.publisher)
    }

    if (this.subscriber) {
      session.unsubscribe(this.subscriber)
    }
  }

  setVideoNode = (videoNode) => {
    this.videoNode = videoNode
  }

  handleStreamCreated = (event) => {
    const userId = event.stream.connection.data.replace('userId=', '')
    if (userId !== this.props.seatUserId) {
      return
    }

    this.subscriber = this.props.room.session.subscribe(event.stream, null, {
      insertDefaultUI: false,
    })

    this.subscriber.once('videoElementCreated', this.handleVideoElementCreated)
  }

  handleVideoElementCreated = (event) => {
    const { videoNode } = this
    if (!videoNode) {
      return
    }

    while (videoNode.firstChild) {
      videoNode.removeChild(videoNode.firstChild)
    }
    videoNode.appendChild(event.element)
  }

  seats = {}

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
      <div className="Streams">
        <div
          className="Streams__left"
        >
          {this.setVideoNode()}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ user }) => ({ userId: user.id })
)(Streams)
