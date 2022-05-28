/* 
wx.connectSocket({
    url: 'ws://localhost:8081',
    success: () => {
        console.log('connect socket success');
    },
    fail: () => {
        console.log("connect socket fail");
    }
})
wx.onSocketOpen(() => {
    wx.sendSocketMessage({
        data: wx.getStoragesSync('usemsg').id,
        success: () => {
            console.log('成功的回调');
        }
    })
})
wx.onSocketMessage((msg) => {
    console.log("返回的数据");
}) */

var ws = new WebSocket('ws://localhost:8081');
ws.open = () => {
    console.log("ws onopen");
    ws.send('from client:hello!');
}
ws.onmessage = (e) => {
    console.log("ws onmessage");
    console.log('from server:' + e.data);
}
