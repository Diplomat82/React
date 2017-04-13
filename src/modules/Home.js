'use strict';

//node modules
import React from 'react';
import { Button } from 'react-bootstrap';

//siblings
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

    var style = {
      color: 'blue'
    };

    return (
            <section id="home">
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

            </section>

    );
  }
}
