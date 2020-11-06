var Customer = require('../models/customer');

handle_request =  async(msg, callback) => {   
    try {
        const customer = await Customer.findByIdAndUpdate(msg.id, msg);
        if(customer) {
            callback(null, {status: 200, responseMessage: "Successful"});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
