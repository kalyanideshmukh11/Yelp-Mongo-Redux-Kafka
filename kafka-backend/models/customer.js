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
  career_objective: {
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
  skills: {
    type: [String],
  },
  profile_picture: {
    type: String,
  },
  resume: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  user: {
    type: String,
    default: 'student'
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
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
      start_date: {
        type: Date,
      },
      end_date: {
        type: Date,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      college_name: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      cgpa: {
        type: Number,
      },
      major: {
        type: String,
        required: true,
      },
      year_of_passing: {
        type: Number,
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
    },
  ],
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