//import and configure dotenv
require('dotenv').config();

//importing express into this app
const express = require('express');

// use express to create the app itself
const app = express();

// configure the static files, i.e. the client files
app.use(express.static('client'));

// example of some server side code --- This is not part of the application
// GET - used to retrieve data from the server
// POST - used to add new data to the server
// PATCH/PUT - to change some existing data on the server
// DELETE - to delete data from the server
// endpoint = A URL + a HTTP Method
app.get('/example', (req, res) => {
  console.log('Hi! I am on the server');
  return res.status(200).json({
    message: 'Hello from the server, I am different now'
  });
});

// the GET /river endpoint returns an array of all rivers
app.get('/river', async (req, res) => {
  const db = app.get('db'); // get the models/db connection
  const rivers = await db.River.findAll();
  return res.status(200).json(rivers);
});

// export the app to be imported in other modules
module.exports = app;
