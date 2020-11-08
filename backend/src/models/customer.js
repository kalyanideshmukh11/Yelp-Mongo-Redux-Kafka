const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  dob: {
    type: Date,
  },
  yelping_since: {
    type: String,
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
  findme_in: {
    type: [String],
  },
  profile_picture: {
    type: String,
  },
  things_love: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  user: {
    type: String,
    default: 'customer'
  },
  links: {
    type: String
  },
  headline: {
    type: String
  },
  message_list: [
    {
      entity: {
        type: String
      },
      email: {
        type: String
      },
      date: {
        type: Date
      },
      message_conversation: [
        {
          body: {
            type: String,
          },
          date: {
            type: Date
          },
          action: {
            type: String
          },
        }
      ]
    }
  ],
});

module.exports = Customer = mongoose.model('customer', CustomerSchema, 'customer');