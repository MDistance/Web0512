// http 模块 nodejs 内置的
var http = require('http');

var server = http.createServer(function (request, response) {
    //判断请求的路径是否为 /favicon.ico
    if(request.url === '/favicon.ico'){
        //直接返回  后续代码不执行
        response.end('favicon');
        return;
    }


    //设置响应
    response.end('test');
});

server.listen(8080, function () {
    console.log('running....');
});