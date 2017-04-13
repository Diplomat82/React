'use strict';


import React from 'react';
import { Button } from 'react-bootstrap';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateName: ''
    };
  }

  componentDidMount() {
    //onload
  }


  render() {

    return (
        <section>
          <h1 className="text-center">React Lightning Talk</h1>
        </section>

    );
  }
}
