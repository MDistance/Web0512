<template>
    <li :class="{highlight:highlight,line:checked}"
        @mouseleave="highlight = !highlight"
        @mouseenter="highlight = !highlight">
      <label>
        <!--item 组件 不能直接修改 app组件中的数据-->
        <!-- v-model脏数据 -->
        <!--待办任务的复选框-->
        <!--<input type="checkbox" v-model="checked" />-->
        <slot name="inputSlot" :index="index"></slot>
        <!--待办任务的文案-->
        <!--<span>{{item.text}}</span>-->
        <!--插槽-->
        <!--<span style="color: red;font-weight: 800">html from app-1</span>-->
        <slot name="spanSlot" :text="item.text"></slot>
      </label>
      <button class="btn btn-danger" @click="delItem"
              :style="{display:highlight?'block':'none'}">删除</button>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props:{
          item:Object,
          index:Number
        },
        data(){
          return {
            highlight:false
          }
        },
        computed:{
          checked:{
            get(){return this.item.checked}
            /*set(val){
              // console.log(val,this.item.id);
              this.$bus.$emit("changeChecked",val,this.item.id)
            }*/
          }
        },
        methods:{
          delItem(){
            //跟app进行一次 爷孙之间的通信
            this.$bus.$emit("delItem",this.item.id)
          }
        }
    }
</script>

<style scoped>
  .line{
    position: relative;
  }
  .line:after{
    content: "";
    display: block;
    width: 85%;
    height: 1px;
    background: red;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: scaleY(.5);
  }
  .highlight{
    background: pink;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    position: relative;
    z-index: 9;
    float: right;
    margin-top: 3px;
    display: none;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
