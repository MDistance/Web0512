//引入express
const express = require('express')
//实例一个app服务对象
const app = express()
//使用中间件解析post请求请求体中以urlencoded编码形式的参数
app.use(express.urlencoded({extended:true}))
//使用中间件解析post请求请求体中以json编码形式的参数
app.use(express.json())
//暴露静态资源，目的是不产跨域问题
app.use(express.static(__dirname+'/public'))

//配置路由
app.get('/test_get',(request,response)=>{
  console.log('请求携带的参数是：',request.query)
  setTimeout(()=>{
    let persons = [{name:'kobe',age:18},{name:'wade',age:19}]
    response.send(persons)
  },2000)
})

//配置路由
app.post('/test_post',(request,response)=>{
  console.log('请求携带的参数是：',request.body)
  response.send('你发过来的是post请求，我是服务器返回的一些数据')
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if(!err) {
    console.log('小兄弟，不要通过编译器打开html页面，会有跨域问题！！！用下面的地址：')
    console.log('练习原生js发送ajax_get请求的页面地址为：http://localhost:3000/ajax_get.html')
    console.log('练习原生js发送ajax_post请求的页面地址为：http://localhost:3000/ajax_post.html')
    console.log('练习xhr的abort方法是页面地址为：http://localhost:3000/ajax_abort.html')
  }
  else console.log(err)
})