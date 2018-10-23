// components/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSearch: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchPlaceholder: '请输入酒店名称/目的地/关键字',
    searchKeyWord: '',
    searchResult: [
      '贵阳花园大酒店', '贵阳花园大酒店', '贵阳花园大酒店'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleFocus(e) {
      let flag = e.currentTarget.dataset.search === "false" ? false : true;
      // this.setData({
      //   isSearch: flag
      // });
      var myEventDetail = { flag: flag} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toggleFocus', myEventDetail, myEventOption)
    },
    // 搜索框输入事件
    bindKeyInput(e) {
      this.setData({
        searchKeyWord: e.detail.value
      })
    },
    // 清除搜索内容
    clearSearch() {
      this.setData({
        searchKeyWord: ''
      })
      console.log(this.data.searchKeyWord)
    }
  }
})
