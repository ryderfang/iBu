// pages/new/textEdit.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    isPicker: {
      type: String,
      value: 'true'
    }
  },

  attached: function () {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '',
    formatted_date: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 日期选择器
     */
    _bindDateChange: function (e) {
      const dt = new Date(e.detail.value)
      this.setData({
        date: e.detail.value,
        formatted_date: `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`
      })

      this.triggerEvent('date', {'value': e.detail.value})
    },

    _bindKeyInput: function (e) {
      const v = e.detail.value
      this.triggerEvent('title', {'value': v})
    }
  }
})
