(function () {
    //获取元素
    var swiper = document.querySelector('#swiper');
    var swiperWrapper = swiper.querySelector('.swiper-wrapper');
    //初始化 总共元素的个数
    var len = swiperWrapper.querySelectorAll('.swiper-item').length;
    //复制一份swiperWrapper 内容
    swiperWrapper.innerHTML += swiperWrapper.innerHTML;
    var swiperItems = swiper.querySelectorAll('.swiper-item');
    var paginations = swiper.querySelectorAll('.pagination span');
    var index = 0;//
    var length = swiperItems.length;
    //状态变量
    var isHori = false;
    var isFirst = true;

    //初始化操作
    swiper.init = function () {
        //设置 wrapper 的宽度
        //获取元素的个数
        var len = swiperItems.length;
        //设置宽度
        swiperWrapper.style.width = len * 100 + '%';
        //设置每一个元素的宽度  10   1/10    20  1/20
        var width = 1 / len * 100 + '%'
        swiperItems.forEach(function (item) {
            item.style.width = width;
        });
        //为swiper元素设置高度
        var img = swiperItems[0].querySelector('img');
        swiper.style.height = img.offsetHeight + 'px';
    }
    swiper.init();

    //绑定事件
    swiper.addEventListener('touchstart', function (e) {
        //停止定时器 1
        clearInterval(this.timer);
        this.timer = null;
        //判断
        if (index == 0) {
            index = len;// length=10  len = 5
            transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth)
        } else if (index == length - 1) {
            index = len - 1;
            transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth)
        }
        //获取当前的触点位置
        this.x = e.targetTouches[0].clientX;
        this.y = e.targetTouches[0].clientY;
        //获取当前包裹元素的位置 ?????????
        this.left = transformCSS(swiperWrapper, 'translateX');
        //移除transition
        swiperWrapper.style.transition = 'none';
        //获取当前的触摸时间
        this.startTime = (new Date).getTime();
    });

    //绑定触摸移动事件
    swiper.addEventListener('touchmove', function (e) {
        //获取当前的触点的位置
        this._x = e.targetTouches[0].clientX;
        this._y = e.targetTouches[0].clientY;

        var disX = Math.abs(this._x - this.x);
        var disY = Math.abs(this._y - this.y);
        if(isFirst){
            isFirst = false;
            //水平移动
            if(disX > disY){
                isHori = true;
            }else{
                isHori = false;
            }
        }
        if(!isHori) return;
        //计算新的left值
        var newLeft = this._x - this.x + this.left;

        //设置left 的值
        transformCSS(swiperWrapper, 'translateX', newLeft);
        if(isHori) e.preventDefault();
    });

    //绑定触摸结束事件
    swiper.addEventListener('touchend', function (e) {
        //还原状态值
        isFirst = true;
        //重启定时器
        this.autoRun();
        this._x = e.changedTouches[0].clientX;
        this.endTime = (new Date).getTime();
        //计算两次的时间间隔
        var disTime = this.endTime - this.startTime;
        //计算两次触摸的距离
        var disX = Math.abs(this._x - this.x);
        if (disX > swiper.offsetWidth / 2 || disTime < 200) {
            if (this._x > this.x) {
                index--;
            } else if (this._x < this.x) {
                index++;
            }
        }
        swiper.switchSlide(index);
    });

    //根据索引切换幻灯片
    swiper.switchSlide = function (i) {
        //检测越界  ctrl + d
        if (i < 0) {
            i = 0;
        }
        if (i > length - 1) {
            i = length - 1;
        }
        //增加 transition 过渡
        swiperWrapper.style.transition = 'all .5s';
        //根据i显示不同的图片
        var left = -swiper.offsetWidth * i;
        //修改 left 的值   translateX
        transformCSS(swiperWrapper, 'translateX', left);
        //处理导航点的位置
        paginations.forEach(function (item) {
            //移除 active class
            item.classList.remove('active');
        });
        //当前增加 active  i  5 6 7 8 9
        //                       0 1 2 3 4
        paginations[i % len].classList.add('active');
        //这行代码至关重要
        index = i;
    }

    //自动执行
    swiper.autoRun = function () {
        if(this.timer) return;
        this.timer = setInterval(function () {
            //修改索引
            index++;
            //切换幻灯片
            swiper.switchSlide(index);
        }, 1000);
    }
    swiper.autoRun();

    //动画结束事件
    swiperWrapper.addEventListener('transitionend', function (e) {
        //p判断
        if (index >= length - 1) {
            //修改索引
            index = len - 1;
            //清除过渡
            swiperWrapper.style.transition = 'none';
            //调整 wrapper 的位置
            transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth);
        }
    });
})();