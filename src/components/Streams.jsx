/* eslint-env browser */
/* global OT */

import React, { PropTypes } from 'react'

class Streams extends React.Component {

  static propTypes = {
    room: PropTypes.shape({
      seats: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      subToken: PropTypes.string.isRequired,
      tokBoxKey: PropTypes.string.isRequired,
      sessionId: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentWillMount() {
    const { tokBoxKey, sessionId, subToken } = this.props.room
    this.session = OT.initSession(sessionId)
    this.session.connect(subToken, tokBoxKey, (error) => {
      if (error) {
        throw error
        // return
      }
    })
  }

  componentDidMount() {
    this.session.on('streamCreated', this.handleStreamCreated)
  }

  setVideoNode = (videoNode) => {
    this.videoNode = videoNode
  }

  handleStreamCreated = (event) => {
    this.session.subscribe(event.stream, null, {
      insertDefaultUI: false,
    })

    this.session.once('videoElementCreated', this.handleVideoElementCreated)
  }

  handleVideoElementCreated = (event) => {
    const { videoNode } = this
    /* if (!videoNode) {
      return
    }

    while (videoNode.firstChild) {
      videoNode.removeChild(videoNode.firstChild)
    }*/
    videoNode.appendChild(event.element)
  }

  /* setSeatsNode = (node) => {
    this.node = node
  }

  handleResize = () => {
    if (!this.node) {
      return
    }

    const rect = this.node.getBoundingClientRect()
    const containerSize = Math.min(rect.height, rect.width) - CONTAINER_SIZE_DIFF
    const size = Math.floor(containerSize / 2) - SEAT_SIZE_DIFF
    this.setState({ size, containerSize })
  }

  seats = {}
  streams = {}

  renderStream = (stream) => (
    <vidStream
      {...stream}
      session={this.session}
      key={stream.seatUserId}
      isHost={this.props.isHost}
    />
  )*/

  render() {
    return (
      <div className="Streams" ref={this.setVideoNode} />
    )
  }
}

export default (Streams)
