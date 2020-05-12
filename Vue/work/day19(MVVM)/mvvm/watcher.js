//vm : vm实例对象
//exp: 当前被解析的指令的表达式  damu.wife.wifeName
//cb : 回调;回调中拥有当前指令对应的更新器!!!


/*
    v-text.watcher.depIds = {
        damu.depid: damu.dep,
        wife.depid: wife.dep,
        wifename.depid:wifename.dep
    }

    {{}}watcher.depIds = {
        damu.depid: damu.dep,
        wife.depid: wife.dep,
        wifename.depid:wifename.dep
    }

    damu.dep.subs=[ {{}}.watcher , v-text.watcher]
    wife.dep.subs=[ {{}}.watcher , v-text.watcher]
    wifeName.dep.subs=[ {{}}.watcher , v-text.watcher]

*/

function Watcher(vm, exp, cb) {
    //this : wacther实例
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.depIds = {};
    this.value = this.get();
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    },
    get: function() {
        Dep.target = this;//打开数据劫持中开关 this:watcher
        var value = this.getVMVal();//真正的实现了dep 和 watcher 的多对多关系
        Dep.target = null;//关闭数据劫持中开关
        return value;
    },

    //根据exp 去data中找exp对应的值
    getVMVal: function() {
        var exp = this.exp.split('.');  //damu.wife.wifeName   ["damu","wife","wifeName"]
        var val = this.vm._data;      //data
        exp.forEach(function(k) {
            val = val[k]; //data["damu"]  data["damu"]["wife"]  data["damu"]["wife"]["wifeName"]
        });
        return val;
    }
};