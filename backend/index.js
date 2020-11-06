const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./src/db/mongoose');

require('dotenv').config();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.static('uploads'));

connectDB();

const customerLoginHandler = require('./src/routes/customer/entryLogin');
const restaurantLoginHandler = require('./src/routes/restaurant/entryLogin');
const customerMenuHandler = require('./src/routes/customer/menus');
const restaurantMenuHandler = require('./src/routes/restaurant/menu');
const customerEventHandler = require('./src/routes/customer/events');
const restaurantEventHandler = require('./src/routes/restaurant/event');
const customerProfileHandler = require('./src/routes/customer/profile');
const customerHandler = require('./src/routes/customer/customers');
const restaurantProfileHandler = require('./src/routes/restaurant/profile');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/customer', customerLoginHandler);
app.use('/menus', customerMenuHandler);
app.use('/events', customerEventHandler);
app.use('/customerprofile', customerProfileHandler);
app.use('/customers', customerHandler);
app.use('/restaurant', restaurantLoginHandler);
app.use('/menu', restaurantMenuHandler);
app.use('/event', restaurantEventHandler);
app.use('/restaurantprofile', restaurantProfileHandler);

app.listen('3001', () => {
    console.log('Yelp backend running on port 3001');
});
