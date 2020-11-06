var Customer = require('../models/customer');
var Restaurant = require('../models/restaurant');

handle_request = async (msg, callback) => {
    let { email } = msg;
    const receiverCustomer = await Customer.findOne({email});

    const senderRestaurant = await Restaurant.findById(msg.user._id);

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
        let receiver = receiverCustomer.first_name + ' ' + receiverCustomer.last_name;
        let sender = senderRestaurant.name;
        let senderMessageEntry = {
            entity: receiver,
            date: Date.now(),
            email,
        };
        let receiverMessageEntry = {
            entity: sender,
            date: Date.now(),
            email: senderRestaurant.email,
        };
        
        // entry in sender
        if (senderRestaurant.message_list.length) {
            let history = senderRestaurant.message_list.find(message => message.email == email);
            if(history) {
                history.message_conversation.unshift(senderMessageConvEntry);
                await senderRestaurant.save();
            } else {
                senderRestaurant.message_list.push(senderMessageEntry);
                senderRestaurant.message_list[senderRestaurant.message_list.length - 1].message_conversation.push(senderMessageConvEntry);
                await senderRestaurant.save();
            }
        } else {
            senderRestaurant.message_list.push(senderMessageEntry);
            senderRestaurant.message_list[0].message_conversation.push(senderMessageConvEntry);
            await senderRestaurant.save();
        }

        // entry in receiver
        if (receiverCustomer.message_list.length) {
            let history = receiverCustomer.message_list.find(message => message.email == senderRestaurant.email);
            if(history) {
                history.message_conversation.unshift(receiverMessageConvEntry);
                await receiverCustomer.save();
            } else {
                receiverCustomer.message_list.push(receiverMessageEntry);
                receiverCustomer.message_list[receiverCustomer.message_list.length - 1].message_conversation.push(receiverMessageConvEntry);
                await receiverCustomer.save();
            }
        } else {
            receiverCustomer.message_list.push(receiverMessageEntry);
            receiverCustomer.message_list[0].message_conversation.push(receiverMessageConvEntry);
            await receiverCustomer.save();
        }

        callback(null, { status: 200, responseMessage: senderRestaurant.message_list[0].message_conversation });
    } catch (e) {
        console.log(e)
        callback(null, { status: 500, responseMessage: 'Unable to save data.' });
    }
};

exports.handle_request = handle_request;