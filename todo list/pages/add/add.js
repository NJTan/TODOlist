// pages/detail/detail.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    infor: null,
    array: ['', '生活', '工作', '学习', '其他'],
    index: 0,
    situation: 0,
    label: null,
    num: 0,
    dataList: {},
    temp:null,
    keyname:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.dataList = app.globalData.dataList;//对局部变量初始化为全局变量
    this.data.num = app.globalData.num;
    console.log(this.data.num);
    console.log(this.data.dataList);
  },

  getName(event) {
    this.setData({
      name: event.detail
    })
  },

  getInfor(event) {
    this.setData({
      infor: event.detail
    })
  },

  bindPickerChange: function (event) {
    let array = this.data.array;
    this.setData({
      label: array[event.detail.value]
    })
  },

  addTask() {
    if (this.data.name){
      wx.showLoading({
        title: '创建中'
      });
      //console.log("success");
      //把数据存为对象
      var temp ={
        "name": this.data.name,
        "infor": this.data.infor,
        "label": this.data.array[this.data.index],
        "situation": 1,
        "keyname":'task'+this.data.num,
      }
      var keyname=temp.keyname;
      //记录下标
      var index=keyname
      console.log(temp);
      // console.log(temp.keyname);
      // this.dataList=app.globalData.dataList;
      // console.log(this.dataList);
      //增加任务
      this.data.dataList[index] = temp;
      // console.log(app.globalData.dataList[index]);
      //num自增
      this.data.num++;
      //全局的datalist同步局部的dataList
      app.globalData.dataList = this.data.dataList;
      app.globalData.num = this.data.num;
      // console.log(app.globalData.dataList);
      /* this.setData({
         taskname:null,
         taskdetail:null,
         index:0
       })*/
      wx.hideLoading();
      wx.showToast({
        title: '创建成功',
      })
      wx.navigateBack({
        delta: 1
      })
    }
    else{//判断是否任务名为空
      wx.showModal({
        title: '',
        content: '任务名不能为空哦！',
        confirmText: "确定",
        cancelText: "取消",

      });
    }
    
    

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})