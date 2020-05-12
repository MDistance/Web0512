//1. 引入 fs 模块儿
var fs = require('fs');// require 需要 要有

//2. 写入文件 （异步方式）
// fs.writeFile('./file/1.html', 'xiaoshuai  放心, 今天下午铁定不掉线\r\n', {
//     encoding: 'utf8', // 字符集
//     mode: 0o666, //0o 8进制    0x 16进制  权限
//     flag: 'a' //w  write 写入    a   append 尾部添加(追加)   r  read 只读
// }, function(err){
//     if(err){
//         console.log(err);
//     }
//
//     console.log('写入成功');
// });// write 写入  file 文件

//同步写入
fs.writeFileSync('./file/1-2', '同步写入');// Sync 同步的意思
