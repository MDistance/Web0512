var moment = require('moment');
var ip = require('../libs/ip');
var fs = require('fs');

function log(req, res, next){
    //记录日志
    var time = moment().format('YYYY-MM-DD HH:mm:ss');
    var path = req.url;
    var clientIP = ip(req);
    var str = `[${time}]  ${path}  ${clientIP}\r\n`;

    //存入文件
    fs.writeFile('./access.log', str, {flag: 'a'}, function(){});

    next();
}

module.exports = log;

