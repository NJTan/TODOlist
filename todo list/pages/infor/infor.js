// pages/infor/infor.js
var app=getApp();
Page({
  data: {
    options:'',
    dataList:{},
    paramkeyname: "",
    name: "",
    infor: "",
    label: "",
    situation:1,
    showbtn: true,
    index:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.data.paramkeyname = options.keyname;
    that.data.dataList=app.globalData.dataList;
      console.log(options.keyname);
    console.log(that.data.options);
    that.setData({
      name:that.data.dataList[this.data.paramkeyname].name,
      infor:that.data.dataList[this.data.paramkeyname].infor,
      label:that.data.dataList[this.data.paramkeyname].label,
      situation:that.data.dataList[this.data.paramkeyname].situation,
    })
    if(that.data.situation==0){
       this.setData({
        
       })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  
  finish: function (e) {
    var that = this;
    that.data.dataList[this.data.paramkeyname].situation = 0;
    app.globalData.dataList=that.data.dataList;
    wx.redirectTo({
      url: '../index/index',
    })
    showbtn:false;
  },
  delete: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          delete that.data.dataList[that.data.paramkeyname];
          app.globalData.dataList=that.data.dataList;
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            });
          }, 1000)
          console.log(getApp().globalData.datalist)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
    
  }
})