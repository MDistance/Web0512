// pages/video/video.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 导航列表
    navId: 0,
    videoList: [],
    isActivePraised: [], // 标识点赞是否点击
    isActiveComment: [], // 标识评论是否点击
    isTrigger: false,//表示下拉是否被触发默认为false
    vid: null, // 标识视频的id地址
 
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

    // 验证用户是否登录
    let userInfo=wx.getStorageSync('userInfo');
    if(!userInfo){
      wx.showLoading({
        title: '请先登录',
        icon: 'loading',
        success: () => {
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }
      })
      // return
    }

    // 获取视频导航标签列表数据
    let videoGroupListData = await request('/video/group/list');
    console.log(videoGroupListData);
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    wx.showLoading({
      title: '正在加载中',
    })
    // 获取对应标签下的视频列表数据
    this.getVideoListData()

  },


    // 获取对应标签下的视频列表数据
   
  async getVideoListData(){

    this.setData({
      videoList:[]      
    })
    let videoListData = await request('/video/group', { id: this.data.navId },'GET');
    console.log(videoListData);
    wx.hideLoading()
    this.setData({
      videoList: videoListData.datas
    })
  },
  // 拍摄视频或者打开本地相册
  chooseVideo(){
    wx.chooseVideo({
      maxDuration:40
    })
  },
// 修改导航ID

  changeNavId(event) {
    wx.showLoading({
      title: '正在加载中',
    })
    // console.log(event.currentTarget.dataset.navid);
    console.log(event)
    this.setData({
      navId: event.currentTarget.dataset.id,
      isActivePraised: [], // 标识点赞是否点击
      isActiveComment: [],
    })
    this.getVideoListData();
  },

  // 修改点赞图标 评论图标
  handleChangePraised(event) {
    // 根据传入标识动态修改 状态数据
    let { index, id } = event.currentTarget.dataset;
    if (id === 'isActivePraised') {
      let isActivePraised = this.data.isActivePraised
      isActivePraised[index] = !(isActivePraised[index] || false)
      this.setData({
        isActivePraised
      })
    } else {
      // 根据传入标识动态修改 状态数据
      let { index } = event.currentTarget.dataset;
      let isActiveComment = this.data.isActiveComment
      isActiveComment[index] = !(isActiveComment[index] || false)
      this.setData({
        isActiveComment
      })
    }

  },
// 下拉刷新
// async handleRefresherPull(data){
//   console.log('下拉刷新')
//   let videoListData=await request(`video/group`,{id:this.data.navId},'GET')
//   console.log(videoListData.datas)
//   this.setData({
//     videoList:videoListData.datas,
//     isTrigger:false
//   })

// },
  // 下拉刷新
  handleRefresher() {
    console.log('下拉了。。。');
    this.getVideoList(this.data.navId);

    // 关闭下拉刷新的状态
    this.setData({
      isTriggered: false
    })
  },
handleRefresherRestore(){
  console.log('复位')
},
 
// 处理多个视频播放的问题


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
    // 自定义分享内容
    return {
      title: '硅谷音乐',
      path: '/pages/video/video',
      imageUrl: this.data.videoList[event.target.dataset.index].data.coverUrl
    }
  }
})
