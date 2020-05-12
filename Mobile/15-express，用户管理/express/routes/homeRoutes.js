var express = require('express');
//创建路由器对象
var router = express.Router();

router.get('/', function(req, res){
    res.send('首页')
});

router.get('/hello', function(req, res){
    res.send('hello world!!!');
});

module.exports = router;