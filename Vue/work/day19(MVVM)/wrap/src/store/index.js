import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import shop from "./modules/shop"
import wrap from "./modules/wrap"
export default new Vuex.Store({
    modules:{
        shop,
        wrap
    }
})