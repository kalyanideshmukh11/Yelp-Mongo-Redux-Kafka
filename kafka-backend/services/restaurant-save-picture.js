var Restaurant = require('../models/restaurant');

handle_request =  async(msg, callback) => {
    try {
        const restaurant = await Restaurant.findOne({_id: msg.id}, (err, result) => {
            return result;
        })
        if (restaurant) {
            await restaurant.updateOne({
                profile_picture: msg.filename,
            });
            callback(null, {status: 200, responseMessage: 'Success'});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;