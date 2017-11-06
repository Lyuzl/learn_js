'use strict';

const crypto = require('crypto');

//AES
//AES是一种常用的对称加密算法，加解密都用同一个秘钥。crypto模块提供了AES支持
//但是需要自己封装函数，以便调用。
function aesEncrypt(data, key){
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex'); //data[, inputEncoding][, outputEncoding]
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key){
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8'); //data[, inputEncoding][, outputEncoding]
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is my friend, LYU';
var key = 'someone';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);