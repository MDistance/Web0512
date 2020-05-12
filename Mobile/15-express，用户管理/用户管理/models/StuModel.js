var mongoose = require('mongoose');

var StuSchema = new mongoose.Schema({
// * 姓名
// * 年龄
// * 性别
// * 籍贯
// * 手机号
    name: {
        type:String,
        required: true
    },
    age: Number,
    gender: Number,
    jiguan: String,
    phone: String
});

//创建模型
var StuModel = mongoose.model('stu', StuSchema);

//暴露
module.exports = StuModel;