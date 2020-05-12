<template>
  <div class="row">
    <p v-if="showMsg" style="color: gray;font-size: 30px;font-weight: 800">请输入需要查询的用户,建明丢了</p>
    <p v-else-if="showLoding" style="color: pink;font-size: 30px;font-weight: 800">loading</p>
    <div v-else>

      <!--前后端分离的开发模式中
        接口可能是后出来的
        一开始前端拿到的是一份约定好的数据-->
      <div  class="card" v-for="item in list" :key="item.id">
        <a :href="item.req" target="_blank">
          <img :src="item.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.name}}</p>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            showMsg:true,
            showLoding:true,
            list:[]
          }
        },
        mounted(){
           this.$bus.$on("Search",async (searchName)=>{
             //loading 在每一次请求前都要展示
             this.showLoding = true;
             //showMsg应该要被隐藏掉  初始化只显示一次
             this.showMsg = false;
             //发送请求
             const body =  await this.$axios({
                url:"/search/users",
                method:"get",
                params:{
                  q:searchName
                }
             })
             this.list = body.items.map(item =>({
               req:item.html_url,
               avatar:item.avatar_url,
               name:item.login
             }));
             //请求成功
             this.showLoding=false;
          })
        }
    }
</script>

<style scoped>

</style>
