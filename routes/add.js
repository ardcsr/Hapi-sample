var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/add/{user}/{password?}', 
        handler: function (request, reply) {
            var  ad = {
                        username : "",
                        password : ""
                       };
            function adduse (){
                    var item = request.params.user
                    ad.username=item
                    util.items.users.push(ad)
                    console.log(util.items.users)
            }
            if(util.items.users==0){
                adduse()
                reply('Add Succes')
            }
           if(util.items.users==adduse()){
               reply('ชื่อซ้ำกัน')
           } 


            console.log('add');
            reply('add');
        }
}]