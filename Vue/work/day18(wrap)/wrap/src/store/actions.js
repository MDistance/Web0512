import {Toast} from "vant";
import http from "@/http"
import router from "@/router"
import local from "@/util/local"
import {GETSELLER,GETGOODS,GETRATINGS,
    GETADDRESSS,GETCATEGORIES,GETSHOPS,
    GETUSER,RESETUSER,AUTOLOGIN} from "./mutation_types"
const OK=0;
const ERROR=1;

function loginSuccess(commit,user,getCaptcha,loginWay){
    //登录成功之后要将用户信息保存(仓库)
    commit(GETUSER,user);

    //当使用用户名密码登录成功之后 我们需要更新图片验证码
    //登录成功之后要更新验证码
    if(loginWay === "password")
        getCaptcha()

    //将token存入到local中  登录成功时将token交给vuex来管理
    local.set("ele-token",user.token)

    //编程式路由 登录成功之后要跳转到个人中心(登录信息回显)
    router.replace("/Profile")
};
function loginFail(getCaptcha,loginWay){
    // 登录失败之后要更新验证码
    if(loginWay === "password")
        getCaptcha()

    // 登录失败之后提示失败
    Toast.fail({
        message:"登录失败 请重新登录",
        duration:2000
    })
};


export default {
    async [GETSELLER]({commit},id){
        console.log(id,"actions")
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
    },
    async [GETCATEGORIES]({commit}){
        const {code,data} = await http.wrap.getCategories()
        if(code === OK)
            commit(GETCATEGORIES,data)
    },
    async [GETSHOPS]({commit}){
        const {code,data} = await http.wrap.getShops()
        if(code === OK)
            commit(GETSHOPS,data)
    },
    async [GETUSER]({commit},{loginWay,name,pwd,captcha,phone,code,getCaptcha}){
        //发送登录的请求 最终去调用一个mutation
        let body = "";
        if(loginWay === "message"){
            //手机号 + 短信
            body =await http.wrap.loginBySms({
                phone,
                code
            })
        }else if(loginWay === "password"){
            //用户名 + 密码 + 验证码
            body = await http.wrap.loginByPwd({
                name,
                pwd,
                captcha
            })
        }

        if(body.code === OK) loginSuccess(commit,body.data,getCaptcha,loginWay)
        if(body.code === ERROR) loginFail(getCaptcha,loginWay)
    },
    async [RESETUSER]({commit}){
        //将仓库中的user 和 token 置空
        await commit(RESETUSER)
        //将locl中的token移除掉
        local.remove("ele-token")
        router.replace("/Profile")
    },
    async [AUTOLOGIN]({commit}){
        //1. 拥有token 而且token没有过期 : 会返回token对应的用户信息 状态200
        /*{
            "code": 0,
            "data": {
                "_id": "5e9a9933c9f2ab44248ad0de",
                "name": "damu"
            }
        }*/
        //2. 拥有token 可是token已经过期 : 会返回"message": "token过期，请重新登录"   状态401
        //3. 没有token 会返回:{"code": 1,"msg": "请先登陆"} 状态200

        // 发送检验token的请求;根据token的状态;我们在app的created钩子中 做出不同的动作
        /*当app开机进入主界面时:
            有token token没有失效 则携带上token发送请求 回填user信息
            没有token 请求进入失败流程 跳转回登录页
            拥有token 可是token已经失效 跳转回登录页*/
        try{
            const body = await http.wrap.autoLogin();
            if(body.code === OK){
                //拥有token 而且token没有过期
                commit(AUTOLOGIN,body.data)
            }else if(body.code === ERROR){
                //没有token
                Toast.fail({
                    message:"请先登录",
                    duration:2000,
                    onClose(){
                        router.replace("/Login")
                    }
                })
            }
        }catch(e){
            //当报401 异常时  try catch 没有捕捉到
            Toast.fail({
                message:"登录信息已经过期,请先登录",
                duration:2000,
                onClose(){
                    router.replace("/Login")
                }
            })
        }
    }
}