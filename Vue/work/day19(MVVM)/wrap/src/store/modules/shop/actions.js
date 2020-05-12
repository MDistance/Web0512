import {Toast} from "vant";
import http from "@/http"
import router from "@/router"
import local from "@/util/local"
import {GETSELLER,GETGOODS,GETRATINGS,
    GETADDRESSS,GETCATEGORIES,GETSHOPS,
    GETUSER,RESETUSER,AUTOLOGIN} from "@/store/mutation_types"
const OK=0;
const ERROR=1;



export default {
    async [GETSELLER]({commit},id){
        const {code,data} = await http.shop.getSeller();
        if(code === OK)
            commit(GETSELLER,data)
    },
    async [GETGOODS]({commit}){
        const {code,data} = await http.shop.getGoods()
        if(code === OK)
            commit(GETGOODS,data)
    },
    async [GETRATINGS]({commit}){
        const {code,data} = await http.shop.getRatings()
        if(code === OK)
            commit(GETRATINGS,data)
    }
}