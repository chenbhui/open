import { WS_ADDRESS } from '../config';
function userWebSocket(handleMessage) {
    const ws = new WebSocket(WS_ADDRESS);
    const init = () => {
        bindEvent();
    }
    function bindEvent() {
        ws.addEventListener('open', handleOpen, false);
        ws.addEventListener('close', handleClose, false);
        ws.addEventListener('error', handleError, false);
        ws.addEventListener('message', handleMessage, false);
    }
    function handleOpen(e) {
        let msg = { type: 'coming', id: sessionStorage.getItem("userId") };
        ws.send(JSON.stringify(msg));
        console.log('WebSocker open', e);
    }
    function handleClose(e) {
        console.log('WebSocker close', e);
    }
    function handleError(e) {
        console.log('WebSocker error', e);
    }
    init();
    return ws;
}
export default userWebSocket;