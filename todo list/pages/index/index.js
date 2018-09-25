const app = getApp();
var keyname = null;
var util = require('../../utils/util.js');
Page({
  data: {
    ShowView: false,
    dataList:{},
    keyname:null,
  },
  onLoad: function (option) {
    
    var time = util.formatTime(new Date());
    this.data.dataList = app.globalData.dataList; 
    this.setData({
      time: time
    })
  },
  onShow:function(){
    var unNum = 0;
    var keyname=[]; 
    for (var i in app.globalData.dataList) {
      var si = app.globalData.dataList[i].situation;
      if (si) {
        unNum++;

      }
    }
    this.data.dataList=app.globalData.dataList;
    var keyname=this.data.dataList.keyname;
    this.setData({
      unNum:unNum,
      dataList:this.data.dataList,
      keyname:this.data.keyname,
    })
    console.log(app.globalData.dataList)
    console.log(this.data.dataList);
    console.log(this.data.keyname);
  },
  onHide: function () {
    wx.setStorage({
      key: 'key',
      data: getApp().globalData.datalist,
      success: function (res) {
        console.log(getApp().globalData.datalist)
      }
    })
  },
  btn: function () {
    var that = this;
    that.setData({
      ShowView:(!that.data.ShowView)
    })
  }
})
