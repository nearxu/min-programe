import md5 from 'md5';

Page({
  ready() {
    const url = 'www.baidu.com';
    const psw = md5(url);
    this.setData({ md5value: psw });
  },
  data: {
    istrue: true,
    md5value: '',
  },
  tapname() {
    const { istrue } = this.data;
    this.setData({ istrue: !istrue });
  },
  triggerParent(e) {
    console.log(e, 'e');
    wx.showToast({ title: e.detail.value });
  },
});
