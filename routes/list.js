var exports = module.exports = {};
var util = require('../util')
exports.routes = [{
    method: 'GET',
        path: '/list/{search?}',
        handler: function (request, reply) {
            var input = request.params.search;                      //รับค่าตัวแปร search มาไว้ในตัวแปร input 
            var output = {data:[]};                                 //ไว้ค่อยรับค่าจาก loop search และกำหนดไไว้ให้เป็น array
        //search
        if(input){                                                  //เช็คค่าว่าได้ใส่ /search มารึป่าว
            var inuser = util.items.users;                          //รับค่าจาก util มาไว้ในตัวแปร inuser

            for(var i=0; i<inuser.length;i++){                      //loop for เช็คตามข้อมูลใน array ใน util.items.ursers
                if(inuser[i].user.indexOf(input)>-1){               //loop if เช็คว่ามีตัวอักษรตรงกันไหมกับที่ search มา
                    console.log("find :",util.items.users[i]);      //ให้ขึ้นหน้า console ว่าเจอตรงกับ users ไหนบ้าง
                    output.data.push(util.items.users[i]);          //ดึงที่ตรงกันไปเก็บไว้ใน outputdata
                    }                        
            }
            return reply(output);                                   //ให้แสดงค่าที่เก็บไว้ใน output
        }  
        //list
        else{                                                       //เมื่อไม่มี /rearch
           return reply(util.items)                                 //ให้แสดงค่าที่อยู่ใน util.item ทั้งหมดเลย
        }                 
        }
}]