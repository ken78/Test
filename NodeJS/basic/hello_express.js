/// <reference path="typings/node/node.d.ts"/>
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 2000);

// 6-2-2015
// Create a route handler at the default url "http://localhost:2000" that'll get executed
// when the user access it from a browser.
app.get('/',
    function(req, resp) {

      resp.send('<h1>Hello from NodeJS Express!!</h1>');
    });

console.log(app.get('port'));

var server = http.createServer(app);

server.listen(app.get('port'));
