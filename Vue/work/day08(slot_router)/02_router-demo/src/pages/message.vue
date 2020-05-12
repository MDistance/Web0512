<template>
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="item.id">
          <!--<a href="javascript:;">{{item.title}}</a>-->
           <router-link :to="`/home/message/${item.id}`">{{item.title}}</router-link>
           <button @click="pushFn(item.id)">push</button>
           <button @click="replaceFn(item.id)">replace</button>
        </li>
      </ul>
      <button @click="backFn">back</button>
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
        },
        methods:{
          pushFn(id){
            // this.$route 抽象路由的
            // this.$router 抽象路由器的
            this.$router.push(`/home/message/${id}`)
          },
          replaceFn(id){
            this.$router.replace(`/home/message/${id}`)
          },
          backFn(){
            this.$router.back()
            // this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>

</style>
