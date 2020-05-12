var express = require('express');
var sha1 = require('sha1');
//创建一个路由器对象
var router = express.Router();
//导入模型
var UserModel = require('../models/UserModel');

//显示注册的表单页面
router.get('/register', function(req, res){
    res.render('user/register');
});

//处理信息
router.post('/register', function(req, res){
    //数据处理
    //检测 两次密码是否一致
    if(req.body.password !== req.body.repassword){
        return res.send(`两次密码不一致 请重新输入<script>setTimeout(function(){history.back();}, 3000)</script>`);
    }
    //检测用户名是否存在
    UserModel.findOne({username: req.body.username}, function(err, data){
        if(data !== null) {
            return res.send('此用户名已经存在..');
        }

        //密码加密  md5  sha1
        req.body.password = sha1(req.body.password);

        //执行插入
        UserModel.create(req.body, function(err, data){
            if(err) return res.send('注册失败, 请重试');

            return res.send('注册成功');
        });
    });

});

//登录
router.get('/login', function(req, res){
    res.render('user/login');
});

router.post('/login', function(req, res){
    // req.body.username  fuyu  123456
    //根据用户名将用户的信息读取出来
    UserModel.findOne({username: req.body.username}, function(err, data){
        if(data === null){
            return res.send('用户名或密码错误!!');
        }
        //判断 加密后的密码 跟数据库中的是否一致
        var password = sha1(req.body.password);
        if(password === data.password){
            //输入无误  写入 session
            req.session.username = data.username;
            req.session.uid = data._id;
            res.send('登录成功');
        }else{
            res.send('用户名或密码错误!!');
        }
    });
});


module.exports = router;

