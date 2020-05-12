//复制文件
// 1. 引入 fs 模块儿
var fs = require('fs');

//2. 创建读取流
var rs = fs.createReadStream('./file/刻意练习.mp3');

//3. 创建写入流
var ws = fs.createWriteStream('./file/刻意练习(2).mp3');


rs.pipe(ws);// pipe 管道

/*
//4. 借助事件
rs.on('data', function(chunk){
    //读取数据之后  将数据写入另一个文件中
    ws.write(chunk);
});

//其他事件  open 读取流打开时会出发该事件
rs.on('open', function(){
    console.log('读取流已经打开');
});

//关闭事件
rs.on('close', function(){
    console.log('读取流已经关闭');
    //关闭写入流
    ws.close();
});

//写入流事件
ws.on('open', function(){
    console.log('写入流已经打开');
});

ws.on('close', function(){
    console.log('写入流已经关闭')
});


 */