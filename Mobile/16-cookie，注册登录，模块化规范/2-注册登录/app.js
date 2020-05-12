var express = require('express');
//导入 请求体解析对象
var bodyParser = require('body-parser');
//导入数据库操作函数对象
var db = require('./db/db');
//导入 session操作对象
var session = require("express-session");
// 导入 mongodb 仓库操作对象
var MongoStore = require('connect-mongo')(session);
//导入日志操作
var log = require('./middlewares/log');
//导入 路由
var router = require('./routes/stu');
var userRouter = require('./routes/user');

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
//对 session 初始化 中间件
app.use(session({
  name: 'session_id',   //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: false ,//是否在每次请求时重新保存session
  store: new MongoStore({
    url: 'mongodb://localhost/stu-system',
    touchAfter: 24 * 3600 // 24小时之内只修改一次
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000*3600 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}));


//数据库连接操作
db(function () {
    // 成功的回调
    app.get('/', function (req, res) {
        res.send('首页');
    });

    //路由
    app.use(router);
    app.use(userRouter);

    app.listen(8080, function () {
        console.log('8080 listening.....');
    });

}, function () {
//    失败的回调
    console.log('连接失败!!');
});
