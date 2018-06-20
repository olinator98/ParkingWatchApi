# ParkingWatchApi

The Parkingwatch API handles all the requests from the Webapp and the parkingwatches. It allows the a communication between the parkingwatch and a webapp. This API is running on a node.js server
### API Definition
The API can handle all the following requests
    - list all parkingwatches
    - create a parkingwatch
    - get a specific parkingwatch by id
    - update a parkingwatch
    - delete parkingwatch
### Model

```
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
}
```

### Installation
This server requires the node-modules to run. You need to install 
``` npm install ```

```npm start ```

### Requests
The API can handle 5 request. Most of them need the id as parameter

| Request Type | Request | data | Response | Notes |
| ------ | ------ |------ |------ |------ |
| GET | http://hauslaerche.internet-box.ch:3000/parkingwatch/ | - | All of the db| all datasets| 
|POST| http://hauslaerche.internet-box.ch:3000/parkingwatch/ | name | none | creating a new dataset| 
|GET | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId |-| specific parkingwatch|get all of a specific parkingwatch| 
|PUT | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId| value to update (name, settedDate, status)| -|Update method|
|DELETE | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId |- |status of the delete |deleting a dataset|  

## Database
I used a MongoDB for this project. To connect to the database from Node.js, I used mongoose. 

The database is hosted by Google. I used mlab to do this. The connect statement is in the server.js file
´´´
mongoose.connect('mongodb://admin:3edc4rfv@ds163870.mlab.com:63870/rest_api_to_test');
´´´

https://mlab.com/databases/rest_api_to_test#collections

# Important
To realise this API, I've to look at the tutorial at https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
