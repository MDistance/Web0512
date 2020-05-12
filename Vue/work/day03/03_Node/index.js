// node的包查找机制!!!
// node中是如何去寻找第三方包的？
//     1. 循环module.paths数组 查阅数组中每一项元素所对应的路径中 '
//          是不是包含指定的包 如果有则命中这个包 如果没有进入下一次循环 直到循环完整个数组
//     2. 找到第一步命中的包 去查阅它的包的描述文件package.json
//             找package.json中一个字段 main字段
//     3. 如果不存在main字段 或者main字段 指向的不是一个存在的js文件
//                 那么node会把当前包底下的index.js文件作为模块
//     4. 如果以上机制都没有启作用; 那么node会选择报错!!!   报模块找不到!!!



var colors = require('colors');

console.log(colors);
/*
    [ 'C:\\Users\\alienware\\Desktop\\bj_19_1021\\work\\day03\\03_Node\\node_modules',
     'C:\\Users\\alienware\\Desktop\\bj_19_1021\\work\\day03\\node_modules',
    'C:\\Users\\alienware\\Desktop\\bj_19_1021\\work\\node_modules',
    'C:\\Users\\alienware\\Desktop\\bj_19_1021\\node_modules',
    'C:\\Users\\alienware\\Desktop\\node_modules',
    'C:\\Users\\alienware\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules' ]
*/
