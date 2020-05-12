/**
 GET   /index.html           将 public/index.html 文件中的内容返回给客户端

 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    //判断请求的路径是否为 /favicon.ico
    if (request.url === '/favicon.ico') {
        //直接返回  后续代码不执行
        response.end('favicon');
        return;
    }
    //获取请求行的路径部分
    var url = request.url;
    var path = require('url').parse(url).pathname;

    /**
     *  GET  /index.html       ./public/index.html
     *  GET  /css/app.css      ./public/css/app.css
     *  GET  /js/app.js        ./public/js/app.js
     *  GET  path              './public'+path
     */

    if (path === '/index.html') {
        //返回的是 public 目录下的 index.html
        var data = fs.readFileSync(__dirname + '/public/index.html');
        //响应
        response.end(data);
    } else if (path === '/css/app.css') {
        //返回的是 public 目录下的 css/app.css
        var data = fs.readFileSync(__dirname + '/public/css/app.css');
        //响应
        response.end(data);
    } else if (path === '/js/app.js') {
        //返回的是 public 目录下的 index.html
        var data = fs.readFileSync(__dirname + '/public/js/app.js');
        //响应
        response.end(data);
    } else if (path === '/images/logo.png') {
        //返回的是 public 目录下的 index.html
        var data = fs.readFileSync(__dirname + '/public/images/logo.png');
        //响应
        response.end(data);
    } else {
        response.end('<h1>404 Not Found</h1>');
    }


});

server.listen(8080, function () {
    console.log('running....');
})