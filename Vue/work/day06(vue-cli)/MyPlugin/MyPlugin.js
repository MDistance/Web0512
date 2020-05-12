(function (w) {

    //Object.create(null) : 创建出来一个最干净的对象
    w.myPlugin = Object.create(null);

    w.myPlugin.install=function (Vue) {
        //定义了一个指令
        Vue.directive('focus', {
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        })

        //定义了一个全局组件
        Vue.component("v-damu",{
            template:"<span>v-damu</span>"
        })

        //给所有的vue实例(组件)新增属性 方法
        Vue.prototype.damu = "damu";
        Vue.prototype.fn = function () {
            console.log("------")
        };

    }

})(window)