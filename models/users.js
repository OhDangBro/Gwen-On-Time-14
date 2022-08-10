/////////////// Imports //////////////////
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");


// create our User model
class Users extends Model {

}

 
    Users.init(
        {
          ///// id # //////
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
              },
              email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  isEmail: true
                }
              },
        password: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate: {
                    len: [5] ///comment must be atleast three characters!

            }
          }
          },
          {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'Users'
        });

module.exports = Users;