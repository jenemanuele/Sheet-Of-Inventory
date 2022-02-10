const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

// create Instrument model
class Instrument extends Model {}

Instrument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        count: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Instrument'
    }
);
module.exports = Instrument;