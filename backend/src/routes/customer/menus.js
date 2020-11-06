const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname)
    }
});

const upload = multer({ storage: storage });

router.get('/', checkAuth, async (req, res) => {
    kafka.make_request('customer_menus', req.query, (err, results) => {
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

router.get('/orders', checkAuth, async (req, res) => {
    let payload = {query: req.query, user: req.user};
    kafka.make_request('customer_orders', payload, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                orders: results,
            });
            res.end();
        }
    });
});

router.post('/order', upload.single('resume'), checkAuth, async (req, res) => {
    req.body.user = req.user;
    req.body.resume = req.file.filename;
    kafka.make_request('customer_order', req.body, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                order: results,
            });
            res.end();
        }
    });
});

module.exports = router;
