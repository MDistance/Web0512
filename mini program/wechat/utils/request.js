import config from './config'
export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        // 'content-type': 'application/x-www-form-urlencoded',
        // 'cookie': (JSON.parse(wx.getStorageSync("loginAccessCookies") || "[]"))
        // 注意： cookie后跟的必须是字符串，不使用模板字符串无法读取loginAccessCookies中的数据
        cookie: `${(JSON.parse(wx.getStorageSync("loginAccessCookies") || "[]"))}`
        // cookie: JSON.parse(wx.getStorageSync('cookies')).toString()
      },
      success: (res) => {
      
        console.log(res);
        // 将登陆后获取的cookies存储到本地，便于之后发请求的时候获取到
        // 判断url
        console.log(url);
        // 判断参数字段： isLogin 登陆成功
        if (data.isLogin) {
          wx.setStorage({
            key: 'loginAccessCookies',
            data: JSON.stringify(res.cookies)
          })
        }
        resolve(res.data);
      },
      fail: (error) => {
        reject(error)
      }
    });
  });
}
