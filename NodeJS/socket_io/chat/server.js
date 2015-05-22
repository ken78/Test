var express = require('express');
var app = express();

var http = require('http').Server(app);

var socketIo = require('socket.io');
var io = socketIo(http);

// ===============================================================================
// Setup routes handler for url that does http "Get"
// ===============================================================================
app.get('/',
    function(req, resp) {

      // resp.send('<h1>Hello from node server using express!</h1>');
      console.log('__dirname: ' + __dirname);

      resp.sendFile(__dirname + '/index.html');
    });

// ===============================================================================

// ===============================================================================
// Setup handlers for socket IO events
// ===============================================================================
io.on('connection',
    function(req, resp) {

      console.log('A user connected!');
    });

// ===============================================================================

http.listen(8080);
