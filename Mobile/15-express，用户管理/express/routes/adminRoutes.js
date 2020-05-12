var express = require('express');
//创建路由器对象
var router = express.Router();

router.get('/admin', function(req, res){
    res.send('后台')
});

router.get('/cart', function(req, res){
    res.send('购物车')
});

router.get('/orders', function(req, res){
    res.send('用户订单页')
});

module.exports = router;