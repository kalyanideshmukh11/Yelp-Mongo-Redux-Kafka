const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },  
  password: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required:true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  profile_picture: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  user: {
    type: String,
    default: 'restaurant'
  },
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema, 'restaurant');