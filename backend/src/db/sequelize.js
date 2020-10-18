const { Sequelize} = require('sequelize');
const constants = require('./constants');

const options = {
    freezeTableName: true,
};

const sequelize = new Sequelize(constants.DATABASE, constants.USER, constants.PASSWORD, {
    host: constants.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000,
    },
    define: { ...options },
});


sequelize.authenticate().then(() => {
    console.log('Successfully connected to database')
}).catch((e) => {
    console.log('Unsuccessful Connection', e)
})

sequelize.sync()
    .then(() => {
        console.log('DB Created Successfully...');
    }).catch(err => {
        console.log('DB Creation Error: ', err.message);
})

module.exports.sequelize = sequelize;

