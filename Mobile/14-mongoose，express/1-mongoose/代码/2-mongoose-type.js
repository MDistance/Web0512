//1. 引入 mongoose
var mongoose = require('mongoose');

//2. 连接 mongodb 服务器
mongoose.connect('mongodb://127.0.0.1/abc', {useNewUrlParser: true, useUnifiedTopology: true});

//3. 绑定回调
mongoose.connection.on('open', function(){
    //4. 创建文档结构
    var UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            default: 'male'
        },
        intro: mongoose.Schema.Types.Mixed,
        age: Number,
        isMarried: Boolean,
        hobby: Array
    });

    //5. 模型创建
    var UserModel = mongoose.model('user', UserSchema);

    //6. 插入数据
    UserModel.create({
        username: 'wenhui',
        gender: 'girl',
        age: 33,
        intro: 1233211234567,
        isMarried: true,
        hobby: ['王者荣耀坑','吃鸡坑','唱歌跳舞坑']
    }, function(err, data){
        if(err) throw err;
        console.log(data);
    });
});