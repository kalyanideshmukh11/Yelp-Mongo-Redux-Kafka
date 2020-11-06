const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
var Schema = mongoose.Schema;

const EventSchema = new Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant'
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    eligibility: {
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
    registration: [
        {
            status: {
                type: String,
            },
            customer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'customer'
            }            
        }
    ]
});

EventSchema.plugin(mongoosePaginate);

module.exports = Events = mongoose.model('event', EventSchema, 'event');
