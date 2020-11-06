var Event = require('../models/event');
var ObjectId = require('mongoose').Types.ObjectId;

handle_request =  async(msg, callback) => {
    let query = {};
    if(msg.query.searchVal) {
        query.name = {"$regex": msg.query.searchVal, "$options": "i"};
    }
    if(msg.query.status) {
        query['registration.customer'] = new ObjectId(msg.id);
        query['registration.status'] = msg.query.status;
    }
    let options = {
        page: Number(msg.query.page),
        sort: {'date': 1},
        limit: 5,
    }
    try {
        const events = await Event.paginate(query, options, (err, result) => {
            return result.docs;
        })
        if (events) {
            callback(null, {status: 200, responseMessage: events});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;