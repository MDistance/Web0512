//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

// http://localhost:8080/css/reset.css 这个路径是可以在devsever中访问到确切的静态资源的
// http://localhost:8080/position/40.10038,116.36867 这个路径在devsever中是不存在对应的静态资源的 404请求

module.exports={
    lintOnSave:false,
    //devServer 项目中的静态资源服务器  等同于生产环境中ngix!

    //如果我们向devServer发送一个未知的http请求!!!  而且这个请求在devServer中没有命中任何静态资源
    //devServe会返回index.html  因为这个http请求有可能是前端路由 不是去访问静态资源的
    //devServe返回index.html之后 再去请求打包成功之后的js文件 在那个js文件中根据vue-router的配置
    //来显示对应的界面

    //如果我们向devServer发送一个ajax请求 而且devserver为当前这个ajax请求配置了代理 代理到真正
    // 的api服务器上去的时候  发现这个api服务器没有对应的后台路由 这个时候devServer会认为自己已经
    // 处理成功 只是api服务器没有成功  那devsever 会将index,html返回回去
    devServer:{
       open:true,
       //跨的是单域  项目的接口 在4000服务器上
       // proxy: 'http://localhost:4000'
       //如果说项目的接口来至于不同的服务器 4000服务器  5000服务器  6000服务器


        //没有配代理
        //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
        //2. devServer 中没有对应的静态资源
        //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 ,没有命中了自己的代理
        //4. 因为此处接收到是ajax请求 所以 devServer 会直接报错 (如果不是ajax请求 是http请求 devServer还是会返回index.html的)

        //配了代理之后
        //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
        //2. devServer 中没有对应的静态资源
        //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 命中了自己的代理
        //4. devServer将请求转发给target对应的服务器  到此为止devServer已经成功处理了请求 所以是肯定不报错的
        //5. target接受到请求后 发现/4000/position/40.10038,116.36867 不能命中自己的后台路由 通知deveserver 请求失败了
        //6. devServer 返回 index.html

        // 配完pathRewrite后:
        //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
        //2. devServer 中没有对应的静态资源
        //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 命中了自己的代理
        //4. devServer将请求转发给target对应的服务器 转发时将/4000替换成了"" 到此为止devServer已经成功处理了请求 所以是肯定不报错的
        //5. target接受到请求后 发现/position/40.10038,116.36867 命中自己的后台路由 通知deveserver 请求成功了
        //6. devServer 返回 请求成功的数据

       proxy:{
           '/4000': {
               target: 'http://localhost:4000',
               changeOrigin: true,
               pathRewrite:{
                   "^/4000":""
               }
           }
       }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
            }
        }
    }
}