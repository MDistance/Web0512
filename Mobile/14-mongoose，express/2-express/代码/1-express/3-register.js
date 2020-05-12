//1.
var express = require('express');
var qs = require('querystring');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/h50919', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', function () {
    //创建结构
    var UserSchema = new mongoose.Schema({
        username: String,
        password: String
    });

    var UserModel = mongoose.model('user', UserSchema);


    //2.
    var app = express();

    app.get('/home', function (request, response) {
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end('网站的首页');
    });

    app.get('/login', function (request, response) {
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end(`
            <form method="post" action="/login"> 
                <input type="text" name="username">
                <input type="text" name="password">
                <input type="submit" value="提交">
            </form>     
        `);
    });

    app.post('/login', function (request, response) {
        var body = '';
        request.on('data', function (chunk) {
            body += chunk;
        });

        request.on('end', function () {
            var data = qs.parse(body);
            console.log(data);
            UserModel.create(data, function (err, data) {
                if(err) throw err;
                response.setHeader('content-type', 'text/html;charset=utf-8');
                response.end('注册成功');
            })
        });
    });

    //4. 启动服务
    app.listen(8080, function () {
        console.log('启动服务成功.  8080 listening.....');
    });

});