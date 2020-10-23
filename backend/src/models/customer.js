const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const customerSchema = new Schema({
    id:{type: Number,primaryKey: true,unique: true,allowNull: false,autoIncrement: true},
    email_id: {type: String,primaryKey: true,unique: true,allowNull: false, validate: [validateEmail, 'Please fill a valid email address']},
    first_name: {type: String, allowNull: false},
    last_name: {type: String, allowNull: false},
    password: {type: String, allowNull: false}, 
    phone_number: {type: String, unique: true, allowNull: true},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    dob:{ type : Date, default: Date.now },
    photo:{type: String},
    }, {
       
        versionKey: false
    });

module.exports = Customer = mongoose.model('customer', customerSchema);