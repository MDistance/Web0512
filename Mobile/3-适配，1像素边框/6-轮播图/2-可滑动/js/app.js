
//获取元素
var container = document.querySelector('#swiper-container');
var wrapper = container.querySelector('.swiper-wrapper');

//绑定事件
container.addEventListener('touchstart', function(e){
    //获取按下时 尺寸信息
    container.x = e.changedTouches[0].clientX;
    container.l = wrapper.offsetLeft;
});

container.addEventListener('touchmove', function(e){
    //
    container._x = e.changedTouches[0].clientX;
    var newLeft  = container._x - container.x + container.l;

    //设置left值
    wrapper.style.left = newLeft + 'px';

});