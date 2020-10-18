const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const eventModel = sequelize.define('event', {
    event_id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    name: {type: Sequelize.STRING,primaryKey: true},
    description: { type: Sequelize.STRING },
    date: { type: Sequelize.DATE},
    time: { type: Sequelize.TIME},
    location: { type: Sequelize.STRING, required: true,},
    rest_id: { type: Sequelize.INTEGER, references: {   model: 'restaurant',   key: 'id', }, }
}, {
    tableName: 'event',
    timestamps: false
});

module.exports = eventModel;
