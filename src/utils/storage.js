const RECORD_KEYS = 'RECORD_KEYS'

let init = true

const getAllRecords = () => {
  // if (init) {
  //   wx.removeStorageSync(RECORD_KEYS)
  //   init = false
  // }

  let t = wx.getStorageSync(RECORD_KEYS)
  let list = []
  if (t.constructor === Object) {
    list = Object.values(t)
  } else {
    let mock = {
      '0': {
        'id': '0',
        'title': '我们 💝',
        'date': '2017-06-29'
      },
      '1': {
        'id': '1',
        'title': '小睿睿出生啦 😂',
        'date': '1991-06-06'
      },
      '2': {
        'id': '2',
        'title': '小魏魏也出生啦 🤪',
        'date': '1991-06-18'
      }
    }
    wx.setStorageSync(RECORD_KEYS, mock)
    list = Object.values(mock)
  }
  return list
}

const addRecord = (obj) => {
  if (obj.data != undefined) {
    let t = wx.getStorageSync(RECORD_KEYS)
    let maxIdx = 0
    if (t != undefined && t.constructor === Object) {
      maxIdx = Math.max.apply(null, Object.keys(t))
    } else {
      t = Object()
    }

    let d = obj.data
    d.id = maxIdx + 1
    t[String(maxIdx + 1)] = d
    wx.setStorage({
      key: RECORD_KEYS,
      data: t,
      success: obj.success,
      fail: obj.fail
    })
  }
}

const deleteRecord = (idx) => {
  if (idx != undefined) {
    let t = wx.getStorageSync(RECORD_KEYS)
    if (t != undefined && t.constructor === Object) {
      if (t[idx] != undefined) {
        delete t[idx]
      }
    } else {
      t = Object()
    }
    wx.setStorage({
      key: RECORD_KEYS,
      data: t
    })
  }
}

module.exports = {
  getAllRecords: getAllRecords,
  addRecord: addRecord,
  deleteRecord: deleteRecord
}