var bcrypt = require('bcrypt');
var Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
const config = require('../config');

handle_request =  async(msg, callback) => {
    const { email, password } = msg;
    try {  
        const userCustomer = await Customer.findOne({
            email
		});
		
        if (!userCustomer) {
			callback(null, {status: 400, responseMessage: { msg: 'User not found.' }});
            // return res.status(400).json({ msg: 'User not found.' });
		}
		
        const isMatch = await bcrypt.compare(password.toString(), userCustomer.password);
        if (!isMatch) {
			// return res.status(400).json({ msg: 'Invalid Credentials. Please try again.' });
			callback(null, {status: 400, responseMessage: { msg: 'Invalid Credentials. Please try again.' }});
		}
        const payload = {
            user: {
				_id: userCustomer._id,
				email: userCustomer.email,
				first_name: userCustomer.first_name,
				user: userCustomer.user,
            },
        };        
        jwt.sign(
            payload,
            config.JWTPASSWORD,
            {
                expiresIn: 360000,
            },
            (err, token) => {
				if (err) throw err;
				callback(null, {status: 200, responseMessage: {token: "JWT " + token, user: payload.user.user}});
                // res.status(200).json({token: "JWT " + token});
            },
        );
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to log in. Please try again.'});
        // return res.status(500).json('Unable to log in. Please try again.');
    }
}

exports.handle_request = handle_request;