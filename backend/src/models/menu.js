const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    menu_id:{type: Number,primaryKey: true,unique: true,allowNull: false, autoIncrement:true},
    name: {type: String},
    description: { type: String, },
    ingredients: { type: String,},  
    category: { type: String},
    price:{type: Number},
    rest_id:[{_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'restaurant' }}]
}, {
    timestamps: false
});


module.exports = Menu = mongoose.model('menu', menuSchema);
