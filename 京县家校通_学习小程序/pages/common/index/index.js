//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  clickParentsCenter: function(){

    //修改全局变量
    console.log("11111111")
    getApp().globalData.userRole = "1"
    console.log(getApp().globalData.userRole)
  },
  clickTeacherCenter: function () {

    //修改全局变量
    // app.globalData.userRole = "1",
    console.log("222222222")
    getApp().globalData.userRole = "2"
    console.log(getApp().globalData.userRole)
  },
  clickAdminCenter: function () {

    //修改全局变量
    // app.globalData.userRole = "1",
    console.log("333333333")
    getApp().globalData.userRole = "3"
    console.log(getApp().globalData.userRole)
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
