var bcrypt = require('bcrypt');
var Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
const config = require('../config');

handle_request =  async(msg, callback) => {
	try {
        
        const student = msg;
        let userCustomer = await Customer.findOne({
                email: student.email,
		});
		
        if (userCustomer) {
			// return res.status(404).send('Email already exists! Please sign in or create a new account.');
			callback(null, {status: 404, responseMessage: 'Email already exists! Please sign in or create a new account.'});
        }
        userCustomer = new Customer({
            ...student,
        });
        const salt = await bcrypt.genSalt(10);

        userCustomer.password = await bcrypt.hash(userCustomer.password, salt);
		await userCustomer.save();        
        payload = {
            user: {
				_id: userCustomer._id,
				email: userCustomer.email,
				first_name: userCustomer.first_name,
				user: userCustomer.user,
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