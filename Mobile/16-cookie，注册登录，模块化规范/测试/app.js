var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.get('/songs', function(req, res){
    //读取文件
    var data = fs.readFileSync('./test.json');
    //将 JSON 字符串转为 JS 的对象
    var d = JSON.parse(data);
    //
    res.render('songs', {songs: d});
});

app.listen(8080, function(){
    console.log('8080 listening.....');
});