var exports = module.exports = {};
const Fs = require('fs');
const Async = require('async');
const Path = require('path');

exports.registerRoutes = function(server, routesDir){
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
};

exports.timestamp = function() {
	let time = new Date();
	return time.getFullYear() + '-' + (+time.getMonth() < 9? '0'+(+time.getMonth()+1): (+time.getMonth()+1)) +
		'-' + (+time.getDate() < 10? '0'+(time.getDate()): time.getDate()) +
		' ' + (+time.getHours() < 10? '0'+(time.getHours()): time.getHours()) +
		':' + (+time.getMinutes() < 10? '0'+(time.getMinutes()): time.getMinutes()) +
		':' + (+time.getSeconds() < 10? '0'+(time.getSeconds()): time.getSeconds());
}

exports.items = {users:[]};