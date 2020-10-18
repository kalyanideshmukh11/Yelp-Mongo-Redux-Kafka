const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const restImagesModel = sequelize.define('restImages', {
    id: { type: Sequelize.INTEGER, primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    rest_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id',
            },
        },
    image: {type: Sequelize.STRING},
    },{
        tableName: 'restImages',
        timestamps: false
    });

module.exports = restImagesModel;
