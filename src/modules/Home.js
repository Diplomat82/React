'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  Welcome(props) {
    return <h1>Hello, {props.email}</h1>;
  }

  onChange(e){
    console.log("email: ",e.target.value);
    this.setState({email: e.target.value});
  }


  render() {

    const element = <this.Welcome email="Sara" />;
    const stateInAction = this.state.email;

    var style = {
      color: 'purple'
    };

    return (

            <section id="home">

              <div className="row">

                <div className="col-xs-4"></div>

                <div className="col-xs-4">
                    <h1 className="text-center" style={style}>Login Using Email</h1>
                    <input
                      type="text"
                      name="user"
                      id="user"
                      placeholder="your email"
                      onChange={this.onChange}
                      className="center-block"
                      required
                    />
                    <br />
                    <Link to={'/dashboard/'+this.state.email} activeClassName="active"><button className="btn center-block">Login</button></Link>
                </div>

                <div className="col-xs-4"></div>

              </div>

            </section>

    );
  }
}
