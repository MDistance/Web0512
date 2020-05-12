/**
 * main.js 主要  入口文件
 */
var tweenAnimation = require('./tweenAnimation');

var box = document.querySelector('#box');

tweenAnimation(box, 'translateX', 0, 300, 2000, 20, 'linear');