//暴露多个数据
var v1 = true;
var v2 = undefined;
var v3 = [1,2,3,4,5];


module.exports.v1 = v1;
module.exports.v2 = v2;
module.exports.v3 = v3;

module.exports = {
    v1:v1,
    v2:v2,
    v3:v3
}