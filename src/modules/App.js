'use strict';

import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

  render() {

    const email = this.props.params.email;

    return (
      <div>
        <section id="header">
        <h1 className="text-center">Ready, Set, React</h1>
        <section role="nav" className="row">
              <div className="col-xs-4"></div>
              <div className="col-xs-1">
                <NavLink to="/" className="text-center" onlyActiveOnIndex>Home</NavLink>
              </div>
              <div className="col-xs-1">
                <NavLink to="/write/daniel@dwyer.com">Write Post</NavLink>
              </div>
              <div className="col-xs-1">
                <NavLink to="/read">Read Posts</NavLink>
              </div>
              <div className="col-xs-1">
                <NavLink to="/lifecycles">Lifecycles</NavLink>
              </div>
        </section>
        </section>
        {this.props.children}
      </div>
    )
  }
})
