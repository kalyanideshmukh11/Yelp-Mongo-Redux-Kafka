const express = require('express');
var cookieParser = require('cookie-parser');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Customer = require('../../models/customer');
const constants = require('../../db/constants');

router.post('/customersignup', async (req, res) => {
    try {
        const customer = req.body;
        let userCustomer = await Customer.findOne({
            where: {
                email_id: customer.email_id,
            },
        });
        if (userCustomer) {
            return res.status(404).send('Email already exists! Please sign in or create a new account.');
        }
        userCustomer = new Customer({
            ...customer,
        });
        const salt = await bcrypt.genSalt(10);
        
        userCustomer.password = await bcrypt.hash(userCustomer.password, salt);
        await userCustomer.save();
        const payload = {
            user: {
                id: userCustomer.id,
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
    } catch (e) {
        return res.status(500).json('Unable to sign up. Please try again.');
    }
});

router.post('/customerlogin', async (req, res) => {
    try {
        const {email_id, password} = req.body;
        const userCustomer = await Customer.findOne({
            where: {
                email_id: email_id,
            },
        });
        if (!userCustomer) {
            return res.status(400).json({ msg: 'User not found.' });
        }
        const isMatch = await bcrypt.compare(password.toString(), userCustomer.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials. PLease try again.' });
        }
        const payload = {
            user: {
                id: userCustomer.id,
            },
        };
        //added cookie
        res.cookie('persona',"customer",{maxAge: 900000, httpOnly: false, path : '/'});
        jwt.sign(
            payload,
            //process.env.JWTPASSWORD,
            constants.JWT_KEY,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
            },
        );
    } catch (e) {
        console.log(e)
        return res.status(500).json('Unable to log in. Please try again.');
    }
});


module.exports = router;
