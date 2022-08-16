const { Router } = require('express');
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listInventory', function (req, res) {
   fs.readFile( __dirname + "/" + "inventory.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})