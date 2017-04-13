'use strict';


import React from 'react';
import { Button } from 'react-bootstrap';

export default class Lifecycles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Daniel',
      input: ''
    };
    this.click = this.click.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    // invoked once.
    // fires before initial 'render'
    console.log("componentWillMount()");
  }

  componentDidMount() {
    // good for AJAX: fetch, ajax, or subscriptions.

    // invoked once (client-side only).
    // fires before initial 'render'
    console.log("componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    // invoked every time component is recieves new props.
    // does not before initial 'render'
    console.log("componentWillReceiveProps(nextProps)");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // invoked before every update (new props or state).
    // does not fire before initial 'render'.
    console.log("shouldComponentUpdate(nextProps, nextState)");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // invoked immediately before update (new props or state).
    // does not fire before initial 'render'.

    // (see componentWillReceiveProps if you need to call setState)
    console.log("componentWillUpdate(nextProps, nextState)");
  }

  componentDidUpdate(prevProps, prevState) {
    // invoked immediately after DOM updates
    // does not fire after initial 'render'
    console.log("componentDidUpdate(prevProps, prevState)");
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentWillUnmount() {
  // invoked immediately before a component is unmounted.
  }

  click(){
    this.setState({name: 'Madwire'})
  }

  onChange(e){
    this.setState({input: e.target.value})
  }

  Welcome(props) {
    return <h1>Hello, {props.email}</h1>;
  }

  render() {

    const name = this.state.name;
    const stateInAction = this.state.input;
    const element = <this.Welcome email={this.state.input} />;

    return (
        <section id="lifecycles">
          <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
            <h1 className="text-center">Lifecycles</h1>
            <h1 className="text-center">Hi, I am {name}</h1>
            <Button onClick={this.click} className="center-block">DO STUFF</Button>

            <br />

            <input
              type="text"
              name="user"
              id="user"
              className="center-block"
              placeholder="your name"
              onChange={this.onChange}
              required
            />
            {element}
            </div>
            <div className="col-xs-3"></div>
          </div>
        </section>

    );
  }
}
