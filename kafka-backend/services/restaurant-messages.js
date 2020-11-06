var Restaurant = require('../models/restaurant');

handle_request =  async(msg, callback) => {
    try {
        console.log(" comp entry")
        const results = await Restaurant.findById(msg.id, (err, result) => {
            return result;
        }).select('message_list');

        if (results) {
            callback(null, {status: 200, responseMessage: results});
        }
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
