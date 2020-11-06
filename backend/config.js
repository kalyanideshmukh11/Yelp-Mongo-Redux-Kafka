const USER = 'root';
const PASSWORD = 'root';
const LOCAL_URI = 'http://localhost:3000';
const URI= 'mongodb+srv://'+USER+':'+PASSWORD+'@yelp1.l68fe.mongodb.net/yelp?retryWrites=true&w=majority'
const DATABASE = 'yelp1';
const JWTPASSWORD = 'yelp1';

module.exports = {
    URI: URI,
    LOCAL_URI: URI,
    DATABASE: DATABASE,
    JWTPASSWORD: JWTPASSWORD
}
