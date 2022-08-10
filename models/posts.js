///// WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment ////

////////// IMPORT /////////////////
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'post_content',
          'title',
          [sequelize.literal('(SELECT COUNT(*) FROM post.id')]
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_content', 'post_id', 'user_id'],
            include: {
              model: models.Users,
              attributes: ['user_name']
            }
          }
        ]
      });
    });
  }
}

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
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);
////// POST INIT START ///////

/////Export post module//////
module.exports = Post;