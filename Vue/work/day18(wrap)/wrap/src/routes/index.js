/*路由懒加载:
    不找项目初始化的时候 去加载所有路由
    而是用到哪个路由 就去 加载这个路由*/


// import goods from "pages/ele-goods/ele-goods.vue";
// import ratings from "pages/ele-ratings/ele-ratings.vue";
// import seller from "pages/ele-seller/ele-seller.vue";
// import Msite from "pages/Msite/Msite.vue";
// import Order from "pages/Order/Order.vue";
// import Profile from "pages/Profile/Profile.vue";
// import Search from "pages/Search/Search.vue";
// import Login from "pages/Login/Login.vue";
// import Shop from "pages/ele-shop/ele-shop.vue";
// import UserDetail from "pages/UserDetail/UserDetail.vue";

const goods = ()=> import(/*webpackChunkName:"goods"*/"pages/ele-goods/ele-goods.vue");
const ratings = ()=> import(/*webpackChunkName:"ratings"*/"pages/ele-ratings/ele-ratings.vue");
const seller = ()=> import(/*webpackChunkName:"seller"*/"pages/ele-seller/ele-seller.vue");
const Msite = ()=> import(/*webpackChunkName:"Msite"*/"pages/Msite/Msite.vue");
const Order = ()=> import(/*webpackChunkName:"Order"*/"pages/Order/Order.vue");
const Profile = ()=> import(/*webpackChunkName:"Profile"*/"pages/Profile/Profile.vue");
const Search = ()=> import(/*webpackChunkName:"Search"*/"pages/Search/Search.vue");
const Login = ()=> import(/*webpackChunkName:"Login"*/"pages/Login/Login.vue");
const Shop = ()=> import(/*webpackChunkName:"Shop"*/"pages/ele-shop/ele-shop.vue");
const UserDetail = ()=> import(/*webpackChunkName:"UserDetail"*/"pages/UserDetail/UserDetail.vue");

export default [
    {path:"/Msite",component:Msite,meta:{showFooter:true}},
    {path:"/Order",component:Order,meta:{showFooter:true}},
    {path:"/Profile",component:Profile,meta:{showFooter:true}},
    {path:"/Search",component:Search,meta:{showFooter:true}},
    {path:"/Login",component:Login,meta:{showFooter:false}},
    {path:"/UserDetail",component:UserDetail,meta:{showFooter:false}},
    {
        path:"/Shop/:id",
        component:Shop,
        meta:{showFooter:false},
        props:true,
        children:[
            {path:"goods",component:goods},
            {path:"ratings",component:ratings},
            {path:"seller",component:seller},
            {path:"",redirect:"goods"}
        ]
    },
    {path:"/",redirect:"/Msite"}
]