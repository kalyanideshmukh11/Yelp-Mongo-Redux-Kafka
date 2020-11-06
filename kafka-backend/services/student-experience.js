var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    const experience = msg;
    try {
        console.log(msg.id)
        const student = await Student.findById(msg.id);
        const experienceEntry = {
            ...experience
        }
		student.experience.unshift(experienceEntry);
        await student.save();

        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
