# ParkingWatchApi

The Parkingwatch API handles all the requests from the Webapp and the parkingwatches. It allows the a communication between the parkingwatch and a webapp. This API is running on a node.js server
# API Definition
The API can handle all the following requests
    - list all parkingwatches
    - create a parkingwatch
    - get a specific parkingwatch by id
    - update a parkingwatch
    - delete parkingwatch
# Model

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
``` npm install npm start ```

### Requests
The API can handle 5 request. Most of them need the id as parameter

| Request Type | Request | data | Response | Notes |
| ------ | ------ |------ |------ |------ |
| GET | http://hauslaerche.internet-box.ch:3000/parkingwatch/ | - | All of the db| all datasets| 
|POST| http://hauslaerche.internet-box.ch:3000/parkingwatch/ | name | none | creating a new dataset| 
|GET | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId |-| specific parkingwatch|get all of a specific parkingwatch| 
|PUT | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId| value to update (name, settedDate, status)| -|Update method|
|DELETE | http://hauslaerche.internet-box.ch:3000/parkingwatch/taskId |- |status of the delete |deleting a dataset|  
