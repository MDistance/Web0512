<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkedAll"/>
    </label>
    <span>
      已完成
      <i style="color: green;font-weight: 800">{{checkedCount}}</i>
      / 全部
      <i style="color: red;font-weight: 800">{{totalCount}}</i>
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
          listArr:Array
        },
        computed:{
          totalCount(){return this.listArr.length},
          checkedCount(){
            return this.listArr.reduce((adder,item)=>{
                return adder += (item.checked ? 1 : 0)
            },0)
          },
          checkedAll:{
            get(){
              var flag = this.totalCount!==0 && this.checkedCount!==0;
              return flag && this.totalCount === this.checkedCount
            },
            set(val){
              this.$emit("checkedAll",val)
            }
          }
        },
        methods:{
          clear(){
            this.$emit("clear")
          }
        }
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
