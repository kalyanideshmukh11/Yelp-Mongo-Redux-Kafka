//add update details

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname)
    }
});

const upload = multer({ storage: storage });

const dateformat = require('dateformat');

const fs = require('fs');

const auth = require('../../middleware/auth');
//console.log(auth)
const Restaurant = require('../../models/restaurant');
const Menu= require('../../models/menu');

router.get('/details', auth, async (req, res) => {
    try {
        const restaurantDetails = await Restaurant.findAll({
            where: {
                id: req.user.id,
            },
        });
        if (restaurantDetails) {
            return res.status(200).json(restaurantDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/details', auth, async (req, res) => {
    try {
        const data = req.body;

        const restaurantDetails = await Restaurant.findOne({
            where: {
                id: req.user.id,
            },
        });
        console.log("found")
        if (restaurantDetails) {
            const updatedRestaurant = await restaurantDetails.update({
                email_id: data.email_id,
                restaurant_name: data.restaurant_name,
                restaurant_location: data.restaurant_location,
                restaurant_city: data.restaurant_city,
                restaurant_state: data.restaurant_state,
                restaurant_country: data.restaurant_country,
                restaurant_zip: data.restaurant_zip,
                restaurant_description: data.restaurant_description,
                contact_info: data.contact_info,
                timing: data.timing,
                cousine: data.cousine,
                delivery_method: data.delivery_method,
            });
            console.log("updated")
            const restaurant = await Restaurant.findOne({
                where: {
                    id: updatedRestaurant.id,
                },
            });
            console.log("found back")
            res.status(200).json(restaurant);
            console.log("send back")
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});
router.get('/menudetails', auth, async (req, res) => {
    try {
         menuDetails = await Menu.findAll({
            where: {
                rest_id: req.user.id,
            },
        });
        if (menuDetails) {
            return res.status(200).json(menuDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/menudetails', auth, async (req, res) => {
    try {
        const menudata = req.body;
        var menudataEntry = new Menu({
            ...menudata,
            rest_id: req.user.id,})
            await menudataEntry.save();
            console.log("done")
            res.status(200).json(menudataEntry);
            console.log("sent back")
        }
     catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});

module.exports = router;
