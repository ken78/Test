/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/mongoose/mongoose.d.ts"/>

var http = require('http');
var mongoose = require('mongoose');

var server = http.createServer(
                  function(req, resp) {

                    // 6-2-2015
                    // Write raw http response back to client making the request.
                    resp.writeHead(200, {'Content-Type': 'text/html'});
                    resp.write('<html><body><h1>Hello from NodeJS!</h1></body></html>');
                    resp.end();
                  });

server.on('connection',
       function(socket) {

         console.log('client connected!!');
       });

//====================================================
// Setting up mongoose to connect to mongoDb
// Resource: http://mongoosejs.com/docs/index.html
//====================================================

mongoose.connect('mongodb://localhost/test');

var mongoDb = mongoose.connection;

// 6-3-2015
// Log out that we had connected to mongoDb from this emitted
// event 'open'
mongoDb.once('open',
        function() {

          console.log('Connected to MongoDb!!');
        });
// 1.
// Need to create a Schema first representing the data template for the mongoDb document.
var PersonSchema = mongoose.Schema({name: String, email: String});

// 2.
// Create a model off the Schema and passing the name of the collection as "Person" in the 3rd param.
var PersonModel = mongoose.model('Person', PersonSchema, 'Person');

// 3.
// Create an instance of the model as mongoDb document object.
var person = new PersonModel({name: 'guy bunshiro', email: 'guy@msn.com'});

// 4.
// Have to call "save()" to save the document to mongoDb
person.save(
    function(error, documentObj) {

      if (error) {
        console.log('Error saving document to MongoDb!');
        return;
      }

      console.log('Success save document: ' + person);
    });

server.listen(process.env.PORT || 3000);
