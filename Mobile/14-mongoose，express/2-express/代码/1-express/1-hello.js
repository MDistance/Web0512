//1. 导入工具包
var express = require('express');

//2. 创建应用
var app = express();

//3. 静态资源服务创建   localhost/      public 其实网站的根目录     /index.html   =>   ./public/index.html  => 读取文件内容
app.use(express.static('./public'));// 可选的

//4. 启动服务
app.listen(8080, function(){
    console.log('启动服务成功.  8080 listening.....');
});