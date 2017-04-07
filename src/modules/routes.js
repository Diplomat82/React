'use strict';

//node modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//components
import App from './App'
import About from './About'
import Home from './Home'
import Test from './Test'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/test" component={Test}/>
  </Route>
)
