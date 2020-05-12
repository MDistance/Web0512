//整个配置文件是node来读取的 node默认是不支持es6模块化的
const {seller,goods,ratings} = require("./data.json");
module.exports = {
    outputDir:"damu",
    lintOnSave:false,
    devServer:{
        host: "127.0.0.1",
        port: 4001
        /*
            第一种mock的形式
            before(app){
                //app 本质上就是express核心对象;可以用来定义后台路由
                app.get("/api/seller",(req,res)=>{
                    res.json({
                        code:200,
                        data:seller
                    })
                });
                app.get("/api/goods",(req,res)=>{
                    res.json({
                        code:200,
                        data:goods
                    })
                });
                app.get("/api/ratings",(req,res)=>{
                    res.json({
                        code:200,
                        data:ratings
                    })
                })
            }
         */
    },
    configureWebpack:{
       //原生webpack的配置
      devServer:{
          open: true
      }
    }
}