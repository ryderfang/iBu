// components/segment/segment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    init_idx: {
      type: Number,
      value: 1
    },
    titles: {
      type: Array,
      value: ['segment.I', 'segment.II', 'segment.III']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0,
  },

  attached: function (e) {
    this.setData({
      index: this.properties.init_idx
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _btnClicked: function (e) {
      this.setData({
        index: e.currentTarget.id
      })
      this.triggerEvent('clicked', { 'value': e.currentTarget.id })
    }
  }
})
