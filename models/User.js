const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// require bcrypt for password hashing
const bcrypt = require('bcrypt');

class User extends Model {
  // Method to run on a user instance to check the password as provided 
    // in the login route against the hashed database password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // TABLE COLUMN DEFINITIONS
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
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
          len: [5]
        }
      }
  },
  {
    // add hooks for the password hashing operation
    hooks: {
        // set up a beforeCreate lifecycle hook to hash the password before the object is created in the database
        // and return the new userdata object
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
        // set up a beforeUpdate lifecycle hook to hash the password before a user object is updated in the database
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
    },
    // pass in the imported sequelize connection to the database
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;