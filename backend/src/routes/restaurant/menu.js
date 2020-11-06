const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');

router.post('/add',  async (req, res) => {
    req.body.user = req.user;
    kafka.make_request('restaurant_menu', req.body, (err, results) => {        
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                menu: results,
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
                menus: results,
            });
            res.end();
        }
    });
});

router.get('/customers', checkAuth, async (req, res) => {
    kafka.make_request('restaurant_customers', req.query, (err, results) => {
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
