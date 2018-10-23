// components/cityPicker/cityPicker.js
var cityFilter = require('../../filter/cityClassify.js');
var cityList = require('../../json/cityList.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    cityLists: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached() {
    this.setData({
      cityLists: cityFilter(cityList)
    })
  }
})
