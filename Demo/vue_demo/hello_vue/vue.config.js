const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   // remUnit的值 === 设计稿 / 10   设计稿宽750px
})
module.exports = {
  lintOnSave: false, // 关闭EsLint语法检查
	productionSourceMap: false // 生产环境不生成map文件
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         postcss
  //       ]
  //     }
  //   }
  // }
}
