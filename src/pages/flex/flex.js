import md5 from 'md5';

Page({
  ready() {
    const url = 'www.baidu.com';
    const psw = md5(url);
    console.log(psw);
  },
});
