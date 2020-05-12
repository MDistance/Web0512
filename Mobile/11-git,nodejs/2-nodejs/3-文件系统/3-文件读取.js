//1. 引入 fs 模块儿
var fs = require('fs');

//2. 读取
/**
 * 异步
 * err 错误对象
 * data 读取到的内容
 */
// fs.readFile('./12.21/祝福.md', function(err, data){
//     if(err){
//         console.log(err);
//         return;
//     }
//
//     //输出 data 的内容
//     // console.log(data.toString());
//     var res = data.toString().split('\r\n');
//     console.log(res);
// });

//3. 同步读取
var res = fs.readFileSync(__dirname + '/file/祝福.html');
console.log(res.toString());

