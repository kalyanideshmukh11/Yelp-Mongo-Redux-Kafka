const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_id:{type: Number,primaryKey: true,unique: true,allowNull: false},
    order_status: {type: String, },
    delivery_status: {type: String,},
    date: {type: String, },
    dish_name: {type: String,},
    rest_id: {
        type: Number,
        references: {
            model: 'Restaurant',
            key: '_id',
        },
    },
    rest_name:{
        type: String,
        references: {
            model: 'Restaurant',
            key: 'restaurant_name',
        },
    },
    customer_id: {
        type: Number,
        references: {
            model: 'Customer',
            key: '_id',
        },
    },
    customer_name:{
        type: String,
        references: {
            model: 'Customer',
            key: 'first_name',
        },
    }
}, {
    timestamps: false
});


module.exports = Order = mongoose.model('order', orderSchema);