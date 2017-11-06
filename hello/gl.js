'use strict';

// current JavaScript file:
console.log('current js file:' + __filename);

// current JavaScript file dir:
console.log('current js dir:' + __dirname);

process.name = 'Sample Nodejs';

console.log('arguments:' + JSON.stringify(process.argv));
process.nextTick(function(){
    console.log('nextTick Callback!!');
});

console.log('nextTick was set.')


// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
