(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _touchscroll = require('./touchscroll');

document.documentElement.addEventListener('touchstart', function (e) {
    e.preventDefault();
}, {
    passive: false
});

//实例化
new _touchscroll.Touchscroll('#outer', '#inner');
},{"./touchscroll":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Touchscroll = Touchscroll;

var _transformCSS = require("./transformCSS");

var _tweenAnimation = require("./tweenAnimation");

/**
 函数
 Touchscroll

 功能
 能快速实现竖向滑屏功能效果

 使用示例
 new Touchscroll('#outer','#inner');
 new Touchscroll('#container','#content');
 new Touchscroll('#container','#content', {
    start: function(){},
    move: function(){},
    end: function(){}
 });

 依赖
 transformCSS
 tweenAnimation
 */
function Touchscroll(outer, inner, callback) {
    //获取元素对象
    var outer = document.querySelector(outer);
    var inner = outer.querySelector(inner);
    var scrollBar = null;

    //绑定事件
    outer.addEventListener('touchstart', function (e) {
        outer.y = e.changedTouches[0].clientY;
        outer.t = (0, _transformCSS.transformCSS)(inner, 'translateY');
        outer.startTime = Date.now();
        //清除定时器
        if (inner.timer && inner.timer['translateY']) {
            clearInterval(inner.timer['translateY']);
        }
        //清空滚动条元素的定时器
        if (scrollBar.timer && scrollBar.timer['translateY']) {
            clearInterval(scrollBar.timer['translateY']);
        }
        if (callback && callback.start && typeof callback.start === 'function') {
            callback.start();
        }
    });

    outer.addEventListener('touchmove', function (e) {
        //获取触摸移动之后的触点位置
        outer._y = e.changedTouches[0].clientY;
        //计算新的 translateY 的值
        var translateY = outer._y - outer.y + outer.t;
        //设置 inner 的位置
        (0, _transformCSS.transformCSS)(inner, 'translateY', translateY);
        //设置滚动条的位置
        var scrollBarT = -translateY / inner.offsetHeight * outer.offsetHeight;
        //设置
        (0, _transformCSS.transformCSS)(scrollBar, 'translateY', scrollBarT);
        if (callback && callback.move && typeof callback.move === 'function') {
            callback.move();
        }
    });

    outer.addEventListener('touchend', function (e) {
        //计算速度
        // t s
        outer.endTime = Date.now();
        var disTime = outer.endTime - outer.startTime;
        //滑动位移
        outer._y = e.changedTouches[0].clientY;
        var disDistance = outer._y - outer.y;
        //计算速度
        var v = disDistance / disTime;
        //计算 额外的 位移
        var s = v * 100;

        //获取 inner 的 translateY 的值
        var translateY = (0, _transformCSS.transformCSS)(inner, 'translateY');
        var init = translateY;
        translateY += s;

        //切换类型
        var type = 'easeout';

        if (translateY > 0) {
            translateY = 0;
            type = 'back';
        }
        var minTranslateY = outer.offsetHeight - inner.offsetHeight;
        if (translateY < minTranslateY) {
            translateY = minTranslateY;
            type = 'back';
        }

        //设置内容过渡
        // transformCSS(inner, 'translateY', translateY);
        if (callback && callback.move && typeof callback.move === 'function') {
            (0, _tweenAnimation.tweenAnimation)(inner, 'translateY', init, translateY, 500, 20, type, callback.move);
        } else {
            (0, _tweenAnimation.tweenAnimation)(inner, 'translateY', init, translateY, 500, 20, type);
        }

        //获取当前滚动条的位置
        var scrollBarTranslateY = (0, _transformCSS.transformCSS)(scrollBar, 'translateY');
        var endTranslateY = -translateY / inner.offsetHeight * outer.offsetHeight;
        //设置滚动条的过渡
        (0, _tweenAnimation.tweenAnimation)(scrollBar, 'translateY', scrollBarTranslateY, endTranslateY, 500, 20, type);
        if (callback && callback.end && typeof callback.end === 'function') {
            callback.end();
        }
    });

    //动态创建滚动条
    function init() {
        //父级元素增加相对定位样式
        outer.style.position = 'relative';
        outer.style.overflow = 'hidden';
        //动态创建 滚动条
        scrollBar = document.createElement('div');
        //增加样式
        scrollBar.className = 'scroll-bar';
        scrollBar.style.position = 'absolute';
        scrollBar.style.background = 'rgba(0, 0, 0, 0.5)';
        scrollBar.style.right = 0;
        scrollBar.style.top = 0;
        scrollBar.style.width = '4px';
        scrollBar.style.borderRadius = '2px';
        //j将元素插入到 outer 中
        outer.appendChild(scrollBar);

        //设置滚动条的高度
        window.addEventListener('load', function () {
            calHeight();
        });
    }

    //计算滚动条高度的
    function calHeight() {
        var scrollBarHeight = outer.offsetHeight / inner.offsetHeight * outer.offsetHeight;
        console.log(outer.offsetHeight, inner.offsetHeight, outer.offsetHeight);
        //设置
        scrollBar.style.height = scrollBarHeight + 'px';
    }

    this.calHeight = calHeight;

    init();
}
},{"./transformCSS":3,"./tweenAnimation":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformCSS = transformCSS;
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
        }; //
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
    if (arguments.length === 2) {
        // 如果 store 中存在该属性 则返回 如果不存在 则返回默认值  translate 0  rotate 0  scale  1
        // var x = transformCSS(box, 'translateX'); // 200
        if (el.store[type] !== undefined) {
            return el.store[type];
        } else {
            // 判断 type 变量的值 前五个字母是否为 scale
            if (type.substr(0, 5) === 'scale') {
                return 1;
            } else {
                return 0;
            }
        }
    }
}
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tweenAnimation = tweenAnimation;

var _transformCSS = require('./transformCSS');

function tweenAnimation(el, style, init, end, duration, timeout, type, callback) {
    //tween 函数声明
    var tween = {
        linear: function linear(t, b, c, d) {
            return c * t / d + b;
        },
        easeout: function easeout(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        back: function back(t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
    };
    //参数
    if (el.timer === undefined) {
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

    el.timer[style] = setInterval(function () {
        //执行用户回调
        if (callback && typeof callback === 'function') {
            callback();
        }

        //0. 清空定时器
        if (t >= d) {
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
                (0, _transformCSS.transformCSS)(el, style, res);
                break;

            case 'opacity':
                el.style[style] = res;
                break;
        }
    }, step);
} /**
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
},{"./transformCSS":3}]},{},[1]);
