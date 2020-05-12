### 没有vuex的时候 数据怎么读取
  1. 父组件的数据传递给子组件后 子组件拿到之后转存一份 再使用
      适合父组件的数据 各个子组件之间是不需要同步的 各用各的;相当于是把父组件的数据做了一次拷贝
  2. 父组件的数据传递给子组件后 子组件不做转存直接使用
       适合父组件的数据 各个子组件之间是需要同步的
       可是需要修改得进行子向父的通信 通过父组件的方法来修改父组件的数据
       可能会出现脏数据的问题:
          将父组件中的数据 拿到之后 转存成了一个计算属性 进行使用
              父组件:
                data:{
                  test:"test"
                }
                <v-child :test="test"></v-child>
              子组件:
                  <input v-model="test2">       <input v-model="test">
                  props:["test"],               props:["test"]
                  computed:{
                    test2(){
                      return this.test
                    }
                  }



### vuex
  安装: npm i vuex --save
  基本使用:
    1. 将vuex注册为vue的插件 (这个步骤必须在创建仓库之前完成)
      import Vue from 'vue'
      import Vuex from 'vuex'
      Vue.use(Vuex)
    2. 创建仓库
      new Vuex.Store({
        state,
        getters,
        mutation,
        action
      })
    3.注册仓库
      import store from "@/store"
      new Vue({
        store
      })
  学习vuex的两个核心点
      仓库中的数据怎么读取
        当注册完vuex之后;所有的组件内都可以访问到一个叫$store的属性 这个属性指向的就是仓库实例
        仓库中的配置 都会转绑给仓库这个实例对象
        最安全的读取 应该是要将仓库中的数据 在组件上转成一份计算属性 进行读取
      仓库中的数据怎么修改
        通过提交mutation来进行修改


### vuex的配置项
#### state
  仓库中存储数据的地方
#### mutations
  仓库中操作数据的工具;
  vue的调试工具只会记录每一次mutation的执行;
  mutation中的函数怎么执行?
    通过仓库来调用commit方法 触发mutation的执行; 提交一个mutation!
  mutation函数只能同步的修改vue的数据;
#### actions
  仓库中操作数据的工具;
  所有对仓库中数据的异步修改 都有经过action
  在组件上分发一个action;在action内部显示的去提交一个mutation;在mutation内部同步的修改仓库数据
#### getters
  仓库中操作数据的工具
  getter就是我们仓库里的计算属性

### 组件写法的优化
    基本规律:
          vuex中的state 我们在组件中使用时通常需要有对应的computed
          vuex中的getters 我们在组件中使用时通常需要有对应的computed
          vuex中的mutations 我们在组件中使用时通常需要有对应的methods(为了流程统一 组件上很少提交mutation)
          vuex中的actions 我们在组件中使用时通常需要有对应的methods

    mapState(["num","a"])  --->   {num(){return this.$store.state.num},a(){return this.$store.state.a}}
    mapGetters(["flag"])  --->   {flag(){return this.$store.getters.flag}}

    mapState({key:val})  key:组件上使用的名字  val:仓库里的名字
         { key(){return this.$store.state.val} }




