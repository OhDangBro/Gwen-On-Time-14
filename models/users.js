/////////////// Imports //////////////////
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");


// create our User model
class Users extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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
          user_name: {
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