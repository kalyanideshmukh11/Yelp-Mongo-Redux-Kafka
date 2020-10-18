const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const multer = require('multer');
const Customer = require('../../models/customer');
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
        const profilepic = await Customer.findAll({
            where: {
                id: req.user.id,
            },
        });
        console.log("got it")
        if (profilepic) {
            return res.status(200).json(profilepic);
        }
        console.log("dont know")
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/profilepic', upload.single('profile_pic'), auth, async (req, res) => {
    try { console.log("1")
        const photoData = await Customer.findOne({
            where: {
                id: req.user.id,
            },
        });
        console.log("2")
        //const buf = await (await sharp(req.file.buffer).resize(420, 240).toBuffer())
        console.log("3")
        //const buffer = buf.toString('base64')
        console.log("4")
        if (photoData) {
            await photoData.update({
                photo: req.file.filename,
                //photo:buffer
            });
            console.log("5")
            res.set('Content-Type', 'image/jpg')
            res.status(200).json(req.file);
            console.log("6")
        }
        // '../../../uploads/img2.jpg'
    } catch (e) {
        return res.status(400).json('Unable to fetch data.');
    }
});
module.exports = router