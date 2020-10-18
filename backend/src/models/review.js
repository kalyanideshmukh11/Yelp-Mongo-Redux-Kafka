const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const reviewModel = sequelize.define('review', {
    review_id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    comment: {type: Sequelize.STRING,},
    rating: { type: Sequelize.INTEGER,},
    date: {type: Sequelize.DATE,},
    rest_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id',
        },
    },
    customer_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'customer',
            key: 'id',
        },
    },
    customer_name: {
        type: Sequelize.STRING,
        references: {
            model: 'customer',
            key: 'first_name',
        },
    },
}, {
    tableName: 'review',
    timestamps: false
});

module.exports = reviewModel    ;
