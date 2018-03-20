const storage = require('../../utils/storage.js')

// new.js
const years = [...Array(2111).keys()].slice(1900)
const months = [...Array(13).keys()].slice(1)
const days = [...Array(32).keys()].slice(1)
const this_year = (new Date()).getFullYear()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    months: months,
    days: days,

    // textEdit
    text_title: '',
    text_date: '',

    // segment
    show_segment: true,
    segment_desc: '提前1天准备',
    segment_index: 0,
  },

  // Components Events
  _switchValueChanged: function (e) {
    this.setData({
      show_segment: e.detail.value
    })
  },

  _segmentValueChanged: function (e) {
    this.setData({
      segment_index: Number(e.detail.value)
    })
    let desc = '提前1天准备'
    switch (e.detail.value) {
      case '0':
        desc = '提前1天准备'
        break
      case '1':
        desc = '提前1周准备'
        break
      case '2':
        desc = '提前1月准备'
        break
    }
    this.setData({
      segment_desc: desc
    })
  },

  _titleChanged: function (e) {
    this.setData({
      text_title: e.detail.value
    })
  },

  _dateChanged: function (e) {
    this.setData({
      text_date: e.detail.value
    })
  },

  // 保存数据
  onSaved: function (e) {
    if (this.data.text_title == '') {
      wx.showToast({
        title: '请输入标题',
        icon: 'none',
        duration: 800
      })
      return
    }
    if (this.data.text_date == '') {
      wx.showToast({
        title: '请选择日期',
        icon: 'none',
        duration: 800
      })
      return
    }

    storage.addRecord({
      data: {
        title: this.data.text_title,
        date: this.data.text_date
      },
      success: function (res) {
        wx.navigateBack({
          delta: 1
        })
      },
      fail: function (res) {
        console.log(res)
      }
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