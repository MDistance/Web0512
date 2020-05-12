function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    var me = this;

    //实现数据代理  让我们在页面上创建的vm实例对象 去代理 data配置对象属性的读写
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    //实现数据劫持
    observe(data, this);

    //实现模板解析的
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};