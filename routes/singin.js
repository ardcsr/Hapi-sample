var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
    path: '/login/{user}/{pass?}',
    handler: function (request, reply) {
<<<<<<< HEAD
        var usernameinput = encodeURIComponent(request.params.user)
        var passwordinput = encodeURIComponent(request.params.pass)
    util.items.users.forEach(function(user){
       
    })
=======
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

>>>>>>> 78ad0f85a4615924e92b9fc390e05398db3c9c08

            
        }
        if(usernameinput==''){
            reply('plase login')
        }
        }
}]