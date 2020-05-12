var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (request, response) {
    //判断路径和请求的方法
    response.setHeader('content-type', 'text/html;charset=utf-8');

    if (require('url').parse(request.url).pathname === '/login' && request.method.toUpperCase() === 'GET') {
        response.write(`
                <form action="/login" method="post">
            <input type="text" name="username">
            <input type="text" name="password">
            <button>点击提交</button>
        </form>`);

        response.end();
    } else if (require('url').parse(request.url).pathname === '/login' && request.method.toUpperCase() === 'POST') {
        var body = '';
        request.on('data', function (chunk) {
            body += chunk;
        });

        request.on('end', function () {
            var data = qs.parse(body);

            var d = `<table border="1">`;
            // <tr><td>password</td><td>456</td></tr>
            for (var i in data) {
                d += '<tr><td>' + i + '</td><td>' + data[i] + '</td></tr>';
            }
            d += `</table>`;

            response.end(d);
        })
    }


});

server.listen(8080);