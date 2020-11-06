var bcrypt = require('bcrypt');
var Restaurant = require('../models/restaurant');
const jwt = require('jsonwebtoken');
const config = require('../config');

handle_request =  async(msg, callback) => {
	try {  
        console.log("inside signup service request")      
        const restaurant = msg;
        let userRestaurant = await Restaurant.findOne({
                email: restaurant.email,
		});
		
        if (userRestaurant) {
			// return res.status(404).send('Email already exists! Please sign in or create a new account.');
			callback(null, {status: 404, responseMessage: 'Email already exists! Please sign in or create a new account.'});
        }
        userRestaurant = new Restaurant({
            ...restaurant,
        });
        const salt = await bcrypt.genSalt(10);

        userRestaurant.password = await bcrypt.hash(userRestaurant.password, salt);
		await userRestaurant.save();        
        payload = {
            user: {
				_id: userRestaurant._id,
				email: userRestaurant.email,
				user: userRestaurant.user,
            },
        };

        jwt.sign( payload, config.JWTPASSWORD, { expiresIn: 360000, },
            (err, token) => {               
                if (err) throw err;
				// res.status(200).end("JWT " + token);
				callback(null, {status: 200, responseMessage: {token: "JWT " + token, user: payload.user.user}});
            },
        );
    } catch (e) {
		// return res.status(500).json('Unable to sign up. Please try again.');
		callback(null, {status: 500, responseMessage: 'Unable to sign up. Please try again.'});
    }
}

exports.handle_request = handle_request;