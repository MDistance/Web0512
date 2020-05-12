//1. 导入工具包
var express = require('express');

//2. 创建应用
var app = express();

//3. 静态资源服务创建   localhost/      public 其实网站的根目录     /index.html   =>   ./public/index.html  => 读取文件内容
app.use(express.static('./public'));// 可选的

app.get('/response', function(request, response){
    //设置响应信息   200
    //设置响应状态码
    // response.statusCode = 666;

    //设置响应头信息
    // response.setHeader('name','abc');

    //响应体
    // response.write('this is a body ');

    //设置响应体
    // response.send('ok');// content-type

    //文件下载
    // response.download('./logo2.png');

    // response.sendFile(__dirname + '/package.json');
    // response.sendFile(__dirname + '/1-hello.js');

    //重定向
    // response.redirect('https://www.baidu.com');

    //响应状态码
    response.status(403);

    //设置响应头
    response.set('class','h50919');

    response.send('ok');
});





//4. 启动服务
app.listen(8080, function(){
    console.log('启动服务成功.  8080 listening.....');
});