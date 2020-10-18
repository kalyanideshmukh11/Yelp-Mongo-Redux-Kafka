
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Review= require('../../models/review');

router.get('/review', auth, async (req, res) => {
    try {
         reviewList = await Review.findAll({
            where: {
                rest_id: req.user.id,
            },
        });
        if (reviewList) {
            return res.status(200).json(reviewList);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});



router.post('/review', auth, async (req, res) => {
    try {
        console.log("inside post review")
        const review = req.body;
        console.log(req.body)
        var reviewDataEntry = new Review({
            ...review,
            customer_id: req.user.id
        })
            await reviewDataEntry.save();
            console.log("done")
            res.status(200).json(reviewDataEntry);
            console.log("sent back")
        }
     catch (e) {
        console.log(e);
        return res.status(500).json('Unable to save data.');
    }
});

module.exports = router;
