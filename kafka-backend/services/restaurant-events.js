var Event = require('../models/event');

handle_request =  async(msg, callback) => {
    let options = {
        page: Number(msg.query.page),
        limit: 5,
    }
    try {
        const events = await Event.paginate({restaurant: msg.user._id},options, (err, result) => {
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
