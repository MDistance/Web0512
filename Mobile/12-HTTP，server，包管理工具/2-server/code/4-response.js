//1. 引入 http 包
var http = require('http');

//2. 创建服务
var server = http.createServer(function (request, response) {
    //设置响应行
    // response.statusCode = 404; // status 状态  code 编号
    // response.statusCode = 500; // status 状态  code 编号

    //设置响应头
    // response.setHeader('name','xiaohigh');
    response.setHeader('content-type', 'text/html;charset=utf-8');

    //设置响应体
    // response.write('在灾难面前，如果连英雄都逃跑了，那还有谁能站出来？');
    response.write(` <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
</head>
<body>
    <header>头部</header>
</body>
</html>
    `);

    //设置响应
    response.end();
});

//3. 启动服务监听端口
server.listen(8080, function () {
    console.log('8080 listening.....');
});
