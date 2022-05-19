# open

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 参考项目

https://www.bilibili.com/video/BV1BA4y1X7bp

![image-20220506151741922](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220506151741922.png)



# 辅助网站

## 图床

作用:托管图片，生成图片地址

https://imgtu.com/

![image-20220517221625450](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220517221625450.png)



# Open项目细节

### login

<strong style="color:red;">消息提示函数封装</strong>：动态创建虚拟`dom`且三秒后清空

:dart:根据组件创建虚拟结点，并把虚拟节点渲染到DOM函数中，最后开启定时移除DOM容器内容

![image-20220506151406941](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220506151406941.png)

<strong style="color:red">使用的两种方法</strong>

![image-20220506151900476](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220506151900476.png)

![image-20220506151958250](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220506151958250.png)

![image-20220506151251425](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220506151251425.png)



**相关提示组件的代码**：`Message>index.vue`

```vue

<template>
  <Transition name="down">
    <div class="message" :style="style[type]" v-show="visible">
      <!-- 上面绑定的是样式 -->
      <!-- 不同提示图标会变 :class="['icon-warning']" :class="{'icon-warning':true}]"-->
      <p class="iconfont text" :class="[style[type].icon]">{{ text }}</p>
    </div>
  </Transition>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "message",
  props: {
    type: {
      type: String,
      default: "warn",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    //   控制元素隐藏
    const visible = ref(false);
    onMounted(() => {
      visible.value = true;
    });
    //   定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon: "icon-jinggao",
        color: "#E6A23C",
        backgroundColor: "rgb(253,246,236)",
        borderColor: "rgb(250,236,216)",
      },
      error: {
        icon: "icon-error",
        color: "#f56c6c",
        backgroundColor: "rgb(254,240,240)",
        borderColor: "rgb(253,226,226)",
      },
      success: {
        icon: "icon-chenggong",
        color: "#67c23a",
        backgroundColor: "rgb(240,249,235)",
        borderColor: "rgb(225,243,216)",
      },
    };
    return {
      style,
      visible,
    };
  },
};
</script>

<style scoped>
.message {
  position: fixed;
  left: 50%;
  top: 25px;
  width: 250px;
  height: 40px;
  margin-left: -125px;
  line-height: 40px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  z-index: 9999;
}
.text {
  font-size: 13px;
}
.iconfont:before {
  margin-right: 10px;
}
.down-enter-from {
  transform: translateY(-75px);
  opacity: 0;
}
.down-enter-active {
  transition: all 0.5s;
}
.down-enter-to {
  transform: none;
  opacity: 1;
}
</style>
```



# `Vue3`项目历练

### problem

#### <strong style="color:red">问题1：</strong>

![image-20220504005138090](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005138090.png)

<strong style="color:green">解决：</strong>

![image-20220504005344099](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005344099.png)

<strong style="color:blue">改正</strong>:

![image-20220504005531061](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005531061.png)



<strong style="color:orange">相关知识：</strong>

#### `Vue`中`router` 和 `route` 、`routes` 的区别

* router 

  ```js
  router一般具有功能性,例如：
  （1）router.go(number)
  作用：页面路由跳转，前进或者后退 this.router.go(-1)//后退
  （2）$router.push
  作用：跳转到指定的url路径
  1.字符串 this.$router.push(‘home’)
  2.对象 this.$router.push({path: ‘home’})
  3.命名的路由 this.router.push(name:'user',params:userId:123)
  4.带查询参数变成/register?plan=123this.router.push({path: ‘register’, query: {plan:‘123’}})
  	push方法其实和是等同的;
  	注意: push方法的跳转会向 history 栈添加一个新的记录**, 当我们点击浏览器的返回按钮时可以看到之前的页面;**
  
  （3）$router.replace(path)
  作用: 跳转到指定的url路径;
  push 方法会向history栈添加一个新的记录, 而replace方法是替换当前的页面, 不会向 history 栈添加一个新的记录;
  ```

* route

