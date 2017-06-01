var exports = module.exports = {};
var util = require('../util');
exports.routes = [{
    method: 'GET',
        path: '/add/{user}/{pass}',
        handler: function (request, reply) {
            // Create variables from req.params.
            var username = request.params.user;
            var password = request.params.pass;
	        var users = util.items.users;

            // Check for users in items being empty or not, if empty create new one.
            if(!users) {
                   util.items.users = users = [];
            }

            var dupUser = false;
            users.forEach(function(user){
               if(user.username == username){
                   dupUser = true;
                   reply({
                       statusCode: 403,
                       message: 'Duplicated username'
                   })
               }
            });

            if(!dupUser) {
                var user = {
                    username: username,
                    password: password
                };
                users.push(user);
	            reply({
                    statusCode: 200,
                    message: 'Create user successful'
                });
            }
        }
}]