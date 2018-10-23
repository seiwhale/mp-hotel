//app.js
App({
  // o
  onLaunch() {
    let _this = this;
    let _now_day = new Date();
    _now_day.setHours(0);
    _now_day.setMinutes(0);
    _now_day.setSeconds(0);
    _now_day.setMilliseconds(0);
    let _today = 'globalData.today'
    this.globalData.today = Date.parse(_now_day);
    // 入住及离店
    let _checkOut = new Date();
    _checkOut.setHours(0);
    _checkOut.setMinutes(0);
    _checkOut.setSeconds(0);
    _checkOut.setMilliseconds(0);
    _checkOut.setDate(_checkOut.getDate() + 1)
    this.globalData.checkIn = this.formatDate(Date.parse(_now_day));
    this.globalData.checkOut = this.formatDate(Date.parse(_checkOut));
    // 登录
    wx.login({
      success: function (res) {
        console.log(res)
        // _this.getAuthorize()
        _this.getUserInfo()
      }
    })
  },
  globalData: {
    today: '',
    checkIn: '',
    checkOut: '',
    userInfo: ''
  },
  // 将时间戳转化为年月日星期
  formatDate(date) {
    return require('./filter/dateFilter.js').formatDate(date)
  },
  // 获取个人信息
  getUserInfo(){
    let _this  = this;
    wx.getUserInfo({
      success: function (res) {
        _this.globalData.userInfo = res.userInfo;
        console.log(_this.globalData.userInfo)
      },
      fail: function (res){
        // 未授权获取用户失败
        console.log(res)
      }
    })
  }
})