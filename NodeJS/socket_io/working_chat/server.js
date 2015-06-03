// 5-22-2015
// **** Note: This simple chat node http server using socket.io doesn't work
// ****       on linux's chromium browser. It's kinda buggy anyway.

var httpObj = require('http');
var pathObj = require('path');
var expressObj = require('express');
var socketIoObj = require('socket.io');

var portObj = process.env.port || 3000;

var app = expressObj();

app.set('port', portObj);

// 5-22-2015
// Configure express to use dir "public" to serve html files.
app.use(expressObj.static(pathObj.join(__dirname, 'public')));

console.log('__dirname: ' + __dirname);

var httpServer = httpObj.createServer(app).listen(app.get('port'),
    function(req, resp) {

      console.log('Express http server listening on port: ' + app.get('port'));
    });

// =============================================================================
// Setting up socket.io
// =============================================================================
var socketIO = socketIoObj.listen(httpServer);

// 1-4-2015
// Callback handler for "connection" event when client connects to the server.
socketIO.sockets.on('connection',
    function(socket) {

      // Creating the "nick" event property that the client can call to set for each instance of the client.
      socket.on('nick',
          function(nick) {

            console.log('socket.io nickname: ' + nick);

            socket.nickname = nick;

            // The "socket.set()" is deprecated or no longer available in ver Socket.IO vers 1.x
            //socket.set('nickname', nick);
          });

      // 5-22-2015
      // This "chat" event property is use by the connected clients to send chat messages from the browser.
      socket.on('chat',
          function(data) {

            var theNickname = socket.nickname;

            var jsonData = {message: data.message, nick: theNickname};

            // Response back to the client that sends the data.
            socket.emit('chat', jsonData);

            // Send broadcast out to all connected clients.
            socket.broadcast.emit('chat', jsonData);
          });
    });

/* Note: 1-5-2015

    // The "socket.get()" is deprecated or no longer available in ver Socket.IO vers 1.x
    socket.get('nickname', function (err, nicknameData) {

      var theNickname = err ? "Anonymous" : nicknameData;

      var jsonData = { message: data.message, nick: theNickname };

      // Response back to the client that sends the data.
      socket.emit('chat', jsonData);

      // Send broadcast out to all connected clients.
      socket.broadcast.emit('chat', jsonData);
    });
*/

// It's a separate module now, not part of Express ver 4.xx
//app.use(expressObj.errorHandler());

//httpObj.createServer(function (req, res) {

//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//  res.end('Hello World\n');

//}).listen(port);
