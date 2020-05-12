<template>
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="item.id">
          <!--<a href="javascript:;">{{item.title}}</a>-->
           <router-link :to="`/home/message/${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    //理论上应该要去访问一个接口  概要接口
    const list = [
      {id:1,title:"message1"},
      {id:2,title:"message2"},
      {id:3,title:"message3"},
      {id:4,title:"message4"}
    ]
    export default {
        name: "message",
        data(){
          return {
            list:[]
          }
        },
        mounted(){
          setTimeout(()=>{
            this.list = list
          },2000)
        }
    }
</script>

<style scoped>

</style>
