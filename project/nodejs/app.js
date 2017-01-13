var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var os = require('os');
var mongoose = require('mongoose');
var hostname = os.hostname();
var connected = false;
var mongoError ;
var Event = require("./schemas/Event.js");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));

mongoose.connect("mongodb://10.128.0.2:27017/docker");

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/public/index.html");
})

app.post('/events', function(req, res) {
  var json = req.body;

  var e = new Event({
    "data":json.data,
    "event":json.event,
    "eventDate": new Date(),
    "hostname":req.headers.host
  });

  e.save(function(error) {
    if(error) {
      res.writeHeader(500, { "Content-Type": "application/json" });
      res.write(JSON.stringify({"error":error}));
      res.end();
    } else {
      res.writeHeader(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({"event": JSON.stringify(e)}));
      res.end();
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
