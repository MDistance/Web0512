var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (request, response) {
    //Hello
    response.end('hello it is me !!');
});

server.listen(8080, function(){
    console.log('服务已经启动， 8080监听中...');
});