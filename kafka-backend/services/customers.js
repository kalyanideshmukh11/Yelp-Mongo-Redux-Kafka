const Customer = require('../models/customer');

handle_request = async (msg, callback) => {
    let options = {
        page: Number(msg.query.page),
        sort: {},
        limit: 5,
    }
    try {
        let customer;
        if (msg.user.user === 'customer') {
            customer = await Customer.findById(msg.user._id);
        }

        let customers;
        if (!(msg.query.name || msg.query.college_name || msg.query.skill)) {
            customers = await Customer.paginate({_id : {'$ne': customer._id}}, options, (err, result) => {
                return result.docs;
            })
        } else if (msg.query.name || msg.query.college_name || msg.query.skill) {
            if (msg.query.name) {
                customers = await Customer.paginate({first_name: msg.query.name}, options, (err, result) => {
                    return result.docs;
                })
            }
            if (msg.query.college_name) {
                customers = await Customer.paginate({college_name: msg.query.college_name}, options, (err, result) => {
                    return result.docs;
                })
            }
            if (msg.query.skill) {
                customers = await Customer.paginate({skills: [msg.query.skill]}, options, (err, result) => {
                    return result.docs;
                })
            }
        }
        callback(null, { status: 200, responseMessage: customers });
    } catch (e) {
        callback(null, { status: 500, responseMessage: 'Unable to fetch data.' });
    }
};

exports.handle_request = handle_request;