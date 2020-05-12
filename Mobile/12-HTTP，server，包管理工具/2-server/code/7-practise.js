/*
   GET   /users
   返回一个表格
   ID    用户名    年龄

   [
    {id:1, username: '付玉', age:19},
    {id:1, username: '樊江', age:20},
    {id:1, username: '王阳', age:23},
    {id:1, username: '肖帅', age:25},
    {id:1, username: '海波', age:27},
    {id:1, username: '小乐', age:30},
   ]
 */

var http = require('http');

var users = [
    {id: 1, username: '付玉', age: 19},
    {id: 1, username: '樊江', age: 20},
    {id: 1, username: '王阳', age: 23},
    {id: 1, username: '肖帅', age: 25},
    {id: 1, username: '海波', age: 27},
    {id: 1, username: '小乐', age: 30},
];

var server = http.createServer(function (request, response) {
    //判断 请求的方法 和 路径
    if (request.method.toUpperCase() === 'GET' && require('url').parse(request.url, true).pathname === '/users') {
        response.setHeader('content-type', 'text/html;charset=utf-8');
        //如何返回表格
        response.write(`
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>表格</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>`);
        response.write(`<div class="container"><table class="table table-bordered table-striped table-hover" border="1">`);
        response.write(`<tr><td>ID</td><td>姓名</td><td>年龄</td></tr>`);

        users.forEach(function (user) {
            response.write(`<tr><td>` + user.id + `</td><td>` + user.username + `</td><td>` + user.age + `</td></tr>`)
        });

        response.write(`</table>`);
        response.write(`</div></body></html>`);

        response.end();
    } else {
        response.end('not found');
    }
});

server.listen(80);
