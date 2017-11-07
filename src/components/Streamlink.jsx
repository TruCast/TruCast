/* global OT */
/* eslint-env browser */

import React, { PropTypes } from 'react'
import Rnd from 'react-rnd'

class Streamlink extends React.Component {

  static propTypes = {
    userId: PropTypes.string,
    seatUserId: PropTypes.string.isRequired,
    session: PropTypes.shape({
      on: PropTypes.func.isRequired,
      off: PropTypes.func.isRequired,
      publish: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      width: 250,
      height: 140.63,
      x: 0,
      y: 230,
    }
  }

  componentDidMount() {
    const { session } = this.props
    if (session.connection) {
      this.publish()
    } else {
      this.props.session.on('streamCreated', this.handleStreamCreated)
    }
  }

  componentWillUnmount() {
    const { session } = this.props

    if (!this.isMySeat) {
      this.props.session.off('streamCreated', this.handleStreamCreated)
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

    this.subscriber = this.props.session.subscribe(event.stream, null, {
      insertDefaultUI: false,
    })

    this.subscriber.once('videoElementCreated', this.handleVideoElementCreated)
  }

  publish = () => {
    this.publisher = OT.initPublisher(null, {
      // resolution: '1280x720',
      insertDefaultUI: false,
      // insertMode: 'append',
    }, (error) => {
      if (error) throw error
    })

    this.publisher.once('videoElementCreated', this.handleVideoElementCreated)
    this.props.session.publish(this.publisher)
  }

  handleVideoElementCreated = (event) => {
    const { videoNode } = this
    if (!videoNode) {
      return
    }
    videoNode.prepend(event.element)
  }

  render() {
    return (
      <Rnd
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          })
        }}
        bounds={'.Streams'}
        lockAspectRatio
      >
        <div
          ref={this.setVideoNode}
          className="Stream"
        />
      </Rnd>
    )
  }
}

export default Streamlink
