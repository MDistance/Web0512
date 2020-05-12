
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 75,
      exclude: /node_modules|folder_name/i,   // 忽略node_modules目录下的文件
      selectorBlackList:['van']
    }
  },
}
