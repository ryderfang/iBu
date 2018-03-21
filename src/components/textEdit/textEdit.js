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
    },
    text: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    date: '',
    formatted_date: ''
  },

  /**
   * 组成布局完成事件
   * 不要用 attached，否则获取不到正确的 properties
   */
  ready: function () {
    if (this.properties.isPicker === 'false') {
      this.setData({
        title: this.properties.text || ''
      })
    } else {
      this.setData({
        date: this.properties.text || '',
        formatted_date: this._formatted(this.properties.text)
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _formatted: function(d) {
      if (!d) {
        return ''
      }
      const dt = new Date(d)
      return `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`
    },
    /**
     * 日期选择器
     */
    _bindDateChange: function (e) {
      this.setData({
        date: e.detail.value,
        formatted_date: this._formatted(e.detail.value)
      })

      this.triggerEvent('date', {'value': e.detail.value})
    },

    _bindKeyInput: function (e) {
      const v = e.detail.value
      this.setData({
        title: v
      })
      this.triggerEvent('title', {'value': v})
    }
  }
})
