var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/add',
        handler: function (request, reply) {
            console.log('add');
            reply('add');
        }
}]