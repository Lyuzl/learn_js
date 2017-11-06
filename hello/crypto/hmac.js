'use strict';

const crypto = require('crypto');

//Hmac
//只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把Hmac理解为用随机数“增强”的哈希算法。
var hmac = crypto.createHmac('sha256', 'secret-key'); 

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));