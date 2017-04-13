'use strict';

//node modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//components
import App from './App'
import Home from './Home'
import Lifecycles from './Lifecycles'
import Dashboard from './Dashboard'
import Write from './Write'
import Read from './Read'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/dashboard/:email" component={Dashboard}/>
    <Route path="/write/:email" component={Write}/>
    <Route path="/read" component={Read}/>
    <Route path="/lifecycles" component={Lifecycles}/>
  </Route>
)
