var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  data: { type: String },
  event: { type: String , required: true},
  eventDate: { type: Date },
  hostname: {type: String}
});

var Event = mongoose.model('ClientEvent', eventSchema);

module.exports = Event;
