var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
app.use(cookieParser());

//设置 cookie
app.get('/set-cookie', function(req, res){
    //响应对象  render 属于 res
    // res.cookie('class','h50919', {maxAge: 3600000});// 单位是毫秒
    res.cookie('name','xiaohigh', {maxAge: 3600000});// 单位是毫秒

    res.send('cookie设置成功');
});

//h获取 cookie
app.get('/get-cookie', function(req, res){
    //cookie数据获取
    console.log(req.cookies.class);

    res.send('获取 cookie 成功');
});

app.get('/update-cookie', function(req, res){
    //cookie数据获取
    res.cookie('id', 25);

    res.send('更新 cookie 成功');
});

app.get('/clear-cookie', function(req, res){
    //cookie数据获取
    res.clearCookie('id');

    res.send('更新 cookie 成功');
});

/**
 * 是否登录以 cookie 作为检测 id 和 email
 */
//登录  username=admin  和  password=admin
app.get('/login', function(req, res){
    if(req.query.username === 'admin' && req.query.password==='admin'){
        //设置 cookie
        res.cookie('id', 20, {maxAge: 3600000});
        res.cookie('email', '123@qq.com', {maxAge: 3600000});
        res.send('登录成功');
    }else{
        res.send('登录失败!!');
    }
});
//后台
app.get('/admin', function(req, res, next){
    if(req.cookies.id && req.cookies.email){
        next();
    }else{
        res.send('没有登录,请先登录');
    }
},function(req, res){
    res.send('网站后台页面');
});

app.listen(8080, function(){
    console.log('8080 listening.....');
});