var Event = require('../models/event');

handle_request =  async(msg, callback) => {
    try {
        const event = msg;
        const eventEntry = new Event({
            ...event,
            restaurant: msg.user._id,
        });
        await eventEntry.save();
        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
        console.log(e)
        callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
