(function (w) {

    /**
     * 函数
     * gesture
     *
     * 事件
     * gesture(node, {
     *     gesturestart: function(e){
     *         console.log('start');
     *         //获取当前触点的位置
     *         e.touches[0].clientX
     *         e.touches[0].clientY
     *     },
     *     gesturechange: function(){},
     *     gestureend: function(){},
     * })
     */
    function gesture(node, callback) {
        //状态变量
        var hasGesgurestartTrigger = false;

        //分析  gesturestart 事件
        node.addEventListener('touchstart', function (e) {
            //获取屏幕上的触点信息  changedTouches   targetTouches  touches
            if (e.touches.length >= 2) {
                //获取起始位置两个触点的距离
                this.startDis = getDistance(e.touches[0], e.touches[1]);
                //判断回调
                if (callback && typeof callback.gesturestart === 'function') {
                    callback.gesturestart(e);
                }
                //获取形成的夹角
                this.startDegree = getDegree(e.touches[0], e.touches[1]);
                //触发
                hasGesgurestartTrigger = true;
            }
        });

        //gesturechange 事件
        node.addEventListener('touchmove', function (e) {
            if (e.touches.length >= 2) {
                //手势改变的事件处理程序
                //获取手势改变中两个触点的位置
                this.endDis = getDistance(e.touches[0], e.touches[1]);
                //设置两个触点改变后的比例
                e.scale = this.endDis / this.startDis;
                //获取触点行程的夹角
                this.endDegree = getDegree(e.touches[0], e.touches[1]);
                e.rotation = this.endDegree - this.startDegree;


                if (callback && typeof callback.gesturechange === 'function') {
                    callback.gesturechange(e);
                }
            }
        });

        //gestureend 事件
        node.addEventListener('touchend', function (e) {
            if (e.touches.length < 2 && hasGesgurestartTrigger) {
                if (callback && typeof callback.gestureend === 'function') {
                    callback.gestureend(e);
                }
                //还原状态变量
                hasGesgurestartTrigger = false;
            }
        });
    }

    /**
     * 获取两个触点之间的距离
     * @param t1
     * @param t2
     * @returns {number}
     */
    function getDistance(t1, t2) {
        //获取两个触点的距离
        var posA = t1;
        var posB = t2;

        var disX = posB.clientX - posA.clientX;
        var disY = posB.clientY - posA.clientY;

        //根据勾股定理算出两个触点的距离
        return  Math.sqrt(disX * disX + disY * disY);
    }

    /** 获取两个触点行程的夹角 单位为  度 **/
    function getDegree(t1, t2) {
        var posA = t1;
        var posB = t2;

        //获得水平方向的差
        var disX = posB.clientX - posA.clientX;
        var disY = posB.clientY - posA.clientY;

        //计算与水平方向的弧度
        var hudu = Math.atan2(disY, disX);
        var jiaodu = hudu * 180 / Math.PI;

        //计算弧度差
        return jiaodu;
    }

    w.gesture = gesture;
})(window)