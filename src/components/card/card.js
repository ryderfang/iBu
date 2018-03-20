// pages/list/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    head: {
      type: String,
      value: "我们的纪念日"
    },
    date: {
      type: String,
      value: '2018-05-07'
    },
    idx: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    formatted_date: '2018年3月15日',
    past_days: 100,
    comming_days: 30
  },

  attached: function () {
    const DAY_MS = 24 * 3600 * 1000
    const dt = new Date(this.properties.date)
    const full_now = new Date()
    const now = new Date(full_now.getFullYear(), full_now.getMonth(), full_now.getDate())

    const past_ms = now.getTime() - dt.getTime()

    const has_passed = (now.getMonth() > dt.getMonth()) || 
      (now.getMonth() == dt.getMonth() && now.getDate() > dt.getDate())
    let comming_dt = new Date(now.getFullYear() + (has_passed ? 1 : 0),       dt.getMonth(), dt.getDate())
    let comming_ms = comming_dt.getTime() - now.getTime()

    this.setData({
      past_days: Math.round(past_ms / DAY_MS),
      comming_days: Math.round(comming_ms / DAY_MS),
      formatted_date: `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _deleteRecord: function(e) {
      const that = this
      wx.showModal({
        title: '提示',
        content: '确定要删了这条麽？',
        confirmColor: '#0984e3',
        success: function (res) {
          if (res.confirm) {
            that.triggerEvent('delete', {'value': that.properties.idx})
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})
