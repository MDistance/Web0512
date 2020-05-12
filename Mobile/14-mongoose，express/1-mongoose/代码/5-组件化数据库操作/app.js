var db = require('./db/db');
//导入 模型的文件
var UserModel = require('./models/UserModel');

db(function () {
    // 插入数据
    UserModel.create({
        username: 'wenhui',
        gender: 'girl',
        age: 33,
        intro: 1233211234567,
        isMarried: true,
        hobby: ['品尝', '逛街', '撒狗粮']
    }, function (err, data) {
        if (err) throw err;
        console.log(data);
    });
}, function () {
    console.log('连接失败');

})
