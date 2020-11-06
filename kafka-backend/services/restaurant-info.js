var Restaurant = require('../models/restaurant');

handle_request =  async(msg, callback) => {   
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(msg.id, msg);
        if(restaurant) {
            callback(null, {status: 200, responseMessage: "Successful"});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
