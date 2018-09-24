const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    unNum: 0,
    isShowHistory: 0,
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    this.setData({
      time: time
    })
    console.log(this.data.dataList)
    var unNum=0
    for (var i in app.globalData.dataList){
      var situ = this.data.dataList[i].situation
      if( situ == 1){
        unNum++
      }
    }
    this.setData({
      unNum:this.data.unNum
    })
  },
  btn: function () {
    var that = this;
    that.setData({
      isShowHistory: (!that.data.isShowHistory)
    })
  }
})
