// import the express app itself
const app = require('./app');

// import the db connection and models
const { models, sequelize } = require('./models');

// connect to the database
// sync: actually build the database
// if it works start the server
sequelize
  .sync()
  .then(() => {
    // database connection is successful
    // set the models in the app
    app.set('db', models);

    // start the server on PORT 8000
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch(e => {
    console.log('Problems getting started!');
    console.log(e.message);
  });
