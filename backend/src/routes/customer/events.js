const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');

router.get('/', checkAuth, async (req, res) => {
    let payload = {query: req.query, id: req.user._id};
    kafka.make_request('customer_events', payload, (err, results) => {
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

router.post('/registration', checkAuth, async (req, res) => {
    req.body.user = req.user;
    kafka.make_request('customer_event', req.body, (err, results) => {
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

module.exports = router;
