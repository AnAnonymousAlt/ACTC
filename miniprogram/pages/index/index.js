//index.js
const app = getApp()

Page({
  data: {
    cdlist: ""
  },

  onLoad: function() {
    let retrived =[]
    wx.cloud.callFunction({
      name: 'getcdlist',
      data: {
      },
      success: function(res) {
        retrived.concat(res.result.data)
        
        console.log(res.result.data)
      },
      fail: console.error
    })
    this.setData({
      cdlist: retrived
    })
    console.log(retrived)
  },

})
