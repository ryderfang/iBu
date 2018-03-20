const storage = require('../../utils/storage.js')

// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: []
  },


  /**
   * 添加项目
   */
  _addRecord: function () {
    wx.navigateTo({
      url: '../new/new',
    })
  },

  /**
   * 删除项目
   */
  _onCardDelete: function (e) {
    storage.deleteRecord(e.detail.value)
    let r = storage.getAllRecords()
    this.setData({
      records: r
    })
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
    let r = storage.getAllRecords()
    this.setData({
      records: r
    })
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
  
  }
})