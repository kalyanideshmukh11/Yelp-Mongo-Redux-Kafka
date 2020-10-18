const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const menuModel = sequelize.define('menu', {
    menu_id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    name: {type: Sequelize.STRING,},
    description: { type: Sequelize.STRING, },
    ingredients: { type: Sequelize.STRING,},
    category: { type: Sequelize.STRING},
    price:{type: Sequelize.INTEGER},
    rest_id: { type: Sequelize.INTEGER, references: {   model: 'restaurant',   key: 'id', }, }
}, {
    tableName: 'menu',
    timestamps: false
});

module.exports = menuModel;
