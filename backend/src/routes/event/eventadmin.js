
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Event = require('../../models/event');
const EventAttendee= require('../../models/eventattendee');

router.get('/eventdetails', auth, async (req, res) => {
    try {
         eventDetails = await Event.findAll({
            where: {
                rest_id: req.user.id,
            },
        });
        if (eventDetails) {
            return res.status(200).json(eventDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/eventdetails', auth, async (req, res) => {
    try {
        const eventdata = req.body;
        var eventdataEntry = new Event({
            ...eventdata,
            rest_id: req.user.id,})
            await eventdataEntry.save();
            console.log("done")
            res.status(200).json(eventdataEntry);
            console.log("sent back")
        }
     catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});

router.get('/list', auth, async (req, res) => {
    try {
         eventList = await Event.findAll();
         //console.log(eventList)
        if (eventList) {
            return res.status(200).json(eventList);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/register', auth, async (req, res) => {
    try {
        console.log("inside post attendee")
        const eventdata = req.body;
        console.log(req.body)
        var eventdataEntry = new EventAttendee({
            ...eventdata,
            customer_id: req.user.id
        })
            await eventdataEntry.save();
            console.log("done")
            res.status(200).json(eventdataEntry);
            console.log("sent back")
        }
     catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});

router.get('/register', auth, async (req, res) => {
    try {
         eventDetails = await EventAttendee.findAll({
            where: {
                customer_id: req.user.id,
            },
        });
        if (eventDetails) {
            return res.status(200).json(eventDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

module.exports = router;
