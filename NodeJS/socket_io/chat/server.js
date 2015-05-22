var express = require('express');
var app = express();

app.set('port', 8080);
app.use(express.static(__dirname));

var http = require('http');
var server = http.createServer(app).listen(app.get('port'));

var io = require('socket.io').listen(server);

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
    function(socket) {

      console.log('A user connected!');
    });

// ===============================================================================




// var http = require('http').Server(app);

// app.configure(
//     function() {
//
//       app.set('port', 8080);
//       app.use(express.static(__dirname));
//     });

// var io = require('socket.io');
// io.listen(http);

// var io = require('socket.io')(http);

// var socketIo = require('socket.io')(http);
// var io = socketIo(http);


// If the below throw error on linux workstation box.
// http.listen(process.env.PORT || 8080);

//http.listen(8080);
