/////////////// Imports //////////////////
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");


class User extends Model {}
 
    Users.init(
        {
          ///// id # //////
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          user_name: {
            type: DataTypes.STRING,
            allowNull: false,
              },
        password: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate: {
                    len: [5] ///comment must be atleast three characters!

            }
          }
        });

module.exports = User;