var moment = require('moment');
var ip = require('../libs/ip');
var fs = require('fs');

function log(req, res, next) {
    //检测 session中是否包含  is_admin 属性

    next();
}

module.exports = log;

