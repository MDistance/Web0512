### 路由守卫

    导航被触发。
    在失活的组件里调用离开守卫。
    调用全局的 beforeEach 守卫。
    在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    在路由配置里调用 beforeEnter。
    解析异步路由组件。
    在被激活的组件里调用 beforeRouteEnter。
    调用全局的 beforeResolve 守卫 (2.5+)。
    导航被确认。
    调用全局的 afterEach 钩子。
    触发 DOM 更新。
    用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

### 仓库分模块的写法
     总仓库:
        modules:{
                shop,   //shop仓库(拥有完整一套数据 跟 操作数据的工具)
                wrap    //wrao仓库(拥有完整一套数据 跟 操作数据的工具)
        }

     分仓库:
        怎么读取分仓库的数据 : store.state.仓库名
            路由守卫中读取了仓库的数据
            大部分组件都读取了仓库的数据
        怎么修改分仓库的数据 :
            分库存中的mutation函数的第一个参数是分仓库中数据
            分库存中的action函数的第一个参数是代表分仓库的那个store
            mutation 和 action 分别被怎么提交和转发?
                默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的

### 统一处理vue项目不影响项目流程的错误
    1. 计算属性传参(layout ratings组件中)
    2. 处理两个异常
        msite组件滑屏的异常
        编程式路由自己的bug
    3. 所有滑屏上的点击事件失效了
        bettter-scroll主动的派发click事件

### MVVM的原理(vue数据双向绑定的原理 3:30开始讲)
