import {GETADDRESSS,GETCATEGORIES,GETSHOPS,
    GETUSER,RESETUSER,AUTOLOGIN} from "@/store/mutation_types"
export default {
    [GETADDRESSS](state,address){
        state.addressObj = address
    },
    [GETCATEGORIES](state,categories){
        state.categories = categories
    },
    [GETSHOPS](state,shops){
        state.shops = shops
    },
    [GETUSER](state,user){
        state.user = user;
        //每次切换登录时 将仓库中的user信息修改掉
        state.token = user.token
    },
    [RESETUSER](state){
        state.user = {};
        state.token = "";
    },
    [AUTOLOGIN](state,user){
        state.user = user;
    }
}