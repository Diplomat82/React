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


/*<section id="home">
  <h1 className="text-center" style={style}>Home Page</h1>
  <div className="row">
    <div className="col-xs-6">
      {element}
      <label htmlFor="user">Have Something To Say?</label>

        <input
          type="text"
          name="user"
          id="user"
          placeholder="your name"
          onChange={this.wow}
          required
        />
    </div>
    <div className="col-xs-6">

    </div>
  </div>

  <input
    type="text"
    name="user"
    id="user"
    placeholder="your name"
    onChange={this.wow}
    required
  />
<h1>{stateInAction}</h1>
<About name="Sara"></About>

</section>*/
