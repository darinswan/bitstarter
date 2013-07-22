var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  fs.readFile('index.html', function (err, data) {
    if (err) 
        response.send(err);
    else 
        response.send(data.toString());
  });

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
