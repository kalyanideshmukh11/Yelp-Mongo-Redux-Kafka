const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const multer = require('multer');
const Images = require('../../models/restImages');
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


router.get('/profilepic', auth, async (req, res) => {
    try {
        const restaurantImages = await Images.findAll({
            where: {
                rest_id: req.user.id,
            },
        });
        console.log("got photo")
        if (restaurantImages) {
            console.log("Photo sent")
            return res.status(200).json(restaurantImages);
        }
        console.log("dont know")
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/profilepic', upload.single('restaurantImages'), auth, async (req, res) => {
    try { console.log("1")
            var photoData = new Images({
                image: req.file.filename,
                rest_id: req.user.id,})
            console.log("2",photoData);
            await photoData.save();
            console.log("5")
            res.set('Content-Type', 'image/jpg')
            res.status(200).json(req.file);
            console.log("6")
        }
     catch (e) {
        return res.status(400).json('Unable to fetch data.');
    }
});
module.exports = router
