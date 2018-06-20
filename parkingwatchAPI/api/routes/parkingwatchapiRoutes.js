/*'use strict';

module.exports = function(app) {
  var parkingwatch = require('../controllers/parkingwatchapiController');

  // parkingwatch routes
  app.route('/parkingwatch/*')
    .get(parkingwatch.list_all_parkingwatches)
    .post(parkingwatch.create_a_parkingwatch);  //add new parkingwatch with the default values


  app.route('/parkingwatch/:parkingwatchId')
    .get(parkingwatch.read_a_parkingwatch) //get a parkingwatch
    .put(parkingwatch.update_a_parkingwatch) //set a new time
    .delete(parkingwatch.delete_a_parkingwatch); //delete a watch
};
*/
'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};

