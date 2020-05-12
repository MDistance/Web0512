import about from "pages/about.vue";
import home from "pages/home.vue";
import user from "pages/user.vue";
import news from "pages/news.vue";
import message from "pages/message.vue";
export default [
  {path:"/about",component:about},
  {
    path:"/home",
    component:home,
    children:[
      {path:"news",component:news},
      {path:"message",component:message}
    ]
  },
  // 规范的定义路由!!! 不要使用二级路由的定义形式来注册一个一级路由
  // {path:"/home/user",component:user},
  {path:"/user",component:user},
  {path:"/",redirect:"/about"}
]
