import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESSS} from "./mutation_types"
export default {
    [GETSELLER](state,seller){
        state.seller = seller
    },
    [GETGOODS](state,goods){
        state.goods = goods
    },
    [GETRATINGS](state,ratings){
        state.ratings = ratings
    },
    [GETADDRESSS](state,address){
        state.addressObj = address
    }
}