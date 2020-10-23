const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event_id:{type: Number,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    name: {type: String,primaryKey: true},
    description: { type: String },
    date: { type: Date},
    time: { type : String },
    location: { type: String, required: true,},
    rest_id: { type: Number, references: {   model: 'Restaurant',   key: '_id', }, }
}, {
    
    timestamps: false
});

module.exports = Event = mongoose.model('event', eventSchema);