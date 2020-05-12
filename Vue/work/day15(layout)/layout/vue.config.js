//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
    lintOnSave:false,
    devServer:{
       open:true
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