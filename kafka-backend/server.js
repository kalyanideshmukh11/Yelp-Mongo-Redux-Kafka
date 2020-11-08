var connection =  new require('./kafka/Connection');
//topics files
let CustomerSignup = require('./services/customer-signup');
let CustomerLogin = require('./services/customer-login');
let CustomerMenus = require('./services/customer-menus');
let CustomerOrders = require('./services/customer-orders');
let CustomerOrder = require('./services/customer-order');
let CustomerEvents = require('./services/customer-events');
let CustomerEvent = require('./services/customer-event');
let CustomerBasicDetails = require('./services/customer-basic-details');
let CustomerBasicDetail = require('./services/customer-basic-detail');
let CustomerSavePicture = require('./services/customer-save-picture');
let Customers = require('./services/customers');
let CustomerMessage = require('./services/customer-message');
let CustomerMessages = require('./services/customer-messages');
let RestaurantSignup = require('./services/restaurant-signup');
let RestaurantLogin = require('./services/restaurant-login');
let RestaurantMenu = require('./services/restaurant-menu');
let RestaurantMenus = require('./services/restaurant-menus');
let RestaurantCustomers = require('./services/restaurant-customers');
let RestaurantEvent = require('./services/restaurant-event');
let RestaurantEvents = require('./services/restaurant-events');
let RestaurantEventCustomers = require('./services/restaurant-event-customers');
let RestaurantMessage = require('./services/restaurant-message');
let RestaurantMessages = require('./services/restaurant-messages');
let RestaurantDetails = require('./services/restaurant-details');
let RestaurantInfo = require('./services/restaurant-info');
let RestaurantSavePicture = require('./services/restaurant-save-picture');
const connectDB = require('./db/mongoose');

connectDB();

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
		console.log(JSON.stringify(message.value));
		console.log('message');
		console.log(message);
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log("Inside kafka backend",data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest('customer_signup', CustomerSignup);
handleTopicRequest('customer_login', CustomerLogin);
handleTopicRequest('customer_menus', CustomerMenus);
handleTopicRequest('customer_orders', CustomerOrders);
handleTopicRequest('customer_order', CustomerOrder);
handleTopicRequest('customer_events', CustomerEvents);
handleTopicRequest('customer_event', CustomerEvent);
handleTopicRequest('customer_basic_details', CustomerBasicDetails);
handleTopicRequest('customer_basic_detail', CustomerBasicDetail);
handleTopicRequest('customer_save_picture', CustomerSavePicture);
handleTopicRequest('customers', Customers);
handleTopicRequest('customer_message', CustomerMessage);
handleTopicRequest('customer_messages', CustomerMessages);
handleTopicRequest('restaurant_signup', RestaurantSignup);
handleTopicRequest('restaurant_login', RestaurantLogin);
handleTopicRequest('restaurant_menu', RestaurantMenu);
handleTopicRequest('restaurant_menus', RestaurantMenus);
handleTopicRequest('restaurant_customers', RestaurantCustomers);
handleTopicRequest('restaurant_event', RestaurantEvent);
handleTopicRequest('restaurant_events', RestaurantEvents);
handleTopicRequest('restaurant_event_customers', RestaurantEventCustomers);
handleTopicRequest('restaurant_message', RestaurantMessage);
handleTopicRequest('restaurant_messages', RestaurantMessages);
handleTopicRequest('restaurant_details', RestaurantDetails);
handleTopicRequest('restaurant_info', RestaurantInfo);
handleTopicRequest('restaurant_save_picture', RestaurantSavePicture);