```js
route一般用于获取信息，例如
获取
-路由路径($route.path)

-路由参数($route.params)

-路由的查询参数($route.query)

-路由的hash值($route.hash), 完成解析后的hash值(不带#但包含查询参数和hash的完成路径， $route.fullhash)

-数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象($route.matched)

-当前路径名字($route.name)

-路由元信息($route.meta)，meta就代表元数据

需要获取某个路由信息的时候用 route ， 需要使用路由方法的时候用 router
```

<strong style="color:red">需要获取某个路由信息的时候用 route ， 需要使用路由方法的时候用 router</strong>

* routes

```js
routes指创建vue-router路由实例的配置项, 用来配置多个route路由;

$router：是路由操作对象, 只写对象;
route:是路由信息对象，只读对象;
this.route:是路由信息对象，只读对象;//操作路由跳转
this.router.push({
	name: ‘hello’,
	age: ‘11’
})

//读取路由参数接收
this.name=this.route.params.name
this.age=this.route.params.age
```





#### <strong style="color:red">问题2：</strong>

后端post拿不到前端发送带过来的body数据

#### `express`中使用`post`方法

https://blog.csdn.net/weixin_44691513/article/details/109374231

<strong style="color:green">解决：</strong>安装`body-parse`

* Express中默认都使用body-parser作为请求体解析post数据，这个模块也能解析：`JSON`、Raw、文本、URL-encoded格式的请求体。
  首先在项目目录安装body-parser：

  ```js
  npm i body-parser
  ```

* 在后端代码`app.js`上使用该插件

  ```js
  const express = require('express')
  const bodyParser = require('body-parser')
  const router = require('./router')//引用模块
  const app = express()
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  // 全局 中间件  解决所有路由的 跨域问题
  app.all('*',function (req,res,next) {
      res.header('Access-Control-Allow-Origin','*')
      res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type')
      res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS')
      next()
  })
  app.use(router)
  app.listen(3000,function () {
      console.log('服务器启动成功')
      console.log('http://127.0.0.1:3000')
  })
  
  ```

  接口演示（router_handler/user.js）

  ```js
  const {Router} = require('express')
  const path = require('path')
  const router = new Router()
  
  router.get('/',function (req,res){
      res.send({
          msg: 'hi node express'
      })
  })
  
  router.post('/login',function (req,res){
  
      // req: 客户端 携带的信息
      // console.log(req.query)
      // console.log(req.params)
      console.log(req.body)
      // console.log(req.get('Origin'))
      // console.log(req.url)
  
      // res 服务端 发送给 客户端的信息(数据)
      // res.send({
      //     msg: 'login 接口'
      // })
      // res.end('不会自动转换数据 容易乱码')
      // res.download('./static/dj.jpg') // 相对地址
      // res.sendFile(path.resolve('static','dj.jpg')) // 绝对地址
      // res.redirect('https://www.shiguangkey.com/')
      // res.redirect('https://www.shiguangkey.com/')
      res.set('sadsadsadsafdgsfadgfsdfsd','789')
      res.send({
          msg: 'set演示'
      })
  })
  
  
  module.exports = router
  
  ```




#### <strong style="color:red">问题3：</strong>

####  @import 的方式引入外部`CSS`文件

```vue
<style scoped>
@import url("../../assets/styles/scss/chatRoom.css"); 
</style>
```

<strong style="color:orange">相关知识：</strong>

如果向上面这么引入，其他页面就会出现了样式错乱的问题，分离出来的那个样式文件的样式应用到了其他页面。
而且，**不论是在首个页面还是其他页面我都有设置 scoped ，那么为什么会出现这种问题呢？**

原因是，使用 **@import 的方式引入外部`CSS`文件，会绕开我们设置的 scoped 也就是只在当前页面生效，**所以这里我在这个页面@import 引入的 `css` 实际上是应用到全局中去了。

<strong style="color:green">解决：</strong>换一种引入css文件的方式——通过 ***src*** 引入

![image-20220517141302187](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220517141302187.png)

参考博客：https://blog.csdn.net/Excalibur_C/article/details/102594879

#### <strong style="color:red">问题4：</strong>

#### GET http://192.168.0.102:8080/sockjs-node/info?t=1647433830643 net::ERR_CONNECTION_REFUSED

