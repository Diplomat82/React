'use strict';

/*
      Title: file title
      Job: file job
*/

import React from 'react';
import { Button } from 'react-bootstrap';

import About from './About.js'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wow: ''
    };
    this.wow = this.wow.bind(this);
  }

  componentDidMount() {
    //onload
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  wow(e){
    console.log("wow: ",e.target.value);
    this.setState({wow: e.target.value});
  }

  render() {

    const element = <this.Welcome name="Sara" />;
    const stateInAction = this.state.wow;

    return (
            <section id="home">
              <h1 className="text-center">Home Page</h1>
              {element}
              <input
                type="text"
                name="user"
                id="user"
                placeholder="your name"
                onChange={this.wow}
                required
              />
            {stateInAction}
            <About name="Sara"></About>

            </section>

    );
  }
}
