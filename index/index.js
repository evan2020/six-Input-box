//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 输入框参数设置
    inputData: {
      input_value: "",//输入框的初始内容
      value_length: 0,//输入框密码位数
      isNext: false,//是否有下一步的按钮
      get_focus: true,//输入框的聚焦状态
      focus_class: true,//输入框聚焦样式
      value_num: [1, 2, 3, 4, 5, 6],//输入框格子数
      height: "98rpx",//输入框高度
      width: "604rpx",//输入框宽度
      see: false,//是否明文展示
      interval: true,//是否显示间隔格子
    }
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
