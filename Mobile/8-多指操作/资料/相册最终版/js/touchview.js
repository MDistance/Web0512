(function (w) {
    /**
     * @introduction  实现元素的缩放与旋转
     * @param el  元素对象
     * @example
     *  new Touchview(box);
     */
    function Touchview(el) {
        //获取元素
        var box = el

        gesture(box, {
            //手势开始
            gesturestart: function (e) {
                //获取元素当前的 缩放比例
                this.scale = transformCSS(box, 'scale');
                this.rotate = transformCSS(box, 'rotate');
            },
            gesturechange: function (e) {
                //
                transformCSS(box, 'scale', this.scale * e.scale);
                transformCSS(box, 'rotate', this.rotate + e.rotation);
            },
            gestureend: function (e) {
            },
        });
    }

    w.Touchview = Touchview;
})(window)