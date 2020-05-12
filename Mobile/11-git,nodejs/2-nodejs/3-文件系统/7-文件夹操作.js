//引入  fs 模块儿
var fs = require('fs');

//新建文件夹
// fs.mkdir('./css', function(err){
//     if(err){
//         //
//         throw err;// throw 抛 扔  console.log(err); return;
//     }
//
//     console.log('创建成功');
// });// mk make 创建  dir directory 文件夹的意思

//删除文件夹  rm    remove  dir
// fs.rmdir('./project-1', function(err){
//     if(err) throw err;
//
//     console.log('删除成功');
// });


//读取文件夹内容  read 读取  dir 文件夹
// fs.readdir('./file', function(err ,data){
//     if(err) throw err;
//     console.log(data);
// });

//
fs.readdir('../', function(err ,data){
    if(err) throw err;
    console.log(data);
});
