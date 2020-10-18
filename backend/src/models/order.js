const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const orderModel = sequelize.define('order', {
    order_id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    order_status: {type: Sequelize.STRING, },
    delivery_status: {type: Sequelize.STRING,},
    date: {type: Sequelize.STRING, },
    dish_name: {type: Sequelize.STRING,},
    rest_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id',
        },
    },
    rest_name:{
        type: Sequelize.STRING,
        references: {
            model: 'restaurant',
            key: 'restaurant_name',
        },
    },
    customer_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'customer',
            key: 'id',
        },
    },
    customer_name:{
        type: Sequelize.STRING,
        references: {
            model: 'customer',
            key: 'first_name',
        },
    }
}, {
    tableName: 'order',
    timestamps: false
});

module.exports = orderModel;
