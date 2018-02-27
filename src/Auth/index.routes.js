var handlers = require('./index.handlers');
var responseSender = require('../services/responseSender');

const routes = [{
    method: 'POST',
    path: '/auth/register',
    handlers: [
        handlers.register,
        responseSender.responseSender
    ]
}, {
    method: 'GET',
    path: '/auth/authenticate/:signature',
    handlers: [
        handlers.authenticate,
        responseSender.responseSender
    ]
}];

module.exports = routes;