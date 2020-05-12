import goods from "pages/ele-goods/ele-goods.vue";
import ratings from "pages/ele-ratings/ele-ratings.vue";
import seller from "pages/ele-seller/ele-seller.vue";
import Msite from "pages/Msite/Msite.vue";
import Order from "pages/Order/Order.vue";
import Profile from "pages/Profile/Profile.vue";
import Search from "pages/Search/Search.vue";
import Login from "pages/Login/Login.vue";
import Shop from "pages/ele-shop/ele-shop.vue";
export default [
    {path:"/Msite",component:Msite,meta:{showFooter:true}},
    {path:"/Order",component:Order,meta:{showFooter:true}},
    {path:"/Profile",component:Profile,meta:{showFooter:true}},
    {path:"/Search",component:Search,meta:{showFooter:true}},
    {path:"/Login",component:Login,meta:{showFooter:false}},
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