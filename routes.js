const fs = require('fs');

const app = {};
const routes = fs.readdirSync('./routes');

if (routes) {
    routes.map(route => {
        app[route.slice(0, -3)] = require(`./routes/${route}`);
    });
}

module.exports = app;