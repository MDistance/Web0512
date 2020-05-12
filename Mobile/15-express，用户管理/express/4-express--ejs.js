var express = require('express');

var app = express();

//设置express使用的模板引擎
app.set('view engine', 'ejs');
//设置模板的存放位置
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    //显示 HTML 的首页
    res.render('home');
});

app.get('/admin', function (req, res) {
    res.render('admin', {
        username: 'admin',
        age: 20,
        stars: ['孙俪', '马伊琍', '迪丽热巴', '古力娜扎'],
        link: '<a href="http://xiaohigh.taobao.com">主页</a>'
    });
});

app.listen(8080, function () {
    console.log('8080 listening.....');
});