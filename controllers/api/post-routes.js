const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Users, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'post_content',
      'title',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_content', 'post_id', 'user_id'],
        include: {
          model: Users,
          attributes: ['user_name']
        }
      },
      {
        model: Users,
        attributes: ['user_name']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_content',
      'title',
      
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_content', 'post_id', 'user_id'],
        include: {
          model: Users,
          attributes: ['user_name']
        }
      },
      {
        model: Users,
        attributes: ['user_name']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  module.exports = router;