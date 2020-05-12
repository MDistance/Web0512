import about from "pages/about.vue";
import home from "pages/home.vue";
import user from "pages/user.vue";
import news from "pages/news.vue";
import message from "pages/message.vue";
import userDetail from "pages/userDetail.vue";
import messageDetail from "pages/messageDetail.vue"
export default [
  {path:"/about",component:about},
  {
    path:"/home",
    component:home,
    children:[
      {path:"news",component:news},
      {
        path:"message",
        component:message,
        children:[
          {path:":id",component:messageDetail,props:true}
        ]
      },
      {path:"",redirect:"message"}
    ]
  },
  {
    path:"/user",
    component:user,
    children:[
      // <userDetail id="1"></userDetail>
      // {path:":id",component:userDetail,props:true},

      // <userDetail id="1" name="damu"></userDetail>
      // {path:":id",component:userDetail,props:{id:"1",name:"damu"}},

      // <userDetail id="得看路径" name="得看路径"></userDetail>
      {
        path:":id",
        component:userDetail,
        props:route=>({
          id:route.params.id,
          name:route.query.name
        })
      },
      {path:"",redirect:"1"}
    ]
  },
  {path:"/",redirect:"/about"}
]
