var Menu = require('../models/menu');

handle_request =  async(msg, callback) => {
    let options = {
        page: Number(msg.query.page),
        limit: 5,
    }
    try {
        const menus = await Menu.paginate({restaurant: msg.user._id}, options, (err, result) => {
            return result.docs;
        })
        if (menus) {
            callback(null, {status: 200, responseMessage: menus});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
