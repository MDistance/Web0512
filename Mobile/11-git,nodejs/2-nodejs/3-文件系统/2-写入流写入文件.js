//1. 引入 fs 模块儿
var fs = require('fs');

//2. 创建写入流
var ws = fs.createWriteStream('./file/2.css', {
    flags: 'a',
    encoding: 'utf8',
    mode: 0o666
});

//3. 写入内容
ws.write('   赤壁\r\n');
ws.write('     刘禹锡\r\n');
ws.write('折戟沉沙铁未销\r\n');
ws.write('自将磨洗认前朝\r\n');
ws.write('东风不与周郎便\r\n');
ws.write('铜雀春深锁二乔\r\n');

//4. 关闭
ws.close();
