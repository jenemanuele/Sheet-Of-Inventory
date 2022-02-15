const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

// create Product/item model
class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'Category'
            }
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        body_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product'
    }
);
module.exports = Product;