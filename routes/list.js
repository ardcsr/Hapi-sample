var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/list/{search?}',
        handler: function (request, reply) {
            var input = request.params.search;                      //รับค่าตัวแปร search มาไว้ในตัวแปร input
            var users = util.items.users;
            if(users){
	            if(input){                                                  //เช็คค่าว่าได้ใส่ /search มารึป่าว
                    var output = [];
                    users.forEach(function(user){
	                    if(user.username.indexOf(input)>-1){               //loop if เช็คว่ามีตัวอักษรตรงกันไหมกับที่ search มา
		                    output.push(user);          //ดึงที่ตรงกันไปเก็บไว้ใน outputdata
	                    }
                    });

                    reply({
                        statusCode: 200,
                        message: 'Success',
                        data: output
                    })
	            } else {
		            reply({
			            statusCode: 200,
			            message: 'Success',
			            data: users
		            })
                }
            } else {
                reply({
                    statusCode: 200,
                    message: 'Success',
                    data: []
                })
            }
        }
}];