//1. 引入 http 工具
var http = require('http');

//2. 创建 web 服务  createServer 是一个方法
//* request     是对请求报文的封装对象
//* response    是对响应报文的功能封装
var server = http.createServer(function(request, response){
    //设置
    response.end('hello world!!');
});

//3. 启动服务监听端口  测试阶段尽量选择 》 1024 的端口  上线的话使用 80 端口
server.listen(80, function(){
    console.log('服务已经启动， 8080端口监听中......');
});