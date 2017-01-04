var express = require('express');
var bodyParser = require('body-parser');

var data = {};

express()
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json())

  .get('/api/data', (req, res) => res.json(data))
  .post('/api/data', (req, res) => res.json(data = req.body))

  .get('http://0.0.0.0:3000/api/states', (req, res) => res.json(data))
  .post('http://0.0.0.0:3000/api/states/replaceOrCreate', (req, res) => res.json(data = req.body))

  .get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
  .listen(3333);
