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

    const style = {
      border: '1em solid blue'
    }

    return (
        <section id="dashboard" style={style}>
          <h1 className="text-center">Dashboard</h1>
        </section>

    );
  }
}
