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

  onChange(e){
    this.setState({email: e.target.value});
  }

  /*
  componentDidMount() {
    var that = this;
    request
    .get('http://localhost:8888/post')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .end(function(err, res){
      if (err || !res.ok) {
        console.log("error gettings posts", err);
      } else {
        console.log("success gettings posts", res.body.result);
        that.setState({posts: res.body.result})
      }
    });
  }
  */

  render() {

    var style = {
      color: 'purple'
    };

    return (

            <section id="home">

              <div className="row">

                <div className="col-xs-4"></div>

                <div className="col-xs-4">
                    <h1 className="text-center" style={style}>Landing Page</h1>
                    <Link to={'/dashboard'} activeClassName="active"><button className="btn center-block">Take Me To The Dashboard</button></Link>
                </div>

                <div className="col-xs-4"></div>

              </div>

            </section>

    );
  }
}
