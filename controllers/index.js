const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');
const { Comments } = require('../models');
const { Users } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;

module.exports = router;