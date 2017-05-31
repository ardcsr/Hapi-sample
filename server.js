'use strict';

// Import hapi module into the project
const Hapi = require('hapi');
const Fs = require('fs');
const Async = require('async');
const Path = require('path');

const routesDir = './routes';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ port: 8000 });

// Add the route
Fs.readdir(routesDir, function (err, list) {

        if (err) {
            console.log(err);
        }
        Async.each(list, function (file, callback) {

            // Skip files with unknown filename extension
            if (!file.match(/\.(js)$/)) {
                return callback();
            }
            // Change routes path to './'
            var tmpdir = routesDir.split('/');
            tmpdir[0] = '.';
            var routesdir = tmpdir.join('/');

            const modulePath = routesdir+ "/" +file;
            const routeFile = require(modulePath);

            // Register routes from path './routes'
            if(typeof routeFile.routes != 'undefined') {
                server.route(routeFile.routes);
            }
        });
    });

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});