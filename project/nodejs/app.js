var express = require('express');
var app = express();
var os = require('os');
var MongoClient = require('mongodb').MongoClient;
var hostname = os.hostname();

MongoClient.connect("mongodb://mongodb:27017/docker", function(err, _db_) {
      if(err) {
        console.error("Unable to connect ", err);
      } else {
        console.log("Connected to mongodb");
      }
});


app.get('/', function (req, res) {
  res.send('Maleficarum says hello from node ' + hostname);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
