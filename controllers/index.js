const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');
const { Comments } = require('../models');
const { Users } = require('../models');
const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');

// router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// old get code for homepage
// router.get('/', (req, res) => {
//   res.render('homepage');
// });

// new get code
router.get('/', async (req, res) => {
  try {
    const data = await Post.findAll({
      include: [
        {
          model: Users,
          attributes: ['user_name', 'id'],
        },
      ],
    });

    const posts = data.map((post) =>
      post.get({ plain: true })
    );
    console.log('the posts:', posts); //console log ALL posts in terminal
    res.render('homepage', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id);

    const post = data.get({ plain: true });
    console.log('the post: ', post) //console log post in terminal
    res.render('singlepost', { 
      post 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;

module.exports = router;