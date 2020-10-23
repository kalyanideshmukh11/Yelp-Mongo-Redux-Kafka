const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review_id:{type: Number,primaryKey: true,unique: true,allowNull: false},
    comment: {type: String,},
    rating: { type: Number,},
    Date: {type: Date,},
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
    customer_name: {
        type: String,
        references: {
            model: 'Customer',
            key: 'first_name',
        },
    },
}, {
    
    timestamps: false
});


module.exports = Review = mongoose.model('review', reviewSchema);