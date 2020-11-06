var Event = require('../models/event');

handle_request =  async(msg, callback) => {
    try {
        const registrations = await Event.find({ _id: msg.eventId }).select('registration -_id');
        const customers = [];
        if (registrations && registrations[0]) {
            for( const reg of registrations[0].registration ) {
                let customer = await Student.find({ _id: reg.customer });
                customers.push(customer[0]);
            }
            
            if(customers && customers.length > 0) {
                callback(null, {status: 200, responseMessage: customers});
            }
        }
    
        callback(null, {status: 200, responseMessage: customers});
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
