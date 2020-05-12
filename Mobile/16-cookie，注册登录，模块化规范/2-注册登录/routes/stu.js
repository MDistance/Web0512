var express = require('express');
var router = express.Router();
var StuModel = require('../models/StuModel');
//新增学员   GET  /stu/create
router.get('/stu/create', function (req, res) {
    res.render('stu/create');
});

//存入数据库
router.post('/stu', function (req, res) {
    if (req.body.name.length >= 18) {
        return res.send('弄啥来!!');
    }
    StuModel.create(req.body, function (err, data) {
        if (err) {
            res.send('插入异常, 请联系管理员');
        } else {
            // res.redirect('/user');
            // res.send('成功<script>setTimeout(function(){location.href= "/stu"}, 3000)</script>');
            res.render('msg', {status: 'success', url: '/stu', msg: '插入成功'});
        }
    });
});

//查看学员信息
router.get('/stu', function (req, res) {
    // 1  0  10
    // 2  10 10
    // 3  20 10
    var page = req.query.page ? req.query.page : 1;
    var skip = (page - 1) * 5;
    var limit = 10;
    StuModel.find().skip(skip).limit(limit).exec(function (err, data) {
        if (err) {
            res.send('查询错误...');
            return;
        }

        StuModel.countDocuments({}, function (err, total) {
            console.log(total);
            //计算总的页数
            var totalPage = Math.ceil(total / limit);

            res.render('stu/index', {stus: data, totalPage: totalPage, page: page});
        })

    });
});

//删除
router.get('/stu/:id/delete',  function (req, res) {
    var id = req.params.id;
    if (!id) {
        return res.send('缺少参数');
    } else {
        //删除数据库中的数据
        StuModel.deleteOne({_id: id}, function (err) {
            if (err) {
                res.send('删除失败');
            } else {
                res.send('删除成功');
            }
        })
    }
});

//修改
router.get('/stu/:id/edit', function (req, res) {
    //根据 id 查询学员的当前信息
    var id = req.params.id;
    StuModel.findById(id, function (err, data) {
        if (err) {
            res.send('错误');
        } else {
            console.log(data);
            res.render('stu/edit', {stu: data});
        }
    })
});

//更新数据
router.post('/stu/:id/update', function (req, res) {
    //更新数据
    var body = req.body;
    console.log(body);
    StuModel.updateOne({_id: req.params.id}, body, function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send('更新成功');
        }
    });

});

module.exports = router;