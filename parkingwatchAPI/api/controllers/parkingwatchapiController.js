/*'use strict';

var mongoose = require('mongoose'),
  Parkingwatch = mongoose.model('ParkingwatchAPI'); //from model

exports.list_all_parkingwatches = function(req, res) {
  Parkingwatch.find({}, function(err, Parkingwatch) {
    if (err)
      res.send(err);
    res.json(parkingwatch);
  });
};




exports.create_a_parkingwatch = function(req, res) {
  var new_parkingwatch = new Parkingwatch(req.body);
  new_parkingwatch.save(function(err, parkingwatch) {
    if (err)
      res.send(err);
    res.json(parkingwatch);
  });
};


exports.read_a_parkingwatch = function(req, res) {
  Parkingwatch.findById(req.params.ParkingwatchId, function(err, parkingwatch) {
    if (err)
      res.send(err);
    res.json(parkingwatch);
  });
};


exports.update_a_parkingwatch = function(req, res) {
  Parkingwatch.findOneAndUpdate({_id: req.params.parkingwatchId}, req.body, {new: true}, function(err, parkingwatch) {
    if (err)
      res.send(err);
    res.json(parkingwatch);
  });
};


exports.delete_a_parkingwatch = function(req, res) {


  Parkingwatch.remove({
    _id: req.params.parkingwatchId
  }, function(err, parkingwatch) {
    if (err)
      res.send(err);
    res.json({ message: 'Parkingwatch successfully deleted' });
  });
};
*/
'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_watches = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_watch = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_watch = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_watch = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_watch = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

