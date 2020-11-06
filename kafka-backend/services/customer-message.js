var Customer = require('../models/customer');
var Restaurant = require('../models/restaurant');

handle_request = async (msg, callback) => {
    let { email } = msg;
    let receiver;
    let isRestaurant = false;
    receiver = await Customer.findOne({email});
    
    if(!receiver) {
        isRestaurant = true;
        receiver = await Restaurant.findOne({email});
    }
    
    const senderCustomer = await Customer.findById(msg.user._id);

    const senderMessageConvEntry = {
        date: Date.now(),
        body: msg.body,
        action: 'Sent'
    };
    const receiverMessageConvEntry = {
        date: Date.now(),
        body: msg.body,
        action: 'Received'
    };

    try {
        let senderMessageEntry = {
            entity: receiver.first_name + ' ' + receiver.last_name,
            date: Date.now(),
            email,
        };
        let receiverMessageEntry = {
            entity: senderCustomer.first_name + ' ' + senderCustomer.last_name,
            date: Date.now(),
            email: senderCustomer.email,
        };

        // entry in sender
        if (senderCustomer.message_list.length) {
            let history = senderCustomer.message_list.find(message => message.email == email);
            if(history) {
                history.message_conversation.unshift(senderMessageConvEntry);
                await senderCustomer.save();
            } else {
                senderCustomer.message_list.push(senderMessageEntry);
                senderCustomer.message_list[senderCustomer.message_list.length - 1].message_conversation.push(senderMessageConvEntry);
                await senderCustomer.save();
            }
        } else {
            senderCustomer.message_list.push(senderMessageEntry);
            senderCustomer.message_list[0].message_conversation.push(senderMessageConvEntry);
            await senderCustomer.save();
        }

        // entry in receiver
        if (receiver.message_list.length) {
            let history = receiver.message_list.find(message => message.email == senderCustomer.email);
            if(history) {
                history.message_conversation.unshift(receiverMessageConvEntry);
                await receiver.save();
            } else {
                receiver.message_list.push(receiverMessageEntry);
                receiver.message_list[receiver.message_list.length - 1].message_conversation.push(receiverMessageConvEntry);
                await receiver.save();
            }
        } else {
            receiver.message_list.push(receiverMessageEntry);
            receiver.message_list[0].message_conversation.push(receiverMessageConvEntry);
            await receiver.save();
        }

        if(isRestaurant) {
            callback(null, { status: 200, responseMessage: senderCustomer.message_list[senderCustomer.message_list.length - 1].message_conversation });
        } else {
            callback(null, { status: 200, responseMessage: senderCustomer.message_list[0].message_conversation });
        }        
    } catch (e) {
        callback(null, { status: 500, responseMessage: 'Unable to save data.' });
    }
};

exports.handle_request = handle_request;