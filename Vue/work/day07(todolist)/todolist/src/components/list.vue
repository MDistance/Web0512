<template>
  <ul class="todo-main">
    <todo-item v-for="(item,index) in listArr" :key="item.id" :item="item" :index="index">
      <template slot-scope="{text}" slot="spanSlot">
        <slot :text="text" name="spanSlot"></slot>
        <!--<span style="color: red;font-weight: 800">{{text}}</span>-->
      </template>

      <template #inputSlot="{index}">
        <slot :index="index" name="inputSlot"></slot>
      </template>
     <!-- <template slot-scope="{index}" slot="inputSlot">
        <slot :index="index" name="inputSlot"></slot>
        &lt;!&ndash;(>^ω^<)喵<input type="checkbox">&ndash;&gt;
      </template>-->
    </todo-item>
  </ul>
</template>

<script>
    import item from "components/item"
    export default {
        name: "List",
        props:{
          listArr:Array
        },
        components:{
          "todo-item":item
        }
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
