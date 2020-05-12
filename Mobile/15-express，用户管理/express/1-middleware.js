var express = require('express');
var moment = require('moment');
var ip = require('./libs/ip');
var fs = require('fs');
//导入中间件
var log = require('./middlewares/log');
var login = require('./middlewares/login');

//导入控制器
var admin = require('./controllers/admin');
var home = require('./controllers/home');

var app = express();

//声明一个中间件 并使用    全局中间件
// req   res
// 日志记录功能    文件名 access.log
//存入的信息结构   [2019-10-20 12:13:14]  /admin  159.26.36.154
app.use(log);

// app.use(express.static());
// app.use(bodyParser(....))
//  要求请求url必须包含 vip=1  权限验证
app.use(function(req, res, next){
    //记录日志
    var vip = req.query.vip;
    if(vip == 1){
        next();
    }else{
        res.status(403);
        res.send('<h1>403 Forbidden</h1>')
    }
});

/**
 * 针对该路由规则进行一些特殊的检测   admin=1  路由中间件 (局部)
 */
app.get('/admin', login, admin.admin);

app.get('/settings', login, admin.setting);

app.get('/', home.home);

app.get('/activity', home.activity);


app.listen(8080, function(){
    console.log('8080 listening.....');
});


