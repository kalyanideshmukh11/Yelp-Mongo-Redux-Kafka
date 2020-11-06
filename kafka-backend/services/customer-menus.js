var Menu = require('../models/menu');
var Restaurant = require('../models/restaurant');

handle_request =  async(msg, callback) => {
    let sortVal = msg.sortBy;
    let query = new Object();
    if(msg.filter)
        query.menu_type = msg.filter;
    if(msg.searchStr & msg.searchVal)
        query[msg.searchStr] = {"$regex": msg.searchVal, "$options": "i"};    
    let options;
    if(sortVal) {
        options = {
            page: Number(msg.page),
            sort: {[sortVal]: Number(msg.order)},
            limit: 5,
        }
    } else {
        options = {
            page: Number(msg.page),
            sort: {},
            limit: 5,
        }
    }
    try {
        let menus = await Menu.paginate(query, options, (err, result) => {
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