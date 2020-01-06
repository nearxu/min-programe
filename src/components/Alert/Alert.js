Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  //禁用样式隔离
  options: {
    styleIsolation: 'apply-shared',
  },
  /**
   * 组件的初始数据
   */
  data: {
    showAnimateOut: false, //显示隐藏动画
  },
  attached() {
    this.setData(this.getInitData());
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //参数初始化
    getInitData() {
      return {
        animateOutStyle: 2, //，消失动画：1 fadeout；2 scaleFadeOut 默认2、可重写animateOut样式
        removeBg: false, //是否移除背景色
        extendClass: null, //扩展样式
        backgroundUrl: '', //背景图
        title: '', //标题
        confirmType: 'default',
        currentParams: {}, //显示弹框需要带的参数
        titleIcon: '', //标题下的Icon
        showIt: false, //是否显示
        content: '', //显示内容，hasChild时失效
        hasChild: false, //是否显示子组件,
        onConfirm: null, //确认回调函数
        onCancel: null, //失败回调函数
        confirmText: '确定', //确定按钮文本
        closeType: 3, //关闭按钮的样式：默认1，0不显示；1右上角关闭按钮；2：底部关闭按钮；3：全部显示
        autoClose: 0, //多少毫秒后关闭，默认0，不自动关闭
      };
    },
    //获取参数
    getParmas() {
      return this.data.currentParams;
    },
    //格式化对象
    formatOb(ob) {
      //每次展示重置未设置的参数，避免不必要的bug
      return {
        ...this.getInitData(),
        ...ob,
      };
    },
    //展示初始化
    show(ob) {
      if (!ob) {
        this.setData({
          showIt: true,
        });
        return;
      }
      const temp = this.formatOb(ob);
      this.setData(temp, () => {
        this.setData({
          showIt: true,
        });
        if (this.data.autoClose > 0) {
          this.timeoutTemp = setTimeout(() => {
            this.hide && this.hide();
            clearTimeout(this.timeoutTemp);
          }, this.data.autoClose);
        }
      });
    },
    //隐藏处理
    hide(e) {
      const doCancel = e ? e.currentTarget.dataset.hide : null;
      if (this.timeoutTemp) clearTimeout(this.timeoutTemp);
      if (this.data.showIt) {
        this.setData(
          {
            showAnimateOut: true,
          },
          () => {
            const tempId = setTimeout(() => {
              this.setData({ showIt: false, showAnimateOut: false });
              clearTimeout(tempId);
            }, 300);
          },
        );
      }
      //doCancel判断是否是点击触发的
      if (this.data.onCancel && doCancel)
        this.data.onCancel(this.data.currentParams);
    },
    //确认按钮处理
    handle() {
      if (this.data.onConfirm) this.data.onConfirm(this.data.currentParams);
      else this.hide();
    },
  },
});
