const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const JwtStrategy = passportJWT.Strategy;
const config = require('../../config');
const Customer = require('../models/customer');
const Restaurant = require('../models/restaurant');


function auth() {
  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.JWTPASSWORD,
  };

  passport.use(
    new JwtStrategy(opts, (jwt_payload, callback) => {
    const { email, user } = jwt_payload.user;
    console.log("INSIDE AUTH")
      if (user === 'customer') {
        Customer.findOne({email}, (err, results) => {
          if (err) {
            return callback(err, false);
          }
          if (results) {
            callback(null, results);
          } else {
            callback(null, false);
          }
        });
      } else if (user === 'restaurant') {
        console.log("CHECKING REST")
        Restaurant.findOne({email}, (err, results) => {
          if (err) {
            return callback(err, false);
          }
          if (results) {
            callback(null, results);
          } else {
            callback(null, false);
          }
        });
      }
    }),
  );
}

exports.auth = auth;
exports.checkAuth = passport.authenticate('jwt', { session: false });