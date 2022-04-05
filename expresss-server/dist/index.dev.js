"use strict";

var express = require('express');

var path = require('path');

var fs = require('fs');

var app = express(); // http://127.0.0.1:3000/file?id=1

app.get('/file', function (req, res) {
  var id = req.query.id;
  var filepath = path.join(__dirname, 'data', id + '.json');
  fs.readFile(filepath, {
    "encoding": 'utf-8'
  }, function (err, result) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(JSON.parse(result));
    }
  });
});
app.listen(3000);