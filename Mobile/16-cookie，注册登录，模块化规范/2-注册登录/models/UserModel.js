var mongoose = require('mongoose');

var UserScheme = new mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    password: String,
    is_admin:{
        type: Number,
        default: 0
    }
});

var UserModel = mongoose.model('user', UserScheme);

module.exports = UserModel;