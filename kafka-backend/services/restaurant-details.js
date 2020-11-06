var Restaurant = require('../models/restaurant');

handle_request =  async(msg, callback) => {
    try {
        const basicDetails = await Restaurant.findOne({_id: msg.id}, (err, result) => {
            return result;
        })
        if (basicDetails) {
            callback(null, {status: 200, responseMessage: basicDetails});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
