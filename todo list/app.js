//app.js
App({
  onLaunch: function () {
   let temp={};
  wx.getStorage({
    key: 'key',
    success: function (res) {
      console.log("success");
      console.log(res.data);
      // 异步接口在success回调才能拿到返回值
     temp= res.data;
      //this.num = this.globalData.dataList.num
    },
    fail: function () {
      console.log('读取key发生错误')
    }
    
  })
  this.globalData.dataList = temp;
 // console.log(this.globalData);
 
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
        key: 'key',
        success: function (res) {
        console.log("success")
        console.log(res.data)
        that.globalData.datalist = res.data;

        if (that.globalData.datalist.situation == null) {
          that.globalData.datalist.situation = 1;
        }
      },
      fail: function () {
        console.log('读取key发生错误')
      }
    })
    wx.getStorage({
      key: 'count',
      success: function (res) {
        console.log("success")
        console.log(res.data)
        that.globalData.num = res.data;
        if (that.globalData.num == null) {
          that.globalData.datalist.situation = 0;
        }
      },
    })
  },
  onHide: function () {
    wx.setStorage({
      key: "all",
      data: this.globalData.datalist,
      success: function () {
        console.log('写入value1成功')
      },

      fail: function () {
        console.log('写入value1发生错误')
      }

    })
    wx.setStorage({
      key: 'count',
      data: this.globalData.num,
      success: function () {
        console.log('写入value1成功')
      },

      fail: function () {
        console.log('写入value1发生错误')
      }
    })
  },
  globalData: {
    datalist: {},
    num: 0,
    unNum:0
	
  },

})