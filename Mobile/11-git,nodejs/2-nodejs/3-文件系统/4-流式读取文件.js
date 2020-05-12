// 主要是针对 大文件 （图片，音频，视频）
//1. 引入 fs 模块
var fs = require('fs');

//2. 创建读取流对象
var rs = fs.createReadStream('./file/刻意练习.mp3');// create 创建  read 读  stream 流

//3. 绑定事件  jquery  on    chunk  块儿
rs.on('data', function(chunk){
    // console.log(chunk.length);// 65536 字节 （Byte）  =>  64K

    console.log(chunk)
});

