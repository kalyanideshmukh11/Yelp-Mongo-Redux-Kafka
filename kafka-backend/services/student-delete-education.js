var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    try {
		const student = await Student.findById(msg.user._id);
		student.education.pull(msg._id);
		student.save();
		callback(null, {status: 200, responseMessage: student});
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
};

exports.handle_request = handle_request;