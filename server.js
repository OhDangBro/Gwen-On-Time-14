///bring in dotenv///
require('dotenv').config();
///require sequilize////
const express = require('express');
const Sequelize = require('sequelize');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
///port connection to 3306///
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001,
      dialectOptions: {
        decimalNumbers: true,
      },
    });
    console.log('Now connected to port 3306')
/// export sequilize///
module.exports = sequelize;