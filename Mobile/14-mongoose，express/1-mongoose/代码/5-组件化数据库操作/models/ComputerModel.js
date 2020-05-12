var mongoose = require('mongoose');

var ComputerSchema = new mongoose.Schema({
    brand: String,
    price: Number,
    color: String
});

var ComputerModel = mongoose.model('computer', ComputerSchema);

//模型导入
module.exports = ComputerModel;