const Websocket = require('ws');
// 立即执行函数
; ((Ws) => {
    const server = new Ws.Server({ port: 8081 });
    const init = () => {
        bindEvent();
    }
    function bindEvent() {
        server.on('open', handleOpen);
        server.on('close', handleClose);
        server.on('error', handleError);
        server.on('connection', handleConnection);
    }
    function handleOpen() {
        console.log("我开了");
        console.log('Websocket opening');
    }
    function handleClose() {
        console.log('Websocket close');
    }
    function handleError() {
        console.log('Websocket error');
    }
    // 一开始handleConnection忘记加Ws参数，一直报错
    function handleConnection(Ws) {
        console.log('Websocket Connection');
        Ws.on('message', handleMessage);
    }
    function handleMessage(msg) {
        console.log(msg);
        console.log(msg.toString());
    }

    init();
})(Websocket);