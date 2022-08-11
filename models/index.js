// This is where we will set up relationships for the models
// Import all the models
const Users = require("./users");
const Post = require("./posts");
const Comment = require("./comment");
const Vote = require('./Vote');

// create associations
Users.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id',
  
});

Users.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  
});

Post.belongsToMany(Users, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  
});

Vote.belongsTo(Users, {
  foreignKey: 'user_id',
  
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  
});

Users.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Users, {
  foreignKey: 'user_id',
  
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  
});

Users.hasMany(Comment, {
  foreignKey: 'user_id',
  
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { Users, Post, Vote, Comment };