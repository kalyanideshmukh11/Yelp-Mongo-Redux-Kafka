var bcrypt = require('bcrypt');
var Restaurant = require('../models/restaurant');
const jwt = require('jsonwebtoken');
const config = require('../config');

handle_request =  async(msg, callback) => {
    const { email, password } = msg;
    console.log("inside request data:",msg)
    try {
        const userRestaurant = await Restaurant.findOne({
            email: email
        });
        if (!userRestaurant) {
            callback(null, {status: 400, responseMessage: { msg: 'Restaurant not found.' }});
        }
        const isMatch = await bcrypt.compare(password.toString(), userRestaurant.password);
        if (!isMatch) {
            callback(null, {status: 400, responseMessage: { msg: 'Invalid Credentials. Please try again.' }});
        }
        const payload = {
            user: {
                _id: userRestaurant._id,
                email: userRestaurant.email,
				user: userRestaurant.user,
            },
        };
        const token = jwt.sign(payload, secret, {
            expiresIn: 1008000
        });
        jwt.sign(
            payload,
            config.JWTPASSWORD,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                callback(null, {status: 200, responseMessage: {token: "JWT " + token, user: payload.user.user}});
            },
        );
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to log in. Please try again.'});
    }
}

exports.handle_request = handle_request;