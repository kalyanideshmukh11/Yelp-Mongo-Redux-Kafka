const config = require('../config');
var mongoose = require('mongoose');
const db = config.URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch(e) {
        console.log(e);
    }
}

module.exports = connectDB;