// pages/login/login.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleBlur(event){
    console.log('失去焦点');
    console.log(event.detail.value);
    console.log(event);
    let type=event.currentTarget.dataset.id;
    this.setData({
      [type]:event.detail.value
    })
  },
  //登录
  async handleLogin(){
  
    let {phone, password}=this.data;
   
    if (!phone || !password){
      console.log('用户名/密码错误');
      wx.showToast({
        title: '手机号/密码错误',
        mask: true

      })
      // setTimeout(()=>{
      //   wx.hideLoading();
      // },2000)
      return
    }
     // 3. 发送请求进行后端验证
  
    let loginData = await request(`/login/cellphone`, { phone, password,isLogin:true })
    console.log(loginData)
    if (loginData.code === 200) {
      // wx.setStorage({
      //   key: 'loginAccessCookies',
      //   data: JSON.stringify(loginAccessData.cookies),
      // })
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      })
      // 1. 将用户登录成功的数据缓存至本地
      wx.setStorage({
        key: 'userInfo',
        data: JSON.stringify(loginData)
      })

      // 2. 跳转至个人中心页
      wx.switchTab({
        url: '/pages/personal/personal'
      })



    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'loading'
      })
    }
    console.log(loginData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})