var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db');

var log = require('./middlewares/log');
var router = require('./routes/stu');

var app = express();
//设置模板引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//静态资源请求处理
app.use(express.static(__dirname + '/public'));
//日志记录
app.use(log);
//使用 body-parser 中间件
app.use(bodyParser.urlencoded({extended: false}));

//数据库连接操作
db(function () {
    // 成功的回调
    app.get('/', function (req, res) {
        res.send('首页');
    });

    //路由
    app.use(router);

    app.listen(8080, function () {
        console.log('8080 listening.....');
    });

}, function () {
//    失败的回调
    console.log('连接失败!!');
});