```vue
在用vue的时候遇到GET http://192.168.0.102:8080/sockjs-node/info?t=1647433830643 net::ERR_CONNECTION_REFUSED的报错，就像下面这样：
```

![image-20220519110809407](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220519110809407.png)

<strong style="color:orange">相关知识：</strong>

首先 sockjs-node是一个JavaScript库，提供跨浏览器JavaScript的API，创建了一个低延迟、全双工的浏览器和web服务器之间通信通道。

服务端：sockjs-node（https://github.com/sockjs/sockjs-node）
客户端：sockjs-clien（https://github.com/sockjs/sockjs-client）

如果你的项目没有用到 sockjs，vuecli 运行 npm run serve 之后 network
里面一直调研一个接口，所以我们需要从根源上关闭这个调用。

<strong style="color:green">解决：</strong>

（1）找到这个文件：`…/node_modules/sockjs-client/dist/sockjs.js`

（2）在大概1600多行，找到 `*self.xhr.send(payload);*` 注释掉

![image-20220519111343135](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220519111343135.png)

原文链接：https://blog.csdn.net/weixin_45771601/article/details/123535613



#### <strong style="color:red">问题5：</strong>

####  Vue中使用v-for遍历本地图片地址不正确

![image-20220519111925142](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220519111925142.png)

错误代码：

```vue
<div class="hsimg">
  <img
    v-for="(item, index) in hsImg"
    :key="index"
    :src="item"
    alt="图"
  />
</div>
data() {
return {
  hsImg: [
    "../assets/images/hsimg01.png",
    "../assets/images/hsimg02.png",
    "../assets/images/hsimg03.png",
    "../assets/images/hsimg04.png",
    "../assets/images/hsimg05.png"
  ]
};
}
```

<strong style="color:orange">相关知识：</strong>

（1）img 的src 绑定的是变量，它和写死的路径不应该是一样吗？打开浏览器控制台，看到如下内容，**img 的src 已经是一个字符串**，它不是我们想要的变量了。可能是它对item进行了一次解析变成了字符串.

<strong style="color:green">解决：</strong>

（1）把`item`变成图片的地址，这样进行一次解析的时候，直接去读取图片。

有人提到了require 方法， require 一个图片路径，require 是一个commonJs 规范的关键字，当我们在写node 代码的时候，都是有require 去读取资源的。`webpack` 把`img` 当做一种资源，所以使用时要先引进。引进方式有两种，一种是import ， 一种是require， 因为webpack 同时支持`ES6` module 和 commonJs 规范. import 是个语句，只能在js 代码顶部使用， 而require 不一样，它是一个表达式，可以进行赋值操作。

```vue
<div class="hsimg">
  <img
    v-for="(item, index) in hsImg"
    :key="index"
    :src="item"
    alt="图"
  />
</div>
data() {
return {
  hsImg: [
    require("../assets/images/hsimg01.png"),
    require("../assets/images/hsimg02.png"),
    require("../assets/images/hsimg03.png"),
    require("../assets/images/hsimg04.png"),
    require("../assets/images/hsimg05.png"),
  ]
};
}
```

（2）利用图床托管图片，生成图片外部地址，就不会有这种问题

参考博客：https://www.jb51.net/article/146731.htm

### Learn

#### 1.`vue`中transition

```js
https://blog.csdn.net/weixin_44140210/article/details/119390691
https://blog.csdn.net/qq_41756580/article/details/108493532
```

* 用法:**transition** 元素作为单个元素/组件的过渡效果。**transition**只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。

