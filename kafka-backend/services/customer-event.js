var Event = require('../models/event');

handle_request =  async(msg, callback) => {
    const event = await Event.findById(msg.id);
    const customer = msg.user._id 
    try {
        const customerEntry = {
            status: 'Registered',
            customer
        }
		event.registration.unshift(customerEntry);
        await event.save();
        
        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;


