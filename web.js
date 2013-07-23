var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer(fs.readFileSync('index.html'));
var myString = buffer.toString();
//console.log("My string" + myString);

app.get('/', function(request, response) {
  response.send(myString);
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Listening on " +port);
});
