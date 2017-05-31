var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
    path: '/login/{user}/{pass}',
    handler: function (request, reply) {
        var usernameinput = encodeURIComponent(request.params.user)
        var passwordinput = encodeURIComponent(request.params.pass)
    util.items.users.forEach(function(user){
        if (user.){
            
        }
    })

            
    }
}]