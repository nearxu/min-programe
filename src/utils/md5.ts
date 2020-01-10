// import crypto from 'crypto';

// const md5 = (content: string) => {
//   // md5加密password
//   const md5 = crypto.createHash('md5');
//   md5.update(content); // 加密
//   return md5.digest('hex');
// };

// const secret = 'web123key';
// // 加密
// const cipher = (content: string) => {
//   const str = content; // 明文
//   const cipher = crypto.createCipher('aes192', secret); // 定义加密方式，两个参数分别是加密算法、密码
//   cipher.update(str, 'utf8', 'hex'); // 加密，编码方式从utf-8转为hex;
//   const enc = cipher.final('hex'); // 编码方式重转为hex;
//   return enc;
// };

// // 解密
// const decipher = (enc: string) => {
//   const str1 = enc; // 密文
//   const decipher = crypto.createDecipher('aes192', secret);
//   decipher.update(str1, 'hex', 'utf8'); // 编码方式从hex转为utf-8;
//   const dec = decipher.final('utf8'); // 编码方式重转utf-8;
//   return dec;
// };

// export { md5, cipher, decipher };
