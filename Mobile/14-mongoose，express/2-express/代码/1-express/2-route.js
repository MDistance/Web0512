//1.
var express = require('express');
var qs = require('querystring');

//2.
var app = express();

//3. 路由部分
app.get('/home', function(request, response){
    response.end('home');
});

app.get('/login', function(request, response){
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end(`
        <form method="post" action="/login"> 
            <input type="text" name="username">
            <input type="text" name="password">
            <input type="submit" value="提交">
        </form>     
    `);
});

app.post('/login', function(request, response){
    var body = '';
    request.on('data', function(chunk){
        body += chunk;
    });

    request.on('end', function(){
        var data = qs.parse(body);
        console.log(data);

        response.end('test');
    });
});

//4. 启动服务
app.listen(8080, function(){
    console.log('启动服务成功.  8080 listening.....');
});