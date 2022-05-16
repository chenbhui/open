<template>
  <div class="w">
    <div class="main-contain">
      <section class="main-contain-left">
        <div class="left-content-title">
          <div class="title-area">
            <router-link to="/home">
              <img src="../../assets/images/logo.png" alt="" />
            </router-link>
          </div>
          <h3>Discover the world's top <br />Love & Expectation</h3>
          <div class="main-contain-left-img">
            <img src="../../assets/images/signIn.png" alt="" />
          </div>
          <p>Art by peter Tarka</p>
        </div>
      </section>
      <section class="main-contain-right">
        <div class="tip">
          <router-link to="/register">还未注册</router-link>
        </div>
        <div class="main-contain-right-content">
          <div class="right-content-title">
            <h3>Sign in to OPEN</h3>
            <div class="auth-connection">
              <div class="auth-connection-mean iconfont icon-weixin"></div>
            </div>
            <div class="divider"></div>
            <Form
              ref="formCom"
              reactive="form"
              :validation-schema="schema"
              v-slot="{ errors }"
              autocomplete="off"
            >
              <label for="username">Username</label>
              <div class="username">
                <Field
                  type="text"
                  name="username"
                  v-model="form.username"
                  placeholder="请输入用户名"
                />
                <div class="error" v-if="errors.username">
                  <i class="iconfont icon-error">{{ errors.username }}</i>
                </div>
              </div>
              <label for="password">password</label>
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
              <button @click="login()" type="button">Sign In</button>
            </Form>
          </div>
        </div>
      </section>
      <!-- 测试:直接用组件的方式，比较复杂 -->
      <!-- <message type="error" text="用户名不存在" /> -->
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { Form, Field } from "vee-validate";
import schema from "@/utils/vee-validate-schema";
import Message from "../../components/Message/Message"; //函数
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Login } from "../../utils/html.js";
export default {
  name: "Login",
  components: { Form, Field },
  setup() {
    const formCom = ref(null);
    const form = reactive({
      username: null,
      password: null,
    });
    const myschema = {
      // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败错误提示
      username: schema.username,
      password: schema.password,
    };
    // 点击登录时对整体表单进行验证
    const store = useStore();
    const router = useRouter(); //拿路由信息
    const route = useRoute();
    const login = async () => {
      const valid = await formCom.value.validate();
      console.log(valid);
      // Message({ type: "success", text: "用户名或者密码错误" });
      //2.成功：存储用户信息+跳转到来源页或者首页+消息提示    失败：消息提示
      if (valid) {
        const { username, password } = form;
        console.log(form);
        Login({ username, password }).then((res) => {
          console.log(res.data);
          const data = res.data;
          if (data.status == 1) {
            Message({ type: "error", text: "用户名或者密码错误" });
          } else if (data.status == 0) {
            Message({ type: "success", text: "登录成功·" });
            // 存储用户信息
            // const { id, username, avatar, token } = data.result;
            // store.commit("user/setUser", { id, username, avatar, token });
            // 跳转页面
            router.push(route.query.redirectUrl || "/");
          } else {
            Message({ type: "warn", text: "发生异常" });
          }
        });
      }
    };
    return {
      form,
      formCom,
      schema: myschema,
      login,
    };
  },
};
</script>

<style scoped>
.main-contain {
  display: flex;
  width: 100%;
  max-width: 1447px;
  height: 100vh;
}

.main-contain .main-contain-left {
  display: flex;
  align-items: center;
  width: 500px;
  height: 100vh;
  background: #f4d387;
}

.left-content-title {
  position: relative;
  width: 100%;
  height: 694px;
}

.main-contain .main-contain-left .title-area {
  width: 136px;
  margin: 58px 0 27px 60px;
}

.main-contain .main-contain-left .title-area a {
  display: block;
  width: 100%;
  height: 100%;
}

.main-contain .main-contain-left .title-area a img {
  width: 100%;
}

.main-contain .main-contain-left h3,
.main-contain .main-contain-left p {
  margin: 0px 0 0 67px;
  color: #866118;
  font-size: 27px;
}

.left-content-title p {
  position: absolute;
  bottom: 12px;
}

.main-contain-left-img {
  width: 100%;
  height: 500px;
}

.main-contain-left-img img {
  width: 100%;
}

.main-contain .main-contain-left p {
  margin-top: 25px;
  font-size: 14px;
}

/* 登录处 */
.main-contain .main-contain-right {
  display: flex;
  width: calc(100% - 500px);
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.tip {
  position: absolute;
  top: 25px;
  right: 68px;
}

.tip a {
  color: palevioletred;
  cursor: pointer;
}

.main-contain-right-content {
  width: 434px;
  height: 500px;
}

.right-content-title h3 {
  font-size: 22px;
  font-weight: bold;
}

.auth-connection {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 37px;
  margin-top: 30px;
  padding-right: 80px;
}

.auth-connection-mean {
  width: 54px;
  height: 48px;
  border-radius: 10px;
}

.icon-weixin:before {
  font-size: 47px;
  color: #f2f2f2;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.icon-weixin:hover:before {
  color: #ccc;
}

.divider {
  position: relative;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
}

.divider::after {
  content: "Or";
  width: 60px;
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #6e6d7a;
  text-align: center;
  font-size: 16px;
}

.right-content-title label {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.right-content-title form {
  margin-top: 43px;
}

.right-content-title form input {
  width: 100%;
  height: 100%;
  padding-left: 15px;
}

.right-content-title form > div {
  position: relative;
  width: 100%;
  height: 43px;
  margin: 10px 0 30px 0;
  background: #f2f2f2;
  border-radius: 8px;
}
.right-content-title form > div .error {
  position: absolute;
  top: 49px;
  left: 2px;
  color: red;
}

.right-content-title form > div .error i {
  font-size: 13px;
}

.right-content-title form button {
  width: 200px;
  height: 43px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
  border-radius: 8px;
  background: #ea4c89;
}
</style>