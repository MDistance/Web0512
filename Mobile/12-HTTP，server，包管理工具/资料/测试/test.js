//1. 引入 fs 模块儿
var fs = require('fs');

fs.mkdirSync(__dirname + '/public');
fs.mkdirSync(__dirname + '/public/css');
fs.mkdirSync(__dirname + '/public/js');
fs.mkdirSync(__dirname + '/public/img');

var str = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>网站首页</title>
</head>
<body>
    <header>头部</header>
    <header>内容</header>
    <header>底部</header>
</body>
</html>`;

//写入文件内容
fs.writeFileSync(__dirname + '/public/index.html', str);