<template>
  <div class="todo-header">
  <input type="text" placeholder="请输入你的任务名称，按回车键确认"
         v-model="text" @keydown.13="addItem"/>
</div>
</template>

<script>
  // let id = 2;
  import util from "util";
  export default {
    name: 'Header',
    data(){
      return {
        text:""
      }
    },
    methods:{
      addItem(){
        //拿到 text数据, 往app中新增一项
        //实现一个子向父的通信
        let id =util.get("todoid",0)
        util.set("todoid",++id)
        let item ={
          id,
          text:this.text,
          checked:false
        }
        //主动和app进行一次通信
        this.$emit("addItem",item)
        this.text="";
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
