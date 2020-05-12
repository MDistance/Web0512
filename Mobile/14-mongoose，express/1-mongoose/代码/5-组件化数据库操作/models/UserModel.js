var mongoose = require('mongoose');
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

//导出
module.exports = UserModel;