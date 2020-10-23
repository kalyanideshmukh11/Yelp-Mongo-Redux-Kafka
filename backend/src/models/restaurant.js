const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
        id:{type: Number,primaryKey: true,unique: true,allowNull: false},
        email_id: { type: String, unique: true },
        password: {type: String, allowNull: false},
        restaurant_name: { type: String },
        restaurant_location: { type: String },
        restaurant_city:{ type: String},
        restaurant_state: { type: String },
        restaurant_country: { type: String },
        restaurant_zip:{type: Number},
        restaurant_description: { type: String },
        contact_info: { type: String },
        timing: { type: String },
        cousine:{type: String },
        delivery_method:{type: String },
    }, {
       
        timestamps: false
    });


module.exports = Restaurant = mongoose.model('restaurant', restaurantSchema);