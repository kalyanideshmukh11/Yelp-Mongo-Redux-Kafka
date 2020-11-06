const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');

router.get('/', checkAuth, async (req, res) => {
    let payload = {query: req.query, user: req.user};
    kafka.make_request('customers', payload, (err, results) => {
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
