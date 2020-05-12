//引入 包
var _ = require('lodash');

var res = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

var res = _.add(2,3);

var res = _.random(1,10);

console.log(res);