import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'handlers/App'
import Home from 'handlers/Home'
import RoomLoader from 'handlers/RoomLoader'
import StreamLoader from 'handlers/StreamLoader'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/:roomId" component={RoomLoader} />
    <Route path="/:roomId/stream" component={StreamLoader} />
  </Route>
)
