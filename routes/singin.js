var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
    path: '/login/{user}/{pass}',
    handler: function (request, reply) {
	    var username = request.params.user;
	    var password = request.params.pass;

	    var users = util.items.users;
	    var userFound = false;
	    if (users) {
		    users.forEach(function (user) {
			    if (user.username == username) {
				    userFound = true;
				    if (user.password == password) {
					    reply({
						    statusCode: 200,
						    message: 'Signin Successful'
					    })
				    } else {
					    reply({
						    statusCode: 400,
						    message: 'Username or Password is invalid'
					    })
				    }
			    }
		    });

		    if (!userFound) {
			    reply({
				    statusCode: 404,
				    message: 'User not found'
			    })
		    }
	    } else {
		    reply({
			    statusCode: 404,
			    message: 'User not found'
		    })
	    }
    }
}];