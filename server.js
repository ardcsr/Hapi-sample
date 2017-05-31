'use strict';

// Import hapi module into the project
const Hapi = require('hapi');
const util = require('./util');

const routesDir = './routes';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ port: 8000 });

// Add the route
util.registerRoutes(server, routesDir);

server.on('response', function (request) {
    console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});
// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});