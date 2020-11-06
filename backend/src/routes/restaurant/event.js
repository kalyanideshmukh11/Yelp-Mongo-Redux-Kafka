const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const Event = require('../../models/event');
const kafka = require('../../../kafka/client');

router.post('/', checkAuth, async (req, res) => {
    req.body.user = req.user;
    kafka.make_request('restaurant_event', req.body, (err, results) => {        
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                event: results,
            });
            res.end();
        }
    });
});

router.get('/all', checkAuth, async (req, res) => {
    let payload = {query: req.query, user: req.user};
    kafka.make_request('restaurant_events', payload, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                events: results,
            });
            res.end();
        }
    });
});

router.get('/customers', checkAuth, async (req, res) => {
    kafka.make_request('company_event_customers', req.query, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                customers: results,
            });
            res.end();
        }
    });
});

module.exports = router;
