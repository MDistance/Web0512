/**
 GET   /index.html           将 public/index.html 文件中的内容返回给客户端

 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    //获取请求行的路径部分
    var url = request.url;
    var path = require('url').parse(url).pathname;


    /**
     *  GET   /                ./public/index.html
     *  GET  /index.html       ./public/index.html
     *  GET  /css/app.css      ./public/css/app.css
     *  GET  /js/app.js        ./public/js/app.js
     *  GET  path              './public'+path
     */
        //目标文件的路径
    if(path === '/'){
        path = '/index.html';
    }
    //解析中文字符
    path = decodeURI(path);
    var filePath = __dirname + '/public' + path;  //  ./public 称之为网站的根目录   ./public/
    console.log(filePath);
    //判断文件是否存在
    if (fs.existsSync(filePath)) {
        //读取文件内容
        // var data = fs.readFileSync(filePath);
        // 返回文件内容

        fs.readFile(filePath, function(err, data){
            // response.setHeader('Content-Type','audio/mpeg');
            // response.setHeader('Content-length', 25682938);
            // response.setHeader('Accept-Ranges','bytes');
            if(err){
                response.end('forbidden');
                return;
            }
            response.end(data);
        });
    } else {
        //返回 404
        response.statusCode = 404;
        //
        response.write('<h1>404 Not Found</h1>');
        response.end();
    }
});

server.listen(80, function () {
    console.log('running....');
})