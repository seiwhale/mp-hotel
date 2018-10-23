// pages/filterMore/filterMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    min: 0,
    max: 1000,
    minPrice: 0,
    maxPrice: 1000,
    defaultColor: '#e9e9e9',
    transparent: 'transparent',
    activeColor: '#ff7a00',
    minTouchImg: '../../images/icon/btn_slider.png',
    maxTouchImg: '../../images/icon/btn_slider.png',
    showMinPrice: false,
    showMaxPrice: false,
    minLeft: '0%',
    maxLeft: '90%'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log(this.data.max)
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
  movechange(e) {
    let id = e.currentTarget.dataset.id;
    if (id == 'min')
      this.setData({
        minPrice: e.detail.value,
        minLeft: e.detail.value / this.data.max * 100 - e.detail.value / this.data.max * 10 + '%'
      })
    else
      this.setData({
        maxPrice: e.detail.value,
        maxLeft: e.detail.value / this.data.max * 100 - e.detail.value / this.data.max*10+ '%'
      })
  },
  touchMove(e) {
    if (e.type == 'touchstart') {
      if (e.currentTarget.dataset.id == 'min')
        this.setData({
          minTouchImg: '../../images/icon/btn_slider_c.png',
          showMinPrice: true
        })
      else
        this.setData({
          maxTouchImg: '../../images/icon/btn_slider_c.png',
          showMaxPrice: true
        })

    } else {
      if (e.currentTarget.dataset.id == 'min')
        this.setData({
          minTouchImg: '../../images/icon/btn_slider.png',
          showMinPrice: false
        })
      else
        this.setData({
          maxTouchImg: '../../images/icon/btn_slider.png',
          showMaxPrice: false
        })
    }
  }
})