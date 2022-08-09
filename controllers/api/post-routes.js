const router = require('express').Router();
const { Post, Users, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'post_content'],
      include: [
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

  module.exports = router;