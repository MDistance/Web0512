/**


 image.baidu.com/channel/listjson?pn=0&rn=30&tag1=美女&tag2=全部

 http://tingapi.ting.baidu.com/v1/restserver/ting&method=baidu.ting.billboard.billList&type=1&size=10&offset=0
 */
var request = require('request');
var mongoose = require('mongoose');
//
// //连接服务器
mongoose.connect('mongodb://127.0.0.1/data', {useNewUrlParser: true, useUnifiedTopology: true});
//
// //监听连接事件
mongoose.connection.on('open', function (err, data) {
    if (err) throw err;

    //1. 创建结构
    var SongSchema = new mongoose.Schema({
        language: String,
        image: String,
        duration: Number,
        hot: Number,
        title: String,
        author: String,
    });

    //2. 创建模型
    var SongModel = mongoose.model('songs', SongSchema);

    //3. 增加数据 百度音乐
    request('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=100&offset=0', (err, response, body) => {
        if (err) throw err;

        var body = JSON.parse(body);
        var songs = body.song_list;

        var data = [];
        for (var i = 0; i < songs.length; i++) {
            var d = {};
            d.language = songs[i].language;
            d.image = songs[i].pic_big;
            d.hot = songs[i].hot;
            d.title = songs[i].title;
            d.author = songs[i].author;
            d.duration = songs[i].file_duration;

            data.push(d);
        }

        SongModel.insertMany(data, function(err, data){
            if(err) throw err;
            console.log('数据插入成功');
            mongoose.connection.close();
        })
    });


});

