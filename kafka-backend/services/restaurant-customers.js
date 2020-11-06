var Menu = require('../models/menu');

handle_request =  async(msg, callback) => {
    try {
        const applications = await Menu.find({ _id: msg.menuId }).select('order -_id');
        const customers = [];
    
        if (orders && orders[0]) {
            for( const app of orders[0].order ) {
                let student = await Student.find({ _id: app.student });
                customers.push(student[0]);
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