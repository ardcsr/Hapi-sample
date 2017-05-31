var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
    path: '/login/{user}/{pass}',
    handler: function (request, reply) {
        var usernameinput = request.params.user
        var passwordinput = request.params.pass
        var i = 0
        util.items.users.forEach(function(userInfo){
            if (userInfo.user==usernameinput){
                if(userInfo.passward==passwordinput){
                    reply('Success')
                    i=1
                }
                else{                 
                     reply('password not macth')
                     i=2
                }
                
            }
            
        })
        if (i==0){
            reply('user not found')
        }        

            
    }
}]