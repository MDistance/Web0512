/**
 读取
 */
//1. 引入 mongoose
var mongoose = require('mongoose');

//2. 连接 mongodb 服务器
mongoose.connect('mongodb://127.0.0.1/data', {useNewUrlParser: true, useUnifiedTopology: true});

//3. 绑定回调
mongoose.connection.on('open', function () {
    var SongSchema = new mongoose.Schema({
        language: String,
        image: String,
        duration: Number,
        hot: Number,
        title: String,
        author: String,
    });

    var SongModel = mongoose.model('songs', SongSchema);
    //读取数据
    // 读取一条数据
    // SongModel.findOne({_id: '5e01cd7cdb74814cc8f813dc'}, function(err, data){
    //     console.log(data);
    // });

    //根据 id 读取数据
    // SongModel.findById('5e01cd7cdb74814cc8f813d2', function(err, data){
    //     console.log(data);
    // });

    //批量查询
    // SongModel.find(function(err, data){
    //     console.log(data);
    // });

    // SongModel.find({'author':'戴荃'}, function(err, data){
    //     console.log(data.length);
    // });

    // select 选择     exec 执行
    // SongModel.find().select({_id:0, title: 1, image:1}).exec(function(err, data){
    //     console.log(data);
    // });

    // 排序
    // SongModel.find().select({_id:1, hot: 1}).sort({hot: -1}).exec(function(err, data){
    //     console.log(data);
    // });

    //前 20 条歌曲信息  skip 跳过   limit 取数据个数
    SongModel.find().select({_id:1}).skip(20).limit(20).exec(function(err, data){
        console.log(data);
    });

});