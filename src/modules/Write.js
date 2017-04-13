'use strict';


import React from 'react';
import { Button } from 'react-bootstrap';
var request = require('superagent');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

export default class Write extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      post: ''
    };
    this.setTitleValue = this.setTitleValue.bind(this);
    this.setPostValue = this.setPostValue.bind(this);
    this.publish = this.publish.bind(this);
  }

  componentDidMount() {
    //onload
    console.log("this.props.params", this.props);
  }

  setTitleValue(e){
    this.setState({title: e.target.value})
    console.log(this.state.title);
  }

  setPostValue(e){
    this.setState({post: e.target.value})
    console.log(this.state.post);
  }

  publish(event) {
    const title = this.state.title;
    const postBody = this.state.post;
    event.preventDefault();

    request
    .post('http://localhost:8888/post')
    .send({ email: 'Manny', title: title, post: postBody })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .end(function(err, res){
      if (err || !res.ok) {
        console.log("error posting new post", err);
      } else {
        console.log("success with new post", JSON.stringify(res.body));
        browserHistory.push('/read');
      }
    });
  }

  render() {

    const style = {
      width: '30em',
      height: '10em'
    };

    const style2 = {
      border: '1em solid blue;'
    }

    return (
        <section id="write" style={style2}>
          <h1 className="text-center">Write Post</h1>
          <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
              <label htmlFor="title" className="text-center center-block">Type Your Title Here</label>
              <input
                type="text"
                name="title"
                id="title"
                className="center-block"
                placeholder="Post Title Goes Here..."
                onChange={this.setTitleValue}
                required
              />
              <label htmlFor="post" className="text-center center-block">Type Your Post Here</label>
              <textarea
                name="post"
                placeholder="Post Goes Here..."
                id="post"
                style={style}
                onChange={this.setPostValue}
                className="center-block"
              />
            </div>
            <div className="col-xs-3"></div>
          </div>
          <br />
          <Button className="center-block" onClick={this.publish}>Publish Post</Button>

        </section>

    );
  }
}
