//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  // 当组件输入数字6位数时的自定义函数
  valueSix() {
    console.log("1");
    // 模态交互效果
    wx.showToast({
      title: '支付成功',
      icon: 'success',
      duration: 2000
    })
  },

  valueFail() {
    console.log("2");
    // 模态交互效果
    wx.showToast({
      title: '第二个组件',
      icon: 'loading',
      duration: 2000
    })
  },
  onload: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  }

})
