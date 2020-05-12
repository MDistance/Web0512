var express = require('express');
var home = require('./routes/homeRoutes');
var admin = require('./routes/adminRoutes');

var app = express();

//使用中间件
app.use(home);
app.use(admin);

app.listen(8080, function(){
    console.log('8080 listening.....');
});