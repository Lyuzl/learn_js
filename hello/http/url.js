'use strict';

//解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象：
var url = require('url');

console.log(url.parse('http://lyu@192.168.1.123:8080/user/doc/prop.txt?query=money#love'));
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'lyu',
  host: '192.168.1.123:8080',
  port: '8080',
  hostname: '192.168.1.123',
  hash: '#love',
  search: '?query=money',
  query: 'query=money',
  pathname: '/user/doc/prop.txt',
  path: '/user/doc/prop.txt?query=money',
  href: 'http://lyu@192.168.1.123:8080/user/doc/prop.txt?query=money#love' }
*/

//处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：
var path = require('path');

//解析当前目录
var workDir = path.resolve('.'); //D:\liaoxuefeng_js\hello\http

var filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath);   //D:\liaoxuefeng_js\hello\http\pub\index.html

process.argv.forEach((value, index) => {
  console.log(`${index}:${value}`);
});