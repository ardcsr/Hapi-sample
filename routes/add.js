var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/add/{user}/{pass?}', 
        handler: function (request, reply) {
            var  ad = {
                        username : "",
                        password : ""
                       };
            function addUse (){
                    var item = request.params.user
                    ad.username=item
                    util.items.users.push(ad)
                    console.log(util.items.users)
            }
            function addPass (){
                    var Pass = request.params.pass
                    ad.password = Pass
                    util.items.users.push(ad)
                    console.log(util.items.users)
            }

            if(util.items.users==0){
                addUse()
                addPass()
                return reply('Add Succes')
            } else
           if(util.items.users==addUse()){
               return reply('ชื่อซ้ำกัน')
           }
           else if (util.items.users==addPass()){
               return reply('รหัสผ่านซ้ำกัน')
           } else


            console.log('add');
            return reply('add');
        }
}]