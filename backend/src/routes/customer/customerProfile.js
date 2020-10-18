const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
//console.log(auth)
const Customer = require('../../models/customer');
const AboutMe = require('../../models/aboutme');

router.get('/basicdetails', auth, async (req, res) => {
    try {
        const basicDetails = await Customer.findAll({
            where: {
                id: req.user.id,
            },
        });
        if (basicDetails) {
            return res.status(200).json(basicDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/basicdetails', auth, async (req, res) => {
    try {
        const details = req.body;
        function clean(obj) {
            for (var propName in obj) { 
              if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
              }
            }
          }
          clean(details)
        const basicDetails = await Customer.findOne({
            where: {
                id: req.user.id,
            },
        });
        console.log("found")
        if (basicDetails) {
            const updatedCustomer = await basicDetails.update({
                email_id: details.email_id,
                first_name: details.first_name,
                last_name: details.last_name,
                dob: details.dob,
                city: details.city,
                state: details.state,
                country: details.country,
                password: details.password,
                phone_number: details.phone_number,
            });
            console.log("updated")
            const customer = await Customer.findOne({
                where: {
                    id: updatedCustomer.id,
                },
            });
            console.log("found back")
            res.status(200).json(customer);
            console.log("send back")
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});

router.get('/aboutme', auth,  async (req, res) => {
    try {
        const aboutme = await AboutMe.findAll({
            where: {
                id: req.user.id,
            },
        });
        if (aboutme) {
            return res.status(200).json(aboutme);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/aboutme',auth,  async (req, res) => {
    try {
        //console.log(req.body)
        const aboutme = req.body;
        const aboutMeInfo = await AboutMe.findOne({
            where: {
                id: req.user.id,
            },
        });
        console.log("found")
        if (aboutMeInfo) {
            var aboutmeEntry = await aboutMeInfo.update({
                yelping_since: aboutme.yelping_since,
                things_love: aboutme.things_love,
                findme_in: aboutme.findme_in,
                links: aboutme.links,
                headline: aboutme.headline,
            });
            console.log("updated");
        }
        else {
        var aboutmeEntry = new AboutMe({
            ...aboutme,
            id: req.user.id,
        });
    }
        //console.log("Aboutme Entry:",aboutmeEntry)
        await aboutmeEntry.save();
        console.log("done")
        res.status(200).json(aboutmeEntry);
        console.log("send back")
    } catch (e) {
        return res.status(500).json('Unable to save data.');
    }
});
module.exports = router;
