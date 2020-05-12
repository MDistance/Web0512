import {GETSELLER,GETGOODS,GETRATINGS,
    GETADDRESSS,GETCATEGORIES,GETSHOPS} from "./mutation_types"
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
    },
    [GETCATEGORIES](state,categories){
        state.categories = categories
    },
    [GETSHOPS](state,shops){
        state.shops = shops
    }
}