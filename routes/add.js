var exports = module.exports = {};
exports.routes = [{
    method: 'GET',
        path: '/add',
        handler: function (request, reply) {
            console.log('add');
            reply('add');
        }
}]