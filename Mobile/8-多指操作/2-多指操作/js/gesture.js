function gesture(el, callbacks) {
    //定义标识变量
    el.gestureStartTrigger = false;
    //绑定事件
    el.addEventListener('touchstart', function (e) {
        if (e.touches.length >= 2) {
            ///执行手势开始事件的处理程序
            if (callbacks && typeof callbacks.start === 'function') {
                callbacks.start(e);
                //获取起始位置的 触点的距离
                el.startDis = getDistance(e.targetTouches[0], e.targetTouches[1]);
                el.gestureStartTrigger = true;
            }
        }
    });

    el.addEventListener('touchmove', function (e) {
        if (e.touches.length >= 2) {
            ///执行手势开始事件的处理程序
            if (callbacks && typeof callbacks.change === 'function') {
                //增加 scale 属性
                el.endDis = getDistance(e.targetTouches[0], e.targetTouches[1]);
                e.scale = el.endDis / el.startDis;
                callbacks.change(e);
            }
        }
    });

    el.addEventListener('touchend', function (e) {
        if (e.touches.length < 2 && el.gestureStartTrigger) {
            ///执行手势开始事件的处理程序
            if (callbacks && typeof callbacks.end === 'function') {
                callbacks.end();
            }
            el.gestureStartTrigger = false;
        }
    });
}

/**
 * 函数封装 获取两个触点之间的距离
 */
function getDistance(t1, t2) {
    var disX = t1.clientX - t2.clientX;
    var disY = t1.clientY - t2.clientY;

    //计算开始和结束时的触点间距
    return Math.sqrt(disX * disX + disY * disY);
}