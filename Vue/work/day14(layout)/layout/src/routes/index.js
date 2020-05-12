import goods from "pages/ele-goods/ele-goods.vue";
import ratings from "pages/ele-ratings/ele-ratings.vue";
import seller from "pages/ele-seller/ele-seller.vue";
export default [
    {path:"/goods",component:goods},
    {path:"/ratings",component:ratings},
    {path:"/seller",component:seller},
    {path:"/",redirect:"/goods"}
]