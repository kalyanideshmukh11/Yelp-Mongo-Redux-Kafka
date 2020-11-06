const express = require('express');

const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname)
    }
});

const upload = multer({ storage: storage });

const kafka = require('../../../kafka/client');

const { checkAuth } = require('../../middleware/auth');

const Restaurant = require('../../models/restaurant');

router.get('/details', checkAuth, async (req, res) => {
    let id;
    if(req.query && req.query.viewId) {
        id = req.query.viewId;
    } else {
        id = req.user._id;
    }
    kafka.make_request('restaurant_details', {id}, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                restaurantInfo: results,
            });
            res.end();
        }
    });
});

router.post('/details', checkAuth, async (req, res) => {
    req.body.id = req.user._id;
    kafka.make_request('restaurant_info', req.body, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                restaurantInfo: results,
            });
            res.end();
        }
    });
});

// router.get('/education', checkAuth, async (req, res) => {
//     let id;
//     if(req.query && req.query.viewId) {
//         id = req.query.viewId;
//     } else {
//         id = req.user._id;
//     }
//     kafka.make_request('student_education_info', {id}, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 education: results,
//             });
//             res.end();
//         }
//     });
// });

// router.post('/education', checkAuth, async (req, res) => {
//     req.body.id = req.user._id;
//     kafka.make_request('student_education', req.body, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 education: results,
//             });
//             res.end();
//         }
//     });
// });

// router.delete('/education', checkAuth, (req, res) => {
//     req.query.user = req.user;
//     kafka.make_request('student_delete_education', req.query, (err, results) => {
//       console.log('in result');
//       console.log(results);
//       if (err) {
//         console.log('Inside err');
//         res.json({
//           status: 'error',
//           msg: 'System Error, Try Again.',
//         });
//       } else {
//         console.log('Inside else');
//         res.json({
//             education: results,
//         });
  
//         res.end();
//       }
//     });
// });
  
// router.post('/updateeducation', checkAuth, (req, res) => {
//     req.body.user = req.user;
//     kafka.make_request('student_update_education', req.body, (err, results) => {
//       console.log('in result');
//       console.log(results);
//       if (err) {
//         console.log('Inside err');
//         res.json({
//           status: 'error',
//           msg: 'System Error, Try Again.',
//         });
//       } else {
//         console.log('Inside else');
//         res.json({
//             education: results,
//         });
  
//         res.end();
//       }
//     });
// });

// router.get('/experience', checkAuth, async (req, res) => {
//     let id;
//     if(req.query && req.query.viewId) {
//         id = req.query.viewId;
//     } else {
//         id = req.user._id;
//     }
//     kafka.make_request('student__experience_info', {id}, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 experience: results,
//             });
//             res.end();
//         }
//     });
// });

// router.post('/experience', checkAuth, async (req, res) => {
//     req.body.id = req.user._id;
//     kafka.make_request('student__experience', req.body, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 experience: results,
//             });
//             res.end();
//         }
//     });
// });

// router.post('/updateexperience', checkAuth, (req, res) => {
//     req.body.user = req.user;
//     kafka.make_request('student_update_experience', req.body, (err, results) => {
//       console.log('in result');
//       console.log(results);
//       if (err) {
//         console.log('Inside err');
//         res.json({
//           status: 'error',
//           msg: 'System Error, Try Again.',
//         });
//       } else {
//         console.log('Inside else');
//         res.json({
//             experience: results,
//         });
  
//         res.end();
//       }
//     });
// });

// router.delete('/experience', checkAuth, (req, res) => {
//     req.query.user = req.user;
//     kafka.make_request('student_delete_experience', req.query, (err, results) => {
//       console.log('in result');
//       console.log(results);
//       if (err) {
//         console.log('Inside err');
//         res.json({
//           status: 'error',
//           msg: 'System Error, Try Again.',
//         });
//       } else {
//         console.log('Inside else');
//         res.json({
//             experience: results,
//         });
  
//         res.end();
//       }
//     });
//   });

// router.get('/skillset', checkAuth, async (req, res) => {
//     let id;
//     if(req.query && req.query.viewId) {
//         id = req.query.viewId;
//     } else {
//         id = req.user._id;
//     }
//     kafka.make_request('student_skillset_info', {id}, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 skillset: results,
//             });
//             res.end();
//         }
//     });
// });

// router.post('/skillset', checkAuth, async (req, res) => {
//     req.body.id = req.user._id;
//     kafka.make_request('student_skillset', req.body, (err, results) => {
//         if (err) {
//             console.log('Inside err');
//             res.json({
//                 status: 'error',
//                 msg: 'System Error, Try Again.',
//             });
//         } else {
//             console.log('Inside else');
//             res.json({
//                 skillset: results,
//             });
//             res.end();
//         }
//     });
// });

router.post('/profilepic', upload.single('profile_pic'), checkAuth, async (req, res) => {
    let payload = {id: req.user._id, filename: req.file.filename};
    kafka.make_request('company_save_picture', payload, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                result: results,
            });
            res.end();
        }
    });
});

router.post('/message', checkAuth, (req, res) => {
    req.body.user = req.user;
    kafka.make_request('company_message', req.body, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                message: results,
            });

            res.end();
        }
    });
});

router.get('/messages', checkAuth, async (req, res) => {
    id = req.user._id;
    kafka.make_request('company_messages', {id}, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                messages: results,
            });
            res.end();
        }
    });
});

module.exports = router;