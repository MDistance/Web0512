/**
 * curd
 * @type {Mongoose}
 */
//1. 引入 mongoose
var mongoose = require('mongoose');

//2. 连接 mongodb 服务器
mongoose.connect('mongodb://127.0.0.1/h50919', {useNewUrlParser: true, useUnifiedTopology: true});

//3. 绑定回调
mongoose.connection.on('open', function(){
    var starSchema = new mongoose.Schema({
        name: String,
        gender: String,
        age: Number,
        zuopin: Array,
        is_deleted: false
    });

    var StarModel = mongoose.model('star', starSchema);

    //数据操作
    // 1. 插入  insert 插入  many 许多许多 create
    // StarModel.insertMany([
    //     {name: '赵丽颖', gender: 'female', age: 32, zuopin: ['花千骨','新还珠格格']},
    //     {name: '蔡徐坤', gender: 'male', age: 20, zuopin: ['打篮球','唱跳 RAP']},
    //     {name: '吴亦凡', gender: 'male', age: 24, zuopin: ['大碗面','唱跳 RAP']},
    // ], function(err, data){
    //     if(err) throw err;
    //     console.log(data);
    // });

    //2. 删除信息 deleteOne
    // StarModel.deleteOne({_id: '5e02ca42a6d3372f184c8a95'}, function(err){
    //     if(err) throw err;
    //     console.log('删除成功！');
    // });

    // StarModel.deleteMany({name: '蔡徐坤'}, function(err){
    //     if(err) throw err;
    //     console.log('批量删除成功');
    // });

    //3. 修改  KRIS
    // StarModel.updateOne({_id: '5e02ca42a6d3372f184c8a97'}, {name: 'KRIS'}, function(err){
    //     console.log('更新成功');
    // });

    StarModel.updateMany({name: '赵丽颖'}, {name:'liyin zhao'}, function(){
        console.log('批量更新成功');
    });

});