//login and Signup
const express = require('express');
var cookieParser = require('cookie-parser');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Restaurant = require('../../models/restaurant');
const constants = require('../../db/constants');

router.post('/signup', async (req, res) => {
    try {
        const restaurant = req.body;
        let userRestaurant = await Restaurant.findOne({ email_id: restaurant.email_id });
        if (userRestaurant) {
            return res.status(400).json({msg:'Email already exists! Please sign in or create a new account.'});
        }

        userRestaurant = new Restaurant({
            ...restaurant,
        });


        const salt = await bcrypt.genSalt(10);
        
        userRestaurant.password = await bcrypt.hash(userRestaurant.password, salt);
        await userRestaurant.save();
        const payload = {
            user: {
                id: userRestaurant.id,
            },
        };
        jwt.sign(
            payload,

            constants.JWT_KEY,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            },
        );
    } catch (e) {
        return res.status(500).json('Unable to sign up. Please try again.');
    }
});

router.post('/login', async (req, res) => {
    try {
        const rest = req.body;
        const userRestaurant = await Restaurant.findOne({ email_id: rest.email_id });
        if (!userRestaurant) {
            return res.status(400).json({ msg: 'Restaurant not found.' });
        }
        const isMatch = await bcrypt.compare(rest.password.toString(), userRestaurant.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials. PLease try again.' });
        }
        const payload = {
            user: {
                id: userRestaurant._id,
            }
        };
        res.cookie('persona',"restaurant",{maxAge: 900000, httpOnly: false, path : '/'});
        jwt.sign(payload, constants.JWT_KEY, {expiresIn: 360000}, (err, token) => {
                if (err) {
                console.log(err)
                 throw err;}
                res.json({ token });
                console.log(token);
            },
        );  
    } catch (e) {
        console.log(e)
        return res.status(500).json('Unable to log in. Please try again.');
    }
});


module.exports = router;
