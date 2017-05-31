var exports = module.exports = {};
exports.routes = [{
    method: 'GET',
        path: '/list',
        handler: function (request, reply) {
            console.log('add');
            reply('add');
        }
}]