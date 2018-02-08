//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  // 当组件输入数字6位数时的自定义函数
  valueSix(){
    console.log("1");
    // 模态交互效果
    wx.showToast({
      title: '第一个组件',
      icon: 'success',
      duration: 2000
    })
  },

  valueFail(){
    console.log("2");
    // 模态交互效果
    wx.showToast({
      title: '第二个组件',
      icon: 'loading',
      duration: 2000
    })
  },

})
