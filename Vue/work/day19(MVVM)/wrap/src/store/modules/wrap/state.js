import local from "@/util/local"
export default {
    imgBaseUrl:"https://fuss10.elemecdn.com",
    //layout中需要的数据
    seller:{},
    goods:[],
    ratings:[],
    //wrap中需要的数据
    addressObj:{},
    categories:[],
    shops:[],
    user:{},
    //每次刷新界面时 去local读取登录信息
    token:local.get("ele-token")
}