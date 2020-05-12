<template>
    <div>
      <div v-show="detail.id">id:{{detail.id}}</div>
      <div v-show="detail.title">title:{{detail.title}}</div>
      <div v-show="detail.context">context:{{detail.context}}</div>
    </div>
</template>

<script>
    //理论上应该要去访问一个接口  详情接口
    const list = [
      {id:1,title:"message1",context:"message1新闻的详细信息"},
      {id:2,title:"message2",context:"message2新闻的详细信息"},
      {id:3,title:"message3",context:"message3新闻的详细信息"},
      {id:4,title:"message4",context:"message4新闻的详细信息"}
    ]
    export default {
        name: "messageDetail",
        props:{
          id:String
        },
        data(){
          return {
            detail:{}
          }
        },
        methods:{
          showDetail(){
            setTimeout(()=>{
              this.detail = list.find((item)=>{
                return +this.id === item.id
              })
            },2000)
          }
        },
        mounted(){
          this.showDetail()
        },
        watch:{
          $route(){
            this.showDetail()
          }
        }
    }
</script>

<style scoped>

</style>
