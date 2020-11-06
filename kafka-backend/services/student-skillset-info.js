var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    try {
        const skillset = await Student.findOne({_id: msg.id}, (err, result) => {
            return result;
        }).select('skills');

        if (skillset) {
            callback(null, {status: 200, responseMessage: skillset});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
