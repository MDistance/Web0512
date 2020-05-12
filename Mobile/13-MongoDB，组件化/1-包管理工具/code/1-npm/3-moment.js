//引入
var moment = require('moment');

var res = moment().format('MMMM Do YYYY, h:mm:ss a');
var res = moment().format('YYYY-MM-DD HH:mm:ss');// ymd   2020-12-24 10:20:52

console.log(res);