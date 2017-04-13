'use strict';


import React from 'react';
import { Button } from 'react-bootstrap';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateName: ''
    };
  }

  componentDidMount() {
    //onload
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
        <section>
          <h1>The button below uses Bootstrap</h1>
          <Button>Bootstrap Example</Button>
        </section>

    );
  }
}
