import http from "@/http"
import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESSS} from "./mutation_types"
const OK=0;
export default {
    async [GETSELLER]({commit}){
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
    },
    async [GETADDRESSS]({commit}){
        const {code,data} = await http.wrap.getPosition()
        if(code === OK)
            commit(GETADDRESSS,data)
    }
}