/*
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ParkingwatchSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  se: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['online', 'offline']
    }],
    default: ['online']
  }
});

module.exports = mongoose.model('ParkingwatchAPI', ParkingwatchSchema);
*/


'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
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
