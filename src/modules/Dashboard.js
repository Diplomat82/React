'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateName: ''
    };
  }

  render() {

    const user = this.props.params.email;
    const style = {
      border: '1em solid blue;'
    }

    return (
        <section id="dashboard" style={style}>
          <h1 className="text-center">Hi {user}</h1>
          <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-3"><Link to={'/write'} activeClassName="active"><button className="btn center-block">Write Posts</button></Link></div>
                    <div className="col-xs-3"><Link to={'/read'} activeClassName="active"><button className="btn center-block">Read Posts</button></Link></div>
                    <div className="col-xs-3"></div>
                  </div>
            </div>
            <div className="col-xs-3"></div>
          </div>
        </section>

    );
  }
}
