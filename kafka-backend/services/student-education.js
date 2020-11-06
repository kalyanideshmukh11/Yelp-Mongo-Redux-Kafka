var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    const education = msg;
    try {
        const student = await Student.findById(msg.id);
        const educationEntry = {
            ...education
        }
		student.education.unshift(educationEntry);
        await student.save();

        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
