// pages/datePicker/datePicker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendarLists: [],
    checkIn: '',
    checkOut: '',
    today: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _today = new Date();
    // 获取日历数组
    // 6个月日历数组
    let arrs = [];
    for (let i = 1; i < 7; i++) {
      let arr, year, month;
      if (_today.getMonth() + i > 11) {
        year = _today.getFullYear() + 1;
        month = (_today.getMonth() + i) % 11;
      } else {
        year = _today.getFullYear();
        month = _today.getMonth() + i;
      }
      arr = this.showMonthDayList(year, month);
      let obj = {
        year: year,
        month: month,
        list: arr
      }
      arrs.push(obj);
    }
    console.log(arrs)
    this.setData({
      calendarLists: arrs
    })
    // 显示当天
    let _now_day = new Date();
    _now_day.setHours(0);
    _now_day.setMinutes(0);
    _now_day.setSeconds(0);
    _now_day.setMilliseconds(0);
    this.setData({
      today: Date.parse(_now_day)
    });
    // 入住及离店
    let _checkIn = JSON.parse(options.checkIn), _checkOut = JSON.parse(options.checkOut)
    this.setData({
      checkIn: _checkIn,
      checkOut: _checkOut
    })
  },
  // 将时间戳转化为年月日星期
  formatDate(date) {
    return require('../../filter/dateFilter.js').formatDate(date)
  },
  pickDate(e) {
    if (e.currentTarget.dataset.canClick) {
      let timeStamp = e.currentTarget.dataset.stamp
      if (this.data.checkOut.timeStamp) {
        this.setData({
          checkIn: this.formatDate(timeStamp),
          checkOut: this.formatDate('')
        })
      } else if (this.data.checkIn.timeStamp != timeStamp) {
        if (this.data.checkIn.timeStamp > timeStamp) {
          this.setData({
            checkIn: this.formatDate(timeStamp),
            checkOut: this.formatDate('')
          })
        } else {
          this.setData({
            checkOut: this.formatDate(timeStamp)
          })
        }
      }
    }
  },
  sureDate() {
    var app = getApp()
    app.globalData.checkIn = this.data.checkIn;
    app.globalData.checkOut = this.data.checkOut;
    wx.navigateBack();
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

  },
  /**
   * @params year {Number} 年份
   * @params month {Number} 月份
   */
  showMonthDayList(year, month) {
    //当前是哪一年
    // let year = date.getFullYear();
    // let month = date.getMonth();

    //当前月的第一天的日期
    let firstDay = new Date(year, month - 1, 1);
    //第一天是星期几
    let weekday = firstDay.getDay();

    //求当前月一共有多少天
    //new Date(year,month+1,0) ： month+1是下一个月，day为0代表的是上一个月的最后一天，即我们所需的当前月的最后一天。
    //getDate（）则返回这个日期对象是一个月中的第几天，我们由最后一天得知这个月一共有多少天
    let days;
    if (month > 12)
      days = new Date(year + 1, 1, 0).getDate();
    else
      days = new Date(year, month, 0).getDate();

    let res = [[], [], [], [], [], []];
    //输出第一天之前的空格
    if (weekday != 7) {
      for (let i = 0; i < weekday; i++) {
        let obj = { day: '', date: '', timeStamp: '' };
        res[0].push(obj);
      }
    }

    for (let j = 1, m = 0; j <= days; j++) {
      let obj = { day: (weekday == 0 || weekday == 6), date: j, timeStamp: new Date(year, month - 1, j).getTime() };
      res[m].push(obj);
      weekday++;

      //如果是周日则换行
      if (weekday % 7 == 0) {
        weekday = 0;
        m++;

      }
    }
    return res;
  }
})