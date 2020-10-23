const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventatendeeSchema = new Schema({
    attendee_id:{type: Number,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    event_id: {
        type: Number,
        references: {
            model: 'Event',
            key: 'event_id',
        },
    },
    name: {
        type: String,
        references: {
            model: 'Event',
            key: 'name',
        },
    },
    date: {
        type: Date,
        references: {
            model: 'Event',
            key: 'date',
        },
    },
    rest_id: {
        type: Number,
        references: {
            model: 'Restaurant',
            key: '_id',
        },
    },
    customer_id: {
        type: Number,
        references: {
            model: 'Customer',
            key: '_id',
        },
    },
}, {
    
    timestamps: false
});

module.exports = EventAtendee = mongoose.model('eventattendee', eventatendeeSchema);