// 提供显示Message组件的函数
// 导入直接使用，也可以挂载在vue是实例原型上
// import Message from 'Message' 使用Message({type:'error',text:'提示文字'})
// this.$message({type:'error',text:'提示文字'})
import { createVNode, render } from 'vue'
import MessageCom from './index.vue'
// dom容器：放在这里实现创建一次，多次使用
const div = document.createElement('div');
div.setAttribute('class', 'message-container')
document.body.appendChild(div)

// 定时器标识
let timer = null
export default ({ type, text }) => {
    // 渲染组件
    // 1.导入消息提示组件
    // 2.将导入的消息提示文件编译为虚拟节点(dom结点)
    // createVNode(组件,属性对象)
    const vnode = createVNode(MessageCom, { type, text })
    // 3.准备一个装载消息提示组件的容器
    // 4.将虚拟结点渲染在容器中
    // render(虚拟节点，DOM容器)
    render(vnode, div)
    // 5.3s后销毁组件
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 3000)

}