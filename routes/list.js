var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/list',
        handler: function (request, reply) {
            console.log('list');
            reply(util.items);
        }
}]