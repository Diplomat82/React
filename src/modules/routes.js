'use strict';

//node modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//components
import App from './App'
import Home from './Home'
import Test from './Test'
import Lifecycles from './Lifecycles'
import Dashboard from './Dashboard'
import Write from './Write'
import Read from './Read'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/dashboard/:email" component={Dashboard}/>
    <Route path="/write" component={Write}/>
    <Route path="/read" component={Read}/>
    <Route path="/lifecycles" component={Lifecycles}/>
    <Route path="/test" component={Test}/>
  </Route>
)
