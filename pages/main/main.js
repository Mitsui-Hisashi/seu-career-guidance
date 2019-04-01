var base64 = require("../../images/base64");
// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    college: ['不限','计算机科学与工程学院、软件学院、人工智能学院', '中国', '巴西', '日本'],
    collegeDisp:'不限',
    collegeIndex: 0,

    gander: ['不限','男', '女'],
    ganderDisp:'不限',
    ganderIndex: 0,

    year: ['不限','2017', '2016','2015','2014'],
    yearDisp:'不限',
    yearIndex: 0,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  bindPickerCollege: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      collegeIndex: e.detail.value,
      collegeDisp: this.data.college[e.detail.value].slice(0, 12) + (this.data.college[e.detail.value].length>12? '...' :'')
    })
  },
  bindPickerGander: function(e){
    this.setData({
      ganderIndex:e.detail.value,
      ganderDisp: this.data.gander[e.detail.value]
    })
  },

  bindPickerYear: function(e){
    this.setData({
      yearIndex:e.detail.value,
      yearDisp:this.data.year[e.detail.value]
    })
  }

})