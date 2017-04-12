import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <section id="header">
        <h1 className="text-center">Ready, Set, React</h1>
        <section role="nav" className="row">
              <div className="col-xs-4"></div>
              <div className="col-xs-2">
                <NavLink to="/" className="text-center" onlyActiveOnIndex>Home</NavLink>
              </div>
              <div className="col-xs-2">
                <NavLink to="/about">About</NavLink>
              </div>
              <div className="col-xs-2">
                <NavLink to="/test">Test</NavLink>
              </div>
        </section>
        </section>
        {this.props.children}
      </div>
    )
  }
})
