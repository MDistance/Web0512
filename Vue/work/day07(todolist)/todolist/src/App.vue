<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addItem="addItem"></todo-header>
        <!--插槽开始-->
          <todo-list :listArr="listArr">
            <template slot-scope="{text}" slot="spanSlot">
              <span style="color: red;font-weight: 800">{{text}}</span>
            </template>
            <template #inputSlot="{index}">
              (>^ω^<)喵<input type="checkbox" v-model="listArr[index].checked">
            </template>
            <!--<template slot-scope="{index}" slot="inputSlot">
              (>^ω^<)喵<input type="checkbox" v-model="listArr[index].checked">
            </template>-->
          </todo-list>

          <todo-list :listArr="listArr">
            <template slot-scope="{text}" slot="spanSlot">
              <span style="color: gray;font-weight: 800">{{text}}</span>
            </template>
            <template slot-scope="{index}" slot="inputSlot">
              (>^ω^<)汪<input type="checkbox" v-model="listArr[index].checked">
            </template>
          </todo-list>
        <!--插槽结束-->
        <todo-footer :listArr="listArr" @clear="clear" @checkedAll="checkedAll"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import util from "util";
  import header from "components/header.vue"; //vue-loader 就帮我们生成了一个组件的配置对象
  import list from "components/list.vue";
  import footer from "components/footer.vue";
  export default {
    name: 'App',
    data(){
      return {
        listArr: []
      }
    },
    methods:{
      addItem(item){
        this.listArr.unshift(item)
      },
      delItem(id){
        this.listArr = this.listArr.filter((item)=>{
          return item.id !== id;
        })
      },
      /*changeChecked(checked,id){
        //id: item传递过来的id;代表要删除的item
        this.listArr.forEach((item)=>{
          if(item.id === id){
            item.checked =checked;
          }
        })
      },*/
      clear(){
        this.listArr = this.listArr.filter((item)=>{
            return !item.checked;
        })
      },
      checkedAll(checked){
        /*
          对数组中元素进行一些统一操作的时候 可以学到map方法
          this.listArr = this.listArr.map((item)=>{
             item.checked = checked;
             return item
          })
        */
        this.listArr.forEach((item)=>{
          item.checked =checked
        })
      }
    },
    created(){
      this.$bus.$on("delItem",this.delItem),
      this.$bus.$on("changeChecked",this.changeChecked)
      /*this.$bus.$on("delItem",(id)=>{
        //id: item传递过来的id;代表要删除的item
        this.listArr = this.listArr.filter((item)=>{
          return item.id !== id;
        })
      }),
      this.$bus.$on("changeChecked",(checked,id)=>{
        //id: item传递过来的id;代表要删除的item
        this.listArr.forEach((item)=>{
          if(item.id === id){
            item.checked =checked;
          }
        })
      })*/
    },
    mounted(){
      /*
          JSON序列化:  将一个对象 转化成一个 字符串
            JSON.stringify
          JSON反序列化 : 将一个字符串 转从一个 对象
            JSON.parse
        */
      this.listArr=util.get("todolist",[]);
    },
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
    },
    watch:{
      //只要listArr有变动 我们就应该去同步loaclstorge
      //watch默认情况下 实现的是浅监听
      //deep:true 时 才是深度监听
      listArr:{
        handler: function (val) {
          util.set("todolist",val)
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
