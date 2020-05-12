var moment = require('moment');
var ip = require('../libs/ip');
var fs = require('fs');

function log(req, res, next) {
    //记录日志
    var time = moment().format('YYYY-MM-DD HH:mm:ss');
    var path = req.url;
    var clientIP = ip(req);
    var str = `[${time}]  ${path}  ${clientIP}\r\n`;
    //加入请求体的内容记录  请求体日志记录未完全
    if (req.method.toUpperCase() === 'POST') {
        var body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            body = decodeURI(body);
            str += ` ${body}\r\n`;
            fs.writeFile('./access.log', str, {flag: 'a'}, function () {});
        });
    } else {
        //存入文件
        fs.writeFile('./access.log', str, {flag: 'a'}, function () {});
    }


    next();
}

module.exports = log;

