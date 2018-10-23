//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    imgMode: 'aspectFit',
    keyWordDisabled: true,
    priceStarDisabled: true,
    today:'',
    searchCondition:{
      address:'贵阳',
      checkIn:'',
      checkOut:'',
    },
    swiperImgs: [
      {
        imgUrl: '/images/index/ad_pic1.png',
        toUrl: ''
      },
      {
        imgUrl: '/images/index/ad_pic1.png',
        toUrl: ''
      }
    ],
    funcEntrances: [
      {
        icon: '/images/icon/icon_rights.png',
        text: '会员权益'
      },
      {
        icon: '/images/icon/icon_clock.png',
        text: '十元抢房'
      },
      {
        icon: '/images/icon/icon_hour.png',
        text: '钟点房'
      }
    ],
    hotelList: [
      {
        hotelName: '汉唐大酒店（贵阳中天会展城店）',
        hotelPic: '/images/index/hotel_pic.png',
        hotelScore: '4.7',
        hotelStar: '3',
        hotelAddr: '贵阳观山湖区长岭北路6号（大唐东原财富广场6号楼）',
        hotelDistance: '18.0',
        hotelPrice: '699.0',
        hotelFeatures: [
          '含早餐', '特色2', '特色3'
        ]
      },
      {
        hotelName: '汉唐大酒店（贵阳中天会展城店）',
        hotelPic: '/images/index/hotel_pic.png',
        hotelScore: '4.7',
        hotelStar: '3',
        hotelAddr: '贵阳观山湖区长岭北路6号（大唐东原财富广场6号楼）',
        hotelDistance: '18.0',
        hotelPrice: '699.0',
        hotelFeatures: [
          '含早餐', '特色2', '特色3'
        ]
      },
      {
        hotelName: '汉唐大酒店（贵阳中天会展城店）',
        hotelPic: '/images/index/hotel_pic.png',
        hotelScore: '4.7',
        hotelStar: '3',
        hotelAddr: '贵阳观山湖区长岭北路6号（大唐东原财富广场6号楼）',
        hotelDistance: '18.0',
        hotelPrice: '699.0',
        hotelFeatures: [
          '含早餐', '特色2', '特色3'
        ]
      }
    ]
  },
  onLoad: function (options) {
  },
  /**
   * 页面显示
   */
  onShow() {
    var app = getApp()
    console.log(app.globalData);
    let checkIn = 'searchCondition.checkIn', checkOut = 'searchCondition.checkOut';
    this.setData({
      [checkIn]: app.globalData.checkIn,
      [checkOut]: app.globalData.checkOut
    })
  },
  pickCity(){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  pickDate(){
    wx.navigateTo({
      url: '../datePicker/datePicker?checkIn=' + JSON.stringify(this.data.searchCondition.checkIn) + '&checkOut=' + JSON.stringify(this.data.searchCondition.checkOut),
    })
  },
})
