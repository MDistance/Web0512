//1. 引入 mongoose
var mongoose = require('mongoose');
var config = require('../config/config')

//2. 连接 mongodb 服务器
mongoose.connect(`mongodb://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}/${config.DB_NAME}?authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true});

/**
 *
 * @param success  连接成功时的回调
 * @param error    连接失败时的回调
 */
function db(success, error){
    //3. 绑定回调
    mongoose.connection.on('open', function(){
        success();
    });

    mongoose.connection.on('error', function(){
        error();
    })
}

module.exports = db;