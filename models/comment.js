/// Imports Model and Datatypes ///
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, ///No empty
        primaryKey: true,
        autoIncrement: true
    },
    comment_content: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [3] ///comment must be atleast three characters!
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments'
})

/// Exports Comment
module.exports = Comment;