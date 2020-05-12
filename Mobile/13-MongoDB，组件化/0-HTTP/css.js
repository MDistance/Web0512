/**
     GET  /   返回 2-css.html 中的内容
     GET  /css/app   返回一个 css 的样式
 */
var http = require('http');
var qs = require('querystring');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    if(request.url === '/' && request.method.toUpperCase() == 'GET'){
        //读取 2-css.html 中的文件内容
        var data = fs.readFileSync('./2-css.html');
        response.end(data);
    }else if(request.url == '/css/app'){ // CSS 请求路径
        //设置 css 响应体的内容
        response.write(`body{background:pink}`);
        response.end();
    }else if(request.url == '/abc'){ // JS 请求路径
        //设置 css 响应体的内容
        response.write(`alert('我加载了啊!!!')`);
        response.end();
    }else {
        response.end('404');
    }
});

server.listen(8080);