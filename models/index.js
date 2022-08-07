// This is where we will set up relationships for the models
// Import all the models
const Users = require("./users");
const Post = require("./posts");
const Comment = require("./comments");

//set up relationships
Users.hasMany(Post, {
    foreignKey: "Users_id",
  });
  Post.belongsTo(Users, {
    foreignKey: "Users_id",
  });
  //associations for the commments
  Comment.belongsTo(Users, {
    foreignKey: "Users_id",
  });
  
  Comment.belongsTo(Post, {
    foreignKey: "Posts_id",
  });
  
  Users.hasMany(Comment, {
    foreignKey: "Users_id",
  });
  
  Post.hasMany(Comment, {
    foreignKey: "Posts_id",
  });
  
  module.exports = { Users, Post, Comment };