/* eslint-env browser */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Streamlink from 'components/Streamlink'
import SimpleWebRTC from 'simplewebrtc'

class Streams extends React.Component {

  static propTypes = {
    userId: PropTypes.string,
    roomId: PropTypes.string.isRequired,
    room: PropTypes.shape({
      seats: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
    }).isRequired,
  }

  componentWillMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'local',
      remoteVideosEl: '',
      autoRequestMedia: true,
      url: 'http://localhost:8000',
    })

    console.log('webrtc component mounted')
    this.webrtc.on('videoAdded', this.addVideo)
    this.webrtc.on('videoRemoved', this.removeVideo)
    this.webrtc.on('readyToCall', this.readyToCall)
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
