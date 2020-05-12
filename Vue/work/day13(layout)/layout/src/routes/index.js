import goods from "pages/goods.vue";
import ratings from "pages/ratings.vue";
import seller from "pages/seller.vue";
export default [
    {path:"/goods",component:goods},
    {path:"/ratings",component:ratings},
    {path:"/seller",component:seller},
    {path:"/",redirect:"/goods"}
]