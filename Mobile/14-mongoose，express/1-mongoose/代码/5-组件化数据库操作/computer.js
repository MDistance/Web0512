//引入文件
var db = require('./db/db');
var ComputerModel = require('./models/ComputerModel');

db(function(){
    ComputerModel.create({brand:'华为',price: 4099, color: '银色'}, function(err, data){
        console.log(data);
        console.log('插入成功');
    });
});