### 在vue的脚手架中 引入样式的形式
  1. 通过静态资源进行引入 (所有的静态资源只能放在static目录下)
      最终样式的代码 不会打到app.js中
      如果是以css结尾的公共样式 建议使用当前模式
  2. 通过webpack进行import
      最终import的文件也会出现在静态资源中
      如果是以.less结尾 .style .scss .sass结尾的 建议使用当前模式
  3. 通过style标签引入
      最终样式代码是植入到js中的 打进app.js
