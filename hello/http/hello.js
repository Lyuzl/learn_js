'use strict';

//导入http模块
var http = require('http');

//创建http server 传入回调函数
var server = http.createServer(function(request, response){
    //回调函数接受request和response对象，
    //获得Http请求的method和url：
    console.log(request.method + ': ' + request.url);
    //将http相应200写入response，同时设置Content-Type：text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    //将http相应的HTML写入response
    response.end('<h1>Hello world</h1>');
});

//让服务器在8080端口监听
server.listen('8080');

console.log('Server is running at http://127.0.0.1:8080/');