* 属性：

  * name【String】,用于自动生成css过度类名

    例如：name:fade  

    ```js
    fade-enter：元素显示/插入前的效果，例如：transform: translateX(-200%);
                                                    
    fade-active-enter：元素显示/插入的过渡时间和函数，例如：transition: all 0.3s ease;
                                                    
    fade-enter-to：元素显示/插入后的效果，例如：transform: translateX(-100%);
    
    fade-leave：元素隐藏/移除前的效果，例如：transform: translateX(0);
    
    fade-active-leave：元素隐藏/移除的过渡时间和函数，例如：transition: all 0.3s ease;
    
    fade-leave-to：元素隐藏/移除后的效果，例如：transform: translateX(100%);
    ```

  * appear 【 boolean】，是否在初始渲染时使用过渡。默认为 false。

  * mode 【 string】，控制离开/进入过渡的时间序列。有效的模式有 “out-in” 和 “in-out”；默认同时进行

    ```js
    mode的“out-in”和“in-out”代表的意思
    out-in：在前一个组件离开之后下一个组件开始进入
    in-out：下一个组件进入，前一个组件才离开
    ```

    transition动画的实现是依靠css进行控制的，一般而言v-active-enter和v-active-leave的样式是一样的，因为这两个是定义过渡的状态，例如过渡的曲线、时间。
    如果页面有多个transition的话可以通过修改name属性，分别给不同的transition添加变幻样式

#### 2.注册登录页面

##### 校验问题

<strong style="color:red">详情请参照Open项目</strong>

```js
Vue3 表单校验 vee-validate@4.0.3支持vue3.0

https://blog.csdn.net/daShuai_qianDuan/article/details/117962494
```

```html
vee-validate校验基本步骤
1.安装校验插件：npm i vee-validate@4.0.3
2.导入校验组件 : import { Form, Field } from 'vee-validate'
  将form和input替换，需要加上name用来指定将来的校验规则函数的
3.Field需要进行数据绑定,字段名称最好和后端接口需要的一致

3.定义校验规则：
  定义Field的name属性指定的校验规则函数，Form的validation-schema接受定义好的校验规则是对象
 一般应用的表单校验可能多个地方都需要使用，所以我们有必要把所有的规则集中管理起来, 例如: 我放在了src/utils/vee-validate-schema.js
4.使用Form组件配置校验规则和错误对象
    <Form
      class="form"
      :validation-schema="mySchema"
      v-slot="{ errors }"
      autocomplete="off"
    >
     <!-- 表单元素 -->
    </Form>
【validation-schema : 配置校验规则           v-slot：导出错误对象】
5.自定义组件需要校验必须先支持v-model  然后Field使用as指定为组件名称
```

```js
export default {
  // 校验account
  account (value) {
    if (!value) return '请输入用户名'
    return true
  },
  password (value) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
    return true
  },
  mobile (value) {
    if (!value) return '请输入手机号'
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
    return true
  },
  code (value) {
    if (!value) return '请输入验证码'
    if (!/^\d{6}$/.test(value)) return '验证码是6个数字'
    return true
  },
  isAgree (value) {
    if (!value) return '请勾选同意用户协议'
    return true
  }
}
```

导入定义好的规则

```js
<script>
  import schema from '@/utils/vee-validate-schema'
  setup () {
    // 表单对象数据
    const form = reactive({
      account: null, // 账号
      password: null // 密码
    })
    // 校验规则对象
    const mySchema = {
      account: schema.account,
      password: schema.password
    }
    return { form, mySchema }
 } 
</script>
```

5)使用 Field 组件，添加表单项目校验
把input改成 Field 组件，默认解析成input

Field 添加name属性，作用是指定使用schema中哪个校验规则

Field添加v-model，作用是提供表单数据的双向绑定

发生表单校验错误，显示错误类名error，提示红色边框(**提前写好静态代码)**

```html
<div class="password">
    <Field
       type="password"
       name="password"
       v-model="form.password"
       placeholder="请输入密码"
     />
     <div class="error" v-if="errors.password">
          <i class="iconfont icon-error">{{ errors.password }}</i>
     </div>
</div>
```

6）整体表单校验-兜底校验

通过ref获得表单组件对象

执行组件对象身上的validate方法 （执行完毕返回promise对象）

```vue
<button @click="submit" class="btn">登 录</button>
 
setup(){
    async function submit () {
      const valid = await target.value.validate()
      console.log(valid)
    }
}
```



##### 清空表单

监听isMsgLogin【一个案例的变量】重置表单（数据+清除校验结果）

