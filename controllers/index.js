const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');
const { Comments } = require('../models');
const { Users } = require('../models');
const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');

// router.use('/users', userRoutes);
router.use('/posts', postRoutes);



router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;

module.exports = router;