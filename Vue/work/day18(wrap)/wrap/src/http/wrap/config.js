import local from "@/util/local";
export default {
  name:"wrap",
  // baseUrl:"http://localhost:4000",
  api:{
      getPosition:{
          url:"/position/40.10038,116.36867",
          method:"get",
          corsUrl:"/4000"
      },
      getCategories:{
          url:"/index_category",
          method:"get",
          corsUrl:"/4000",
          token:()=>{
              return local.get("ele-token")
          }
      },
      getShops:{
          url:"/shops?latitude=40.10038&longitude=116.36867",
          method:"get",
          corsUrl:"/4000",
          token:()=>{
              return local.get("ele-token")
          }
      },
      getCode:{
          url:"/sendcode",
          method:"get",
          corsUrl:"/4000"
      },
      loginByPwd:{
          url:"/login_pwd",
          method:"post",
          corsUrl:"/4000"
      },
      loginBySms:{
          url:"/login_sms",
          method:"post",
          corsUrl:"/4000"
      },
      autoLogin:{
          url:"/auto_login",
          method:"get",
          corsUrl:"/4000",
          token:()=>{
              return local.get("ele-token")
          }
      }
  }
}
