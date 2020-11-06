const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String,
    },
    ingredient: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        
    },
    price: {
        type: Number,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant'
    },
    order: [
        {
            status: {
                type: String,
                defaultValue: 'Pending',
            },
            order_date: {
                type: Date,
            },
            customer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'customer'
            }
        }
    ]
});

MenuSchema.plugin(mongoosePaginate);

module.exports = Menu = mongoose.model('menu', MenuSchema, 'menu');
