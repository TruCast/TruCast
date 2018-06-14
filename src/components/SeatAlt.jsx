/* eslint-env browser*/

import React, { Component } from 'react'
import SimpleWebRTC from 'simplewebrtc'

// import './App.css'

class App extends Component {
  componentDidMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'local',
      remoteVideosEl: '',
      autoRequestMedia: true,
      url: 'localhost:8000',
    })

    console.log('webrtc component mounted')
    this.webrtc.on('videoAdded', this.addVideo)
    this.webrtc.on('videoRemoved', this.removeVideo)
    this.webrtc.on('readyToCall', this.readyToCall)
  }

  addVideo = (video, peer) => {
    console.log('video added', peer)
    //  console.log(this.refs.remotes);
    const remotes = 'remotes'
    console.log(remotes)
    if (remotes) {
      const container = document.createElement('div')
      container.className = 'videoContainer'
      container.id = `container_${this.webrtc.getDomId(peer)}`
      container.appendChild(video)
      /* suppress contextmenu
      video.oncontextmenu = function () {
        return false
      }*/
      console.log(container)
      remotes.appendChild(container)
    }
  }

  removeVideo = (video, peer) => {
    console.log('video removed ', peer)
    const remotes = 'remotes'
    const el = document.getElementById(peer ? `container_${this.webrtc.getDomId(peer)}` : 'localScreenContainer')
    if (remotes && el) {
      remotes.removeChild(el)
    }
  }

  readyToCall = () => this.webrtc.joinRoom('roomName')

  connect = () => {
    console.log('connected')
  }

  disconnect = () => {
    console.log('disconnected')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Видеочатик</h1>
        </header>
        < div>
          < video
            className="local"
            id="localVideo"
          />
          < div
            className="remotes"
            id="remoteVideos"
          />
        </div>
      </div>
    )
  }
}

export default App
