var Menu = require('../models/menu');
var ObjectId = require('mongoose').Types.ObjectId;

handle_request =  async(msg, callback) => {
    let id = msg.user._id;
    let query = {'order.customer': new ObjectId(id)};
    if(msg.query.filter) {
        query['order.status'] = msg.query.filter;
    }    
    let options = {
        page: Number(msg.query.page),
        limit: 5,
    }
    try {
        const results = await Menu.paginate(query, options, (err, result) => {
            return result.docs;
        })
        if (results) {
            results.forEach(doc => doc.order = doc.order.filter(app => app.customer == id));
            callback(null, {status: 200, responseMessage: results});
        }
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;