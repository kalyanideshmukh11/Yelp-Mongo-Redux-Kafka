var Menu = require('../models/menu');

handle_request =  async(msg, callback) => {
    try {
        console.log("menu entry...", msg)
        const menu = msg;
        const menuEntry = new Menu({
            ...menu,
            restaurant: msg.user._id
        });
        
        console.log("menu entry",menuEntry)
        await menuEntry.save();
        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
