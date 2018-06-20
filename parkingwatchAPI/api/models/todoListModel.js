
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Setted_date: {
    type: Date,
    default: null
  },
  status: {
    type: [{
      type: String,
      enum: ['connected', 'not connected', 'available']
    }],
    default: ['available']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
