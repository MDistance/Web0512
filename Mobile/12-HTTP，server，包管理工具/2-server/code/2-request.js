// http 模块 nodejs 内置的
var http = require('http');
var urlTool = require('url');//内置的模块
var qs = require('querystring');

var server = http.createServer(function(request, response){
    //判断请求的路径是否为 /favicon.ico
    if(request.url === '/favicon.ico'){
        //直接返回  后续代码不执行
        response.end('favicon');
        return;
    }

    //获取请求的参数
    var method = request.method;
    // console.log(method);

    //获取
    var url = request.url; //     /login?vip=1&v=521
    // console.log(url);
    //获取路径部分
    // var url = urlTool.parse(url);// parse解析的意思
    // console.log(require('url').parse(url, true).query.v);


    //http 协议的版本
    var version = request.httpVersion;
    // console.log(version);

    //请求头信息获取
    var headers = request.headers;
    // var cache = headers['cache-control'];

    //请求体的数据获取   username=abcdefg&password=hijklmn
    var body = '';
    request.on('data', function(chunk){
        body += chunk;
    });

    request.on('end', function(){
        // console.log(body);
        var data = qs.parse(body);
        console.log(data.username);
        console.log(data.password);
    });

    //设置响应
    response.end('test');
});

server.listen(8080, function(){
    console.log('running....');
});