
Page({
  data: {
    isSearch: false
  },
  toggleFocus(e) {
    console.log(e)
    this.setData({
      isSearch:e.detail.flag
    })
  }
})