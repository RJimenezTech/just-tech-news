const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {};

// create fields/columns for Post Model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
                type: DataTypes.STRING,
                allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isURL: true
            }
        }
    },
    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;