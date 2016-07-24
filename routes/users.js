const events = require('events');

const Route = function () {};

Route.prototype.__proto__ = events.EventEmitter.prototype;

const route = new Route;

route.on('GET', (req) => {
    req.body = {success: true, msg: 'GET OK'};
});

route.on('POST', (req) => {
    const body = req.request.body;

    req.body = body;
});

module.exports = route;