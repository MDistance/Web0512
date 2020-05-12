// var test = require('./func.js');
// var res = require('./1-dataType.js');
// var res = require('./2-multi.js');
// var res = require('./3-exports.js');


//不带后缀的  文件
// var res = require('./func');
// var our = require('./4-me');// .js  =>  .json
// var res = require('./5-other.abc');

//文件夹
// var res = require('./libs');

//内置模块儿 npm 安装模块
var fs = require('fs');
var _ = require('lodash');
console.log(_.random(1,10));