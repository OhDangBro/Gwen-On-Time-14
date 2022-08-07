/// IMPORTS USER, POST, COMMENT JS FILES ///
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// CONNECTIONS WITH KEYS //
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// CONNECTION THROUGH FOREIGN KEYS FOR COMMENTS //
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Users.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };