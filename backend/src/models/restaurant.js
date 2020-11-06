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
  location: {
    type:String,
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
  zip:{
    type:String,
  },
  description:{
    type: String,
  },
  timing:{
    type: String,
  },
  cuisine:{
    type: String,
  },
  delivery_method:{
    type: String,
  },
  profile_picture: {
    type: String,
  },
  contact_info: {
    type: String,
  },
  review: [
    {
        comment: {
            type: String,
        },
        rating:{
          type:String,
        },
        review_date: {
            type: Date,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customer'
        }
    }
],
  user: {
    type: String,
    default: 'restaurant'
  },
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema, 'restaurant');