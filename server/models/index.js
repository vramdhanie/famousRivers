// Consolidate ALL Models
// set up DB connection

// import Sequelize
const Sequelize = require('sequelize');

// create a connection
// Requires: DATABASE, USER, PASSWORD, OPTIONS
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST
  }
);

// consolidate all models here
const models = {
  River: sequelize.import('./river')
};

module.exports = { sequelize, models };
