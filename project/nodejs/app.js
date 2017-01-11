var express = require('express');
var app = express();
var os = require('os');
var MongoClient = require('mongodb').MongoClient;
var hostname = os.hostname();
var connected = false;
var mongoError ;

MongoClient.connect("mongodb://mongodb:27017/docker", function(err, _db_) {
      if(err) {
        console.error("Unable to connect ", err);
        mongoError = err;
      } else {
        console.log("Connected to mongodb");
        connected = true;
      }
});


app.get('/', function (req, res) {
  res.send('Maleficarum says hello from node ' + hostname + " and connected to mongo " + connected + " with error " + mongoError);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
