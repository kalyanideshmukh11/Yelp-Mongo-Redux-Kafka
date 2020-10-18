const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const restaurantModel = sequelize.define('restaurant', {
        id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
        email_id: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } },
        password: {type: Sequelize.STRING, allowNull: false},
        restaurant_name: { type: Sequelize.STRING },
        restaurant_location: { type: Sequelize.STRING },
        restaurant_city:{ type: Sequelize.STRING},
        restaurant_state: { type: Sequelize.STRING },
        restaurant_country: { type: Sequelize.STRING },
        restaurant_zip:{type: Sequelize.INTEGER},
        restaurant_description: { type: Sequelize.STRING },
        contact_info: { type: Sequelize.STRING },
        timing: { type: Sequelize.STRING },
        cousine:{type: Sequelize.STRING },
        delivery_method:{type: Sequelize.STRING },
    }, {
        tableName: 'restaurant',
        timestamps: false
    });

module.exports = restaurantModel;
