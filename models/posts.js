///// WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment ////

////////// IMPORT /////////////////
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

////// POST INIT START ///////
class Post extends Model {}

Post.init(
  {
    ///// id # //////
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ///// title of post /////
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ////shows whats in post/////
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ///// key: id to show who made post
    creators_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
////// POST INIT START ///////

/////Export post module//////
module.exports = Post;