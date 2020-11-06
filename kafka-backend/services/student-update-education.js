var Student = require('../models/student');

handle_request =  async(msg, callback) => {
    try {
		const education = {
			...msg
		};
		await Student.findOneAndUpdate({ "_id": msg.user._id, "education._id": msg._id },
			{
				"$set": {
					"education.$": education
				}
			},
			(err,res) => {
				if(err) callback(null, {status: 400, responseMessage: 'Unable to update'});
			}
		);
		callback(null, {status: 200, responseMessage: "Success"});
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
};

exports.handle_request = handle_request;