const { Post } = require('../models');

const postData = [{
        title: 'Post Title 1',
        content: 'Blah Blah Blah',
        user_id: 1

    },
    {
        title: 'Post Title 2',
        content: 'Fucken aquaman',
        user_id: 2
    },
    {
        title: 'Post Title 3',
        content: 'Plz Work for me',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;