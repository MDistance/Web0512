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
        outer.t = transformCSS(inner, 'translateY');
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
        transformCSS(inner, 'translateY', translateY);
        //设置滚动条的位置
        var scrollBarT = -translateY / inner.offsetHeight * outer.offsetHeight;
        //设置
        transformCSS(scrollBar, 'translateY', scrollBarT);
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
        var translateY = transformCSS(inner, 'translateY');
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
            tweenAnimation(inner, 'translateY', init, translateY, 500, 20, type, callback.move);
        } else {
            tweenAnimation(inner, 'translateY', init, translateY, 500, 20, type);
        }


        //获取当前滚动条的位置
        var scrollBarTranslateY = transformCSS(scrollBar, 'translateY');
        var endTranslateY = -translateY / inner.offsetHeight * outer.offsetHeight;
        //设置滚动条的过渡
        tweenAnimation(scrollBar, 'translateY', scrollBarTranslateY, endTranslateY, 500, 20, type)
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