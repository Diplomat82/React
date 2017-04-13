import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/modules/routes'
var cors = require('cors')
var bodyParser = require('body-parser')
var knex = require('./db/knex.js');

var app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// post post
app.post('/post', (req, res) => {
  knex('posts')
    .insert({
      title: req.body.title,
      post: req.body.post,
      email: req.body.email,
      date: new Date().toLocaleString()
    })
    .then(function(result){
      console.log("Success posting new post to DB", result);
      res.status(200).send('Success')
    })
    .catch(function(error){
      console.log("Error posting new post to DB", error);
      res.status(404).send('Failed')
    })
})

// get post
app.get('/post', (req, res) => {
  console.log("get 3 most recent posts");
    knex('posts')
      .select('*')
      .limit(3)
      .orderBy('id', 'desc')
      .then(function(result){
        console.log("Success getting 3 posts from DB", result);
        res.json({result: result})
        // res.status(200).send('Success')
      })
      .catch(function(error){
        console.log("Error getting 3 posts from DB", error);
        res.status(404).send('Failed')
      })
})

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
  <!DOCTYPE html  public "storage">
  <html>
    <head>
      <meta charset=utf-8/>
      <title>
        Ready, Set, React
      </title>

      <!-- Bootstrap CDN -->
        <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

          <!-- Optional theme -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">

      <!-- local css -->
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
    <body>
      <div id=app></div>
      <script src="bundle.js"></script>
    </body>
  </html>
   `
}


var PORT = process.env.PORT || 8888
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
