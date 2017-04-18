'use strict';

//node modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//components
import App from './App'
import Home from './Home'
import Dashboard from './Dashboard'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Route>
)
