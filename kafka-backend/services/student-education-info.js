var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    try {
        const results = await Student.findById(msg.id, (err, result) => {
            return result;
        }).select('education');

        if (results) {
            callback(null, {status: 200, responseMessage: results});
        }
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
