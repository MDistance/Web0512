
//获取元素
var container = document.querySelector('#swiper-container');
var wrapper = container.querySelector('.swiper-wrapper');
var swiperItems = wrapper.querySelectorAll('.swiper-item');
var swiperPagination = container.querySelector('.swiper-pagination');
var index = 0;
var points = container.getElementsByTagName('span');
var len = swiperItems.length;

//复制一份幻灯片内容
wrapper.innerHTML += wrapper.innerHTML;
var length = container.querySelectorAll('.swiper-item').length;

//绑定事件
container.addEventListener('touchstart', function(e){
    //判断当前的下标
    if(index == 0){
        index = len;
        //根据 index 移动 wrapper 的位置
        var newLeft = -index * container.offsetWidth;
        transformCSS(wrapper, 'translateX', newLeft);
    }
    //检测右侧边界
    if(index == length - 1){
        index = len - 1;
        //根据 index 移动 wrapper 的位置
        var newLeft = -index * container.offsetWidth;
        transformCSS(wrapper, 'translateX', newLeft);
    }

    //获取按下时 尺寸信息
    container.x = e.changedTouches[0].clientX;
    // ????
    container.l = transformCSS(wrapper, 'translateX');
    console.log(container.l);
    //移除过渡
    wrapper.style.transition = 'none';
    //按下时的时间戳
    container.d1 = Date.now();

});

//触摸滑动
container.addEventListener('touchmove', function(e){
    //
    container._x = e.changedTouches[0].clientX;
    var newLeft  = container._x - container.x + container.l;
    //设置left值
    transformCSS(wrapper, 'translateX', newLeft);
});

//触摸结束事件
container.addEventListener('touchend', function(e){
    //增加过渡
    wrapper.style.transition = 'all 0.5s';
    //获取结束时触点的位置
    container._x = e.changedTouches[0].clientX;
    //触摸结束时的时间戳
    container.d2 = Date.now(); // (new Date).getTime();
    //判断滑动的位移是否超过容器的宽度一半
    var disX = Math.abs(container._x - container.x);
    //计算时间差
    var disTime = container.d2 - container.d1;

    if(disX > container.offsetWidth / 2 || disTime <= 300){
        //向右滑动
        if(container._x > container.x){
            index --;
        }
        if(container._x < container.x){
            index ++;
        }
    }

    //判断索引是否越界
    if(index <= 0){
        index = 0;
    }

    if(index >= length - 1){
        index = length - 1;
    }

    //根据 index 设置 wrapper 的位置
    // 0        0
    // 1       -375
    // 2       -750
    // 3       -1125
    // index   -375*index
    var newLeft = -index * container.offsetWidth;
    //设置样式

    transformCSS(wrapper, 'translateX', newLeft);

    //移除所有点的 class
    // points.forEach(function(point){
    //     point.className = '';
    // });
    for(var i=0;i<points.length;i++){
        points[i].className = '';
    }
    //设置导航点的样式
    // 0-9  0-4
    // 0    0
    // 1    1
    // 2    2
    // 3    3
    // 4    4
    // 5    0
    // 6    1
    // 7    2
    // 8    3
    // 9    4
    points[index%len].className = 'active';

});

//初始化函数 init 初始化
function init() {
    //根据幻灯片的个数 设置包裹元素的宽度
    wrapper.style.width = length+'00%';
    //设置每一个幻灯片的宽度
    var items = container.querySelectorAll('.swiper-item');
    items.forEach(function(item){
        item.style.width = 100/length+'%';
    });
    //动态创建小圆点
    for(var i=0;i<len;i++){
        //创建小圆点元素
        var span = document.createElement('span');
        //判断
        if(i===0){
            span.className = 'active';
        }
        swiperPagination.appendChild(span);
    }
}
init();

