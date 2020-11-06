var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    try {
        const student = await Student.findOne({_id: msg.id}, (err, result) => {
            return result;
        })

        if (student) {
            student.skills.push(msg.skill);
            student.save();
            callback(null, {status: 200, responseMessage: 'Successful'});
        }
    } catch (e) {
        callback(null, {status: 500, responseMessage: 'Unable to fetch data.'});
    }
}

exports.handle_request = handle_request;
