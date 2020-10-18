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
        let userRestaurant = await Restaurant.findOne({
            where: {
                email_id: restaurant.email_id,
            },
        });
        console.log("1")
        if (userRestaurant) {
            return res.status(404).send('Email already exists! Please sign in or create a new account.');
        }
        console.log("2")
        userRestaurant = new Restaurant({
            ...restaurant,
        });
        console.log("3")
        //console.log(userCustomer)
        // await userStudent.save();
        // res.status(200).json('Successful');
        const salt = await bcrypt.genSalt(10);
        
        userRestaurant.password = await bcrypt.hash(userRestaurant.password, salt);
        console.log("4")
        await userRestaurant.save();
        console.log("5")
        const payload = {
            user: {
                id: userRestaurant.id,
            },
        };
        //console.log(payload)
        jwt.sign(
            payload,
            //process.env.JWTPASSWORD,
            constants.JWT_KEY,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            },
        );
        console.log("6")
    } catch (e) {
        return res.status(500).json('Unable to sign up. Please try again.');
    }
});

router.post('/login', async (req, res) => {
    try {
        const {email_id, password} = req.body;
        const userRestaurant = await Restaurant.findOne({
            where: {
                email_id: email_id,
            },
        });
        // if (userStudent) {
        //     return res.status(200).json('Successful');
        // }
        if (!userRestaurant) {
            return res.status(400).json({ msg: 'Restaurant not found.' });
        }
        const isMatch = await bcrypt.compare(password.toString(), userRestaurant.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials. PLease try again.' });
        }
        const payload = {
            user: {
                id: userRestaurant.id,
            },
        };
        //added cookie
        res.cookie('persona',"restaurant",{maxAge: 900000, httpOnly: false, path : '/'});
        jwt.sign(
            payload,
            //process.env.JWTPASSWORD,
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
        console.log(e)
        return res.status(500).json('Unable to log in. Please try again.');
    }
});


module.exports = router;
