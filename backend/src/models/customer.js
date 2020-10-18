const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');


const customerModel = sequelize.define('customer', {
    id:{type: Sequelize.INTEGER,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    email_id: {type: Sequelize.STRING,primaryKey: true,unique: true,allowNull: false,validate: { isEmail: true}},
    first_name: {type: Sequelize.STRING, allowNull: false},
    last_name: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false}, 
    phone_number: {type: Sequelize.STRING, unique: true, allowNull: true},
    city: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    country: {type: Sequelize.STRING},
    dob: {type: Sequelize.DATE},
    photo:{type: Sequelize.STRING},
    }, {
        tableName: 'customer',
        timestamps: false
    });

module.exports = customerModel;
