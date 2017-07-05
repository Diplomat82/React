'use strict';

//node modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//components
import App from './App'
import Home from './Home'
import Page2 from './Page2'
import Page3 from './Page3'

module.exports = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home }/>
    <Route path="/page2" component={ Page2 }/>
    <Route path="/page3" component={ Page3 }/>
  </Route>
)
