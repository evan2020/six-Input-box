// component.js
Component({

  // 组件属性
  properties: {

    //输入框密码位数
    value_length: {
      type: Number,
      value: 0,
      // 监听输入框密码变化
      observer: function (newVal, oldVal) {
        let that = this;
        // 当输入框的值等于6时（发起支付等...）
        if (newVal == 6) {

          // 设定延时事件处理
          setTimeout(function () {
            // 引用组件页面的自定义函数
            that.triggerEvent('valueSix', {}, {})
            // 回到初始样式
            that.setData({
              get_focus: false,
              value_length: 0,
              input_value: ""
            });
          }, 500)

        }
      }
    },
    //输入框聚焦状态
    get_focus: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {

      }
    },
    //输入框初始内容
    input_value: {
      type: String,
      value: "",
      observer: function (newVal, oldVal) {

      }
    },
    //输入框聚焦样式 
    focus_class: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {

      }
    },
    //输入框格子数
    value_num: {
      type: Array,
      value: [1, 2, 3, 4, 5, 6],
      observer: function (newVal, oldVal) {

      }
    },
    //输入框高度
    height: {
      type: String,
      value: "50px",
      observer: function (newVal, oldVal) {

      }
    },
    //输入框宽度
    width: {
      type: String,
      value: "80%",
      observer: function (newVal, oldVal) {

      }
    },
  },

  // 初始化数据
  data: {
    see: true,//是否明文展示
  },

  // 组件方法
  methods: {

    // 获得焦点时
    get_focus() {
      let that = this;
      that.setData({
        focus_class: true
      })
    },

    // 失去焦点时
    blur() {
      let that = this;
      that.setData({
        focus_class: false
      })
    },

    // 点击聚焦
    set_focus() {
      let that = this;
      that.setData({
        get_focus: true
      })
    },

    // 获取输入框的值
    get_value(data) {
      let that = this;
      // 设置空数组用于明文展现
      let val_arr = [];
      // 获取当前输入框的值
      let now_val = data.detail.value
      // 遍历把每个数字加入数组
      for (let i = 0; i < 6; i++) {
        val_arr.push(now_val.substr(i, 1))
      }
      // 获取输入框值的长度
      let value_length = data.detail.value.length;
      // 更新数据
      that.setData({
        value_length: value_length,
        val_arr: val_arr
      });

    },
  }
})
