const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aboutmeSchema = new Schema({
    id: {
        type: Number, primaryKey: true,unique: true,allowNull: false,
        references: {
            model: 'Customer',
            key: '_id',}
        },
    yelping_since:{type: String},
    things_love: {type: String},
    findme_in:{type: String},
    links: {type: String},
    headline: {type: String},
    },{
        versionKey: false
    });


module.exports = AboutMe = mongoose.model('aboutme', aboutmeSchema);