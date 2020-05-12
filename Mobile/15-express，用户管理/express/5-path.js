var express = require('express');

var app = express();



// /cart
//设置express使用的模板引擎
app.set('view engine', 'ejs');
//设置模板的存放位置
app.set('views', __dirname + '/views');

app.get('/cart/index', function (req, res) {
    //显示 HTML 的首页
    res.render('cart');
});

//__dirname 获取到的是 一个字符串
fs.readFile('/index.html')

app.get('/index.html', function (req, res) {
    //显示 HTML 的首页
    res.render('cart');    //    w文件系统的路径  /   URL 引入资源的路径
});

//静态资源的配置    /css/app.css /js/app.js
app.use(express.static('./public'));

app.listen(8080, function () {
    console.log('8080 listening.....');
});