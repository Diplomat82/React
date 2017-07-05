'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Page2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateName: ''
    };
  }

  render() {

    return (

      <section id="page2">

          <div className="row">

              <div className="col-xs-4"></div>

              <div className="col-xs-4">
                  <h1 className="text-center" style={style}>Page 2</h1>
              </div>

              <div className="col-xs-4"></div>

          </div>

      </section>

    );
  }
}
