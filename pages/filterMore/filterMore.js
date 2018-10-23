// pages/filterMore/filterMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minPrice: 0,
    maxPrice: 1000,
    totalPrice: 1000,
    min: 0,
    max: 400,
    minTouchImg: '../../images/icon/btn_slider.png',
    maxTouchImg: '../../images/icon/btn_slider.png',
    showMinPrice: false,
    showMaxPrice: false
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
    console.log(e)
    let id = e.currentTarget.dataset.id;
    if (id == 'min') {
      let num = Math.floor(e.detail.x / this.data.max * this.data.totalPrice);
      this.setData({
        minPrice: num
      })
    } else {
      this.setData({
        maxPrice: Math.floor(e.detail.x / this.data.max * this.data.totalPrice)
      })
    }
  },
  touchMove(e) {
    console.log(e)
    if (e.type == 'touchstart') {
      if (e.currentTarget.dataset.img == 'min')
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
      if (e.currentTarget.dataset.img == 'min')
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