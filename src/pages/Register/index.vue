<template>
  <div class="w">
    <div class="main-contain">
      <section class="main-contain-left">
        <div class="left-content-title">
          <div class="title-area">
            <a href="index.html">
              <img src="../../assets/images/logo.png" alt="" />
            </a>
          </div>
          <h3>Discover the world's top <br />Love & Expectation</h3>
          <div class="main-contain-left-img">
            <img src="../../assets/images/signup.jpg" alt="" />
          </div>
          <p>Art by Irina Valeeva</p>
        </div>
      </section>
      <section class="main-contain-right">
        <div class="tip">
          <router-link to="/login">已有账号</router-link>
        </div>
        <div class="main-contain-right-content">
          <div class="right-content-title">
            <h3>Sign up to OPEN</h3>
            <div class="auth-connection">
              <div class="auth-connection-mean iconfont icon-weixin"></div>
            </div>
            <div class="divider"></div>
            <form reactive="form">
              <label for="username">Username</label>
              <div class="username">
                <input
                  type="text"
                  v-model="form.name"
                  placeholder="请输入用户名"
                />
              </div>
              <label for="password">password</label>
              <div class="password">
                <input
                  type="password"
                  v-model="form.passward"
                  placeholder="请输入密码"
                />
              </div>
              <label for="ConfirmPwd">Confirm password</label>
              <div class="ConfirmPwd">
                <input
                  type="text"
                  v-model="form.confirmPwd"
                  placeholder="请确认密码"
                />
              </div>
              <div class="identityAndbtn">
                <span class="identity" @click="identityOpt($event)">
                  <div class="option">普通用户</div>
                  <ul v-if="showUl">
                    <li>普通用户</li>
                    <li>工作人员</li>
                    <li>老师</li>
                  </ul>
                </span>
                <button @submit="onSubmit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "Register",
  setup() {
    const form = reactive({
      name: "",
      passward: "",
      confirmPwd: "", //重复密码
      identity: "",
    });
    const showUl = true;
    const identityOpt = (e) => {
      // 获取当前元素
      const el = e.currentTarget;
    };
    const onSubmmit = () => {
      //校验通过了,可以请求注册接口了
    };
    return {
      showUl,
      form,
      onSubmmit,
      identityOpt,
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
  background: #f1cdd9;
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
  color: #865c6c;
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
.tip {
  position: absolute;
  top: 25px;
  right: 68px;
}

.tip a {
  color: palevioletred;
  cursor: pointer;
}

.main-contain .main-contain-right {
  display: flex;
  width: calc(100% - 500px);
  height: 100vh;
  justify-content: center;
  align-items: center;
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
  line-height: 43px;
  font-size: 16px;
  padding-left: 15px;
}

.right-content-title form > div {
  width: 100%;
  height: 43px;
  margin: 10px 0 30px 0;
  background: #f2f2f2;
  border-radius: 8px;
}

.identityAndbtn {
  display: flex;
  justify-content: space-between;
}

.identityAndbtn span,
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

.right-content-title form > div.identityAndbtn {
  background: none;
}

.identityAndbtn span {
  position: relative;
}

.option {
  width: 100%;
  height: 100%;
}

.identityAndbtn span > ul {
  position: absolute;
  bottom: 50px;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  background: #f0ccd9;
}

.identityAndbtn span ul li {
  width: 100%;
  height: 43px;
  border-radius: 8px;
}

.identityAndbtn span ul li:hover {
  background: #ccc;
}
</style>