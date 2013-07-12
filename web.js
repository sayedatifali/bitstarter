var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var options = {'encoding': 'utf-8'};
app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html', options);
  response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
