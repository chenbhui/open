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



# Vue3项目历练

<strong style="color:red">问题：</strong>

![image-20220504005138090](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005138090.png)

<strong style="color:green">解决：</strong>

![image-20220504005344099](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005344099.png)

<strong style="color:blue">改正</strong>:

![image-20220504005531061](C:\Users\86157\AppData\Roaming\Typora\typora-user-images\image-20220504005531061.png)



<strong style="color:orange">相关知识：</strong>

#### 1.`Vue`中`router` 和 `route` 、`routes` 的区别

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

##### 提示信息函数封装

```js

```

一些拓展：

（1）setup中获取组件实例proxy

```js
const {proxy}=getCurrentInstance()
可用于调用函数：
proxy.$message({text:'111'})//其中message已经是封装好的函数（具体看Open项目的login部分）
```

