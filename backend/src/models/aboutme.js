const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const aboutmeModel = sequelize.define('aboutme', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true,unique: true,allowNull: false,
        references: {
            model: 'customer',
            key: 'id',
        }},
    yelping_since:{type: Sequelize.STRING},
    things_love: {type: Sequelize.STRING},
    findme_in:{type: Sequelize.STRING},
    links: {type: Sequelize.STRING},
    headline: {type: Sequelize.STRING},
    },{
        tableName: 'aboutme',
        timestamps: false
    });

module.exports = aboutmeModel;
