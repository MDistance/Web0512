(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * main.js 主要  入口文件
 */
var tweenAnimation = require('./tweenAnimation');

var box = document.querySelector('#box');

tweenAnimation(box, 'translateX', 0, 300, 2000, 20, 'linear');
},{"./tweenAnimation":3}],2:[function(require,module,exports){
/**
 函数名:
    transformCSS

 作用:
     - 设置元素的 transform 变形
     - 获取元素的 transform 变形值

 示例
 需求
     设置变形
     #box  div  translateX  200px
     transformCSS(box, 'translateX', 200);// ==> box.style.transform = 'translateX(200px)';
     transformCSS(box, 'scale', 2);
     transformCSS(box, 'rotate', 45);

 获取元素变形样式值
    var x = transformCSS(box, 'translateX'); // 200
 */

// var store = {};// {translateX:200, scale:3}  => translateX(200px) scale(3);

function transformCSS(el, type, value) {
    //设置
    /**
     * transformCSS(box,'translateX', 200);  // box.style.transform = 'translateX(200px');
     transformCSS(box,'scale', 3);
     transformCSS(box,'rotate', 45);
     */
    if (el.store === undefined) {
        el.store = {
            translateZ: 0
        };//
    }

    //设置
    if (arguments.length === 3) {
        //box.style.transform = 'translateX(200px');
        //将变形样式 存储到 store 对象中
        el.store[type] = value;

        var str = '';
        //遍历对象
        for (var i in el.store) {
            // str = 'translateX(200px');
            switch (i) {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                    str += i + '(' + el.store[i] + 'px) ';
                    break;

                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    str += i + '(' + el.store[i] + ') ';
                    break;

                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                    str += i + '(' + el.store[i] + 'deg) ';
                    break;
            }
        }

        //设置样式
        el.style.transform = str;
    }

    //读取
    if(arguments.length === 2){
        // 如果 store 中存在该属性 则返回 如果不存在 则返回默认值  translate 0  rotate 0  scale  1
        // var x = transformCSS(box, 'translateX'); // 200
        if(el.store[type] !== undefined){
            return el.store[type];
        }else{
            // 判断 type 变量的值 前五个字母是否为 scale
            if(type.substr(0, 5) === 'scale'){
                return 1;
            }else{
                return 0;
            }
        }
    }

}

module.exports = transformCSS;

},{}],3:[function(require,module,exports){
/**
    函数名
    tweenAnimation

    函数功能
    帮我们实现动画效果 类似 transition 效果

    示例  2s left  100 -> 800   //t=0
    tweenAnimation(el, 'left', 100, 800, 2000, 20, 'linear');

    // 3s  width 200 ->  900
    tweenAniation(el, 'width', 200, 900, 3000, 30, 'linear');
    tweenAniation(el, 'width', 200, 900, 3000, 30, 'easeout');
    tweenAniation(el, 'width', 200, 900, 3000, 30, 'back');
    tweenAniation(el, 'width', 200, 900, 3000, 30, 'back', function(){
        console.log('iloveyou');
    });

    依赖
    - transformCSS

 */
/**
 *
 * @param el            元素对象
 * @param style         CSS 样式
 * @param init          起始状态
 * @param end           结束状态
 * @param duration      过渡的时间
 * @param timeout       时间间隔
 * @param type          过渡的类型
 */

var transformCSS = require('./transformCSS');

function tweenAnimation(el, style, init, end, duration, timeout, type, callback){
    //tween 函数声明
    var tween = {
        linear: function(t,b,c,d){ return c*t/d + b; },
        easeout: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        back: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        }
    };
    //参数
    if(el.timer === undefined){
        el.timer = {};
    }

    el.timer[style] = null;

    var t = 0;
    var b = init;
    var c = end - init;
    var d = duration;
    var step = timeout;

    //安全起见
    clearInterval(el.timer[style]);

    el.timer[style] = setInterval(function(){
        //执行用户回调
        if(callback && typeof callback === 'function'){
            callback();
        }

        //0. 清空定时器
        if(t >= d){
            clearInterval(el.timer[style]);
            return;
        }

        //1. 时间自增
        t += step;

        //2. 计算当前的样式值
        var res = tween[type](t, b, c, d);

        //3. 设置样式
        switch (style) {
            case 'width':
            case 'height':
            case 'left':
            case 'top':
                el.style[style] = res + 'px';
                break;

            case 'translateX':
            case 'translateY':
            case 'translateZ':
            case 'scale':
            case 'scaleX':
            case 'scaleY':
            case 'scaleZ':
            case 'rotate':
            case 'rotateX':
            case 'rotateY':
            case 'rotateZ':
                transformCSS(el, style, res);
                break;

            case 'opacity':
                el.style[style] = res;
                break;
        }
    }, step);

}

module.exports = tweenAnimation;
},{"./transformCSS":2}]},{},[1]);
