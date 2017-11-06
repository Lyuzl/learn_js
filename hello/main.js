'use strict';

//引入hello模块, 注意模块一定要写相对路径。因为在同一个目录下，所以用.
const hello = require('./hello');

var s = 'Andy';

hello.greet(s);  //Hello, Andy!
hello.hi(s);
hello.goodBye(s);
