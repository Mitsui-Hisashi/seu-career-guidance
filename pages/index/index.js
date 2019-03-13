//index.js
//获取应用实例
const app = getApp()

const years = []
for(let i=0 ; i<=6 ; i++){
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
      '机械工程学院',
      '能源与环境学院',
      '信息科学与工程学院',
      '电子科学与工程学院',
      '数学学院',
      '自动化学院',
      '物理学院',
      '生物科学与医学工程学院',
      '材料科学与工程学院',
      '经济管理学院',
      '电气工程学院',
      '外国语学院',
      '化学化工学院',
      '交通学院',
      '仪器科学与工程学院',
      '法学院',
      '医学院',
      '公共卫生学院',
      '海外教育学院',
      '软件学院',
      '微电子学院',
      '马克思主义学院',
      '网络空间安全学院',
      '人工智能学院',
      '东南大学雷恩研究生学院',
      '东南大学—蒙纳士大学苏州联合研究生院'
    ],
    college:'建筑学院',
    otherInfo:[],
    defaultSize:'80rpx',

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
    this.data.otherInfo=this.data.inputValue.trim().split(/\s+/)
  },
  showInfo(e){
    console.log(this.data.otherInfo)
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
