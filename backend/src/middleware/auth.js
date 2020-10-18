const jwt = require('jsonwebtoken');
const constants = require('../db/constants');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        console.log(token)
        return res.status(402).json({ msg: 'No token, authorization denied' });
    }
    try {
        console.log("Token:",token)
        console.log("JWT_KEY:", constants.JWT_KEY)
        const decoded = jwt.verify(token, constants.JWT_KEY, {
            algorithms: ['HS256']
        });
        console.log("Decoded:",decoded)
        req.user = decoded.user;
        next();

    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};