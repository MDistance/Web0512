var fs = require('fs');

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
</html> `;

//public 目录
fs.mkdir(__dirname + '/public', function (err) {
    if (err) throw err;
    //
    fs.mkdir(__dirname + '/public/css', function (err) {
        if (err) throw err;
        fs.mkdir(__dirname + '/public/js', function (err) {
            if (err) throw err;
            fs.mkdir(__dirname + '/public/imgs', function (err) {
                if (err) throw err;
                //写入文件index.html内容
                fs.writeFile(__dirname + '/public/index.html', str, function(err){
                    if(err) throw err;
                    console.log('结构构件成功');
                })
            });
        });
    });
});