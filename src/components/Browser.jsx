/* global OT */

import React, { PropTypes } from 'react'

class Browser extends React.Component {

  static propTypes = {
    userId: PropTypes.string,
    session: PropTypes.shape({
      on: PropTypes.func.isRequired,
      off: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.session.on('streamCreated', this.handleStreamCreated)
  }

  componentWillUnmount() {
    this.props.session.off('streamCreated', this.handleStreamCreated)
  }

  setVideoNode = (videoNode) => {
    this.videoNode = videoNode
  }

  handleStreamCreated = (event) => {
    this.subscriber = this.props.session.subscribe(event.stream, null, {
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

  render() {
    return this.setVideoNode
  }
}

export default Browser
