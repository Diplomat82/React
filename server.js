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
app.use(bodyParser.json());

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
        React
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
