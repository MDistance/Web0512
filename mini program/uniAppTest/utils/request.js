import config from './config'
export default (url,data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		// 执行异步任务
		wx.request({
			url:config.host+url,
			data,
			method,
			header:{
				// 设置cookie  cookie必须是字符串,同时还要解析里边的数组
				cookie:JSON.parse(wx.getStorageSync('cookies') || "[]").toString()
			},success:(res)=>{
				// 将登录后获取的cookies存储到本地,便于之后发请求的时候获取到
				// 判断url
				// console.log(url)
				// 判断参数字段:islogin登录成功
				if(data.isLogin){
					wx.getStorage({
						key:'cookies',
						data:JSON.stringify(res.cookies)
					})
				}
				
				// 修改promise对象的状态为成功状态,同时将数据返回
				resolve(res.data)
			},
			fail:(error)=>{
				// console.log(error)
				reject(error)
			}
		})
	})
}
