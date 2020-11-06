var Customer = require('../models/customer');

handle_request =  async(msg, callback) => {
    try {
        const customer = await Customer.findOne({_id: msg.id}, (err, result) => {
            return result;
        })
        if (customer) {
            await customer.updateOne({
                profile_picture: msg.filename,
            });
            callback(null, {status: 200, responseMessage: 'Success'});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;