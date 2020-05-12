//1. 导入工具包
var express = require('express');
var bodyParser = require('body-parser');

//2. 创建应用
var app = express();

//设置 body-parser 的使用
app.use(bodyParser.urlencoded({ extended: false }));

//定义路由  通过 url 能识别出网站是用什么语言开发的么
app.get('/qq.exe', function (request, response) {
    response.end('are you kidding me???');
});

app.get('/request', function (request, response) {
    //获取请求的方法
    var method = request.method;
    //请求的路径
    var url = request.url;
    //版本协议
    var version = request.httpVersion;
    //请求头信息
    var headers = request.headers;
    // console.log(method, url, version);
    // console.log(headers);

    //获取查询字符串的参数
    // console.log(request.query.vip);
    //params 参数

    //获取请求头信息
    var host = request.get('Host');
    var userAgent = request.get('User-Agent');
    console.log(userAgent);

    response.end('test');
});

app.get('/:id.html', function (request, response) {
    console.log(request.params.id);
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('商品详情');
});

app.get('/login', function (request, response) {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end(`
            <form method="post" action="/login"> 
                <input type="text" name="username">
                <input type="text" name="password">
                <input type="submit" value="提交">
            </form>     
        `);
});

app.post('/login', function (request, response) {
    //得到浏览器发送的请求体的参数  username  password   body 身体
    console.log(request.body);
    response.end('test');
});

//4. 启动服务
app.listen(8080, function () {
    console.log('启动服务成功.  8080 listening.....');
});

