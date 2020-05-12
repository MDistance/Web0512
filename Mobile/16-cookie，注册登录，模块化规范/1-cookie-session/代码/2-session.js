var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// iloveyouh50919   =>
app.use(session({
    secret: 'h50919',//
    resave: false,//re 重   save 保存  重新保存session
    saveUninitialized: false,// save 保存   uninitialized未初始化
    cookie: {
        maxAge: 1000 * 3600,
        httpOnly: true
    },
    store: new MongoStore({
        url: 'mongodb://localhost:27017/session',
        touchAfter: 24 * 3600 // 24小时之内只修改一次
    }),
}));

app.get('/home', function (req, res) {
    // res.send('首页');
    res.render('cookie');
});

// 设置session
app.get('/set-session', function (req, res) {
    req.session.name = 'xiaohigh';
    req.session.email = '123@qq.com';
    res.send('设置session');
});

// 读取 session
app.get('/get-session', function (req, res) {
    console.log(req.session.name);
    console.log(req.session.email);

    res.send('获取 session');
});

app.listen(8080, function () {
    console.log('8080 listening.....');
});