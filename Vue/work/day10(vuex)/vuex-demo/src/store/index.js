import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/*vuex的核心:
  1. 仓库中的数据怎么读取
  2. 仓库中的数据怎么修改*/
export default new Vuex.Store({
    strict:true,
    state:{
      num:0,
      firstName:"T",
      lastName:"Mac"
    },
    getters:{
      fullName(state){
        return `${state.firstName}-${state.lastName}`
      },
      flag(state){
        return state.num%2 ===0 ? "偶":"奇"
      }
    },
    mutations:{
      //给函数预定义参数  这种技术一般称为柯里化
      //在mutation的内部只能出现同步代码 为了是保证我们的vue开发者工具可用
      inc(state,payload){
        state.num+=payload
      },
      /*incAsync(state,payload){
        setTimeout(()=>{
          state.num += payload
        },2000)
      }*/
    },
    actions:{
      inc(store,payload){
        store.commit("inc",payload)
      },
      incAsync(store,payload){
        setTimeout(()=>{
          //在action内部提交mutation
          store.commit("inc",payload)
        },2000)
      }
    },

})

