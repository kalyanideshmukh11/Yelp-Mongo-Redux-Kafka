const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
//app.use(cors({ origin: 'http://54.151.2.194:3000', credentials: true }));
app.use(express.static('uploads'));

const loginHandler = require('./src/routes/customer/customerLogin');
const eventHandler = require('./src/routes/event/eventadmin');
const customerHandler = require('./src/routes/customer/customerLogin');
const customerProfileHandler = require('./src/routes/customer/customerProfile');
const customerPhotoHandler = require('./src/routes/customer/customerPhoto');
const restaurantHandler= require('./src/routes/restaurant/restaurantLogin');
const restaurantProfile= require('./src/routes/restaurant/restaurantProfile');
const restaurantImages= require('./src/routes/restaurant/restaurantPhoto');
const orderHandler= require('./src/routes/orders/search');
const reviewHandler= require('./src/routes/review/review');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginHandler);
app.use('/restaurant',restaurantHandler);
app.use('/restaurantprofile',restaurantProfile);
app.use('/customer', customerHandler);
app.use('/customerprofile', customerProfileHandler);
app.use('/customerphoto', customerPhotoHandler);
app.use('/events', eventHandler);
app.use('/orders',orderHandler);
app.use('/review',reviewHandler)
app.use('/images',restaurantImages);
app.listen('3001', () => {
    console.log('Yelp backend running on port 3001');
});
