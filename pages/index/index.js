//index.js
//获取应用实例
const app = getApp()

const years = []
for(let i=0 ; i<=7 ; i++){
  years.push(2012+i,)
}





Page({
  data: {
    inputValue:'信息显示',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    genders: ['男', '女'],
    gender:'男',
    years:years,
    year:2019,
    colleges:[
      '建筑学院',
      '医学院',
      '计算机科学与工程学院'
    ],
    college:'建筑学院'

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  showInfo(e){
    console.log(this.data.gender)
    console.log(this.data.year)
    console.log(this.data.college)
  },

  //选择性别
  bindPickerChangeGender: function(e) {
    this.setData({
      gender:this.data.genders[e.detail.value]
    })
  },
  //选择年份
  bindPickerChangeYear:function(e){
    this.setData({
      year:this.data.years[e.detail.value]
    })
  },
  //选择学院
  bindPickerChangeCollege:function(e){
    this.setData({
      college:this.data.colleges[e.detail.value]
    })
  }

})
