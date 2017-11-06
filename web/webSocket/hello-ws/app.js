//导入WebSocket模块
const WebSocket = require('ws');

//引用Server类
const WebSocketServer = WebSocket.Server;

//s实例化
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        setTimeout(() => {
            ws.send(`What's your name?`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        }, 1000);
    })
});

//如果在浏览器测试客户端发送请求，要找个http的网址测试才行
console.log('ws server started at port 3000...');

let ws = new WebSocket('ws://localhost:3000/test');

//打开WebSocket连接后立刻发送一条消息
ws.on('open', function(){
    console.log(`[CLIENT] open`);
    ws.send('Hello');
});

//相应收到的消息
ws.on('message', function(message){
    console.log(`[CLIENT] Received: ${message}`);
})