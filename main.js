const koa = require('koa')();
const bodyParser = require('koa-bodyparser');
const routes = require('./routes.js');

koa.use(bodyParser());

koa.use(function *() {
    const route = this.url.substr(1);

    if (routes[route]) {
        const method = this.method;

        if (!routes[route].emit(method, this)) {
            this.status = 404;
            this.body = '404 Not Found';
        }
    } else {
        this.status = 404;
        this.body = '404 Not Found';
    }
});

koa.listen(3000);