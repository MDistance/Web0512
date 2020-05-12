//1. 导入 mongoose 工具包
var mongoose = require('mongoose');

//2. 连接 mongodb 服务器  http://
mongoose.connect('mongodb://127.0.0.1/h50919', {useNewUrlParser: true, useUnifiedTopology: true});

//3. 事件监听   当跟数据库连接成功时 ,会执行这个回调
mongoose.connection.on('open', function(){
    //4. 声明文档的结构
    var Schema = new mongoose.Schema({
        song: String,  // 歌曲的名字
        singer: String, // 歌手的名字
        age: Number  // 歌手的年龄
    });

    //5. 创建模型对象
    var SongModel = mongoose.model('songs', Schema);

    //6. 使用对象进行文档操作  create 创建
    SongModel.create({
        song: '桥边姑娘',
        singer: '海伦',
        age: 33
    }, function(err, data){
        if(err) throw err;
        console.log(data);

        //断开连接 (一般不加)
        mongoose.connection.close();
    });


});