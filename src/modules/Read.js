'use strict';


import React from 'react';
import { Button } from 'react-bootstrap';
var request = require('superagent');

export default class Read extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: ''
    };
  }

  componentDidMount() {
    request
    .get('http://localhost:8888/post')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .end(function(err, res){
      if (err || !res.ok) {
        console.log("error gettings posts", err);
      } else {
        console.log("success gettings posts", JSON.stringify(res.body));

      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    var posts = [{id:1, title: "test1", post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", email: "dan@madwire.com", date: "April 16, 2017 10:00 AM"}, {id:2, title: "test2", post: "lorem", email: "dan2@madwire.com", date: "April 17, 2017 10:00 AM"}, {id:3, title: "test3", post: "lorem", email: "dan3@madwire.com", date: "April 18, 2017 10:00 AM"} ]

    const postsView = posts.map((post) =>
      <section  key={post.id} className="col-xs-4">
        <h1 className="text-center">{post.title}</h1>
        <h4>{post.date}</h4>
        <p>{post.post}</p>
        <h3>{post.email}</h3>
      </section>
    );

    const style = {
      border: '1em solid blue;'
    }

    return (
        <section id="read" style={style}>
          <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
              <h1 className="text-center">Read Posts</h1>
              <div className="row">
                {postsView}
              </div>
            </div>
            <div className="col-xs-3"></div>
          </div>
        </section>

    );
  }
}
