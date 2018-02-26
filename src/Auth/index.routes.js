var handlers = require('./index.handlers');
var responseSender = require('../services/responseSender');

const routes = [{
    method: 'POST',
    path: '/auth/register',
    handlers: [
        handlers.register,
        responseSender.responseSender
    ]
}];

module.exports = routes;