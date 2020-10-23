const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restImagesSchema = new Schema ({
    id: { type: Number, primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    rest_id: {
            type: Number,
            references: {
                model: 'Restaurant',
                key: '_id',
            },
        },
    image: {type: String},
    },{
        
        timestamps: false
    });


module.exports = RestImages = mongoose.model('restimages', restImagesSchema);