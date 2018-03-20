// pages/new/switcher.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '周年提醒'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _switchChanged: function (e) {
      this.triggerEvent('changed', {'value': e.detail.value})
    }
  }
})