```js
(1)在form表单加上ref
  <Form
	   ref="formCom"
       reactive="form"
       :validation-schema="schema"
       v-slot="{ errors }"
       autocomplete="off"
   >

 (2)
const formCom=ref(null);
watch(isMsgLogin,()=>{
	//重置数据
    form.username=null,
    form.password=null,
    form.confirmPwd=null,
    //如果是没有雄安会Field组件，之前的校验结果不会清除，例如：v-show切换的
    //Form组件提供一个resetForm函数清楚校验结果
    formCom.value.resetForm()
})
return{isMsgLogin,form,formCom}
```

一些拓展：

（1）setup中获取组件实例proxy

```js
const {proxy}=getCurrentInstance()
可用于调用函数：
proxy.$message({text:'111'})//其中message已经是封装好的函数（具体看Open项目的login部分）
```

##### 后端post接收不到前端数据

* Express中默认都使用body-parser作为请求体解析post数据，这个模块也能解析：JSON、Raw、文本、URL-encoded格式的请求体。
  首先在项目目录安装body-parser：

```js
/* 
        //使用request2.js的，但是控制台报错！！！！
        userLogin({ username, password })
          .then((data) => {
            //存储用户信息
            const { id, username, avatar, identity, token } = data.result;
            store.commit("user/setUser", {
              id,
              username,
              avatar,
              identity,
              token,
            });
            // 跳转页面
            router.push(route.query.redirectUrl || "/");
            // 成功提示
            Message({ type: "success", text: "登录成功·" });
          })
          .catch((e) => {
            // 失败提示
            if (e.response.data) {
              Message({
                type: "error",
                text: e.response.data.message || "登陆失败",
              });
            }
          }); */
```

#### 3.`knowledge`页面

```vue
<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNew, getBook } from "@/utils/html";
export default {
  name: "Knowledge",
  setup() {
    let News = reactive([]);
    let Books = reactive([]);
    onMounted(() => {
      // 想要一进页面就发请求
      getNew().then((res) => {
        const data = res.data;
        console.log(data);
        //这里直接用News=data.data会失去响应式！！
        News.push(...data.data);
        console.log(News);
      });
      getBook().then((res) => {
        const data = res.data;
        console.log(data);
        Books.push(...data.data);
        console.log(Books);
      });
    });
    const GoHref = (e) => {
      // console.log(e); //获取点击的参数(url地址)
      /*  // 在本页面打开感觉不是很友好
      window.location.href = e; //在本页面打开外部链接 */
      window.open(e, "_blank"); //在新窗口打开外链接
    };
    return {
      News,
      Books,
      GoHref,
    };
  },
```

##### `vue3`中的reactive函数声明数组

```js
let arr = reactive([]);
let newArr = [1,2,3]
arr = newArr;//会失去响应式

//响应式方式
（1）使用数组的push方法
arr.push(...newArr)
（2）使用ref函数
let arrs=ref()
arr.value=newArr
```

##### `Vue`列表点击跳转外部链接

https://blog.csdn.net/millia/article/details/114936021

```vue
<template>
    <ul class="list">
        <li v-for="item in list" :key="item.id">
        <!--vodShow(item.id)方法点击打开弹出层观看直播视频-->
        <div @click="vodShow(item.id)">
        <img src="images/img01.jpg">
        <b>{{item.name}}</b>
        <i class="stop" v-if="item.state == 0">已结束请看回放</i>
        <i class="now" v-if="item.state == 1">会议进行中</i>
        <i v-if="item.state == 2">会议预计{{item.time}}开始</i>
        </div>
        <!--GoUrl(item.reback)方法跳转外部链接地址-->
        <p @click="GoUrl(item.reback)">观看回放</p>
        </li>
    </ul>
</template>
<script>    
    GoUrl(event){
        //console.log(event); //获取点击的参数(url地址)
        window.open(event,"_blank"); //在新窗口打开外链接
        window.location.href = event; //在本页面打开外部链接
    }
</script>    
```

##### 加载完就自动发送请求

```js
onMounted(() => {})
```

##### 实现分页请求

详情请见：open项目knowlege模块







