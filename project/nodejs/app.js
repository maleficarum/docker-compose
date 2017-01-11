var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://mongodb:27017/docker", function(err, _db_) {
      if(err) {
        console.error("Unable to connect ", err);
      } else {
        console.log("Connected to mongodb");
      }
});


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
