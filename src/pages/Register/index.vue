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
            <!-- :validation-schema="schema"  绑定校验规则对象  下文的Field的name是对应的标记-->
            <!-- autocomplete="off"  解决浏览器自动填充功能 -->
            <VeeForm
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
              <label for="ConfirmPwd">Confirm password</label>
              <div class="ConfirmPwd">
                <Field
                  type="password"
                  name="confirmPwd"
                  v-model="form.confirmPwd"
                  placeholder="请确认密码"
                />
                <div class="error" v-if="errors.code">
                  <i class="iconfont icon-error">{{ errors.code }}</i>
                </div>
              </div>
              <div class="identityAndbtn">
                <span class="identity" @click="identityOpt()">
                  <div class="option">{{ useriden }}</div>
                  <ul v-if="showUl">
                    <li
                      v-for="item in identityList"
                      :key="item.index"
                      ref="getid"
                      @click="getiduser(item)"
                    >
                      {{ item.identity }}
                    </li>
                  </ul>
                </span>
                <button @click="register()" type="button">Sign up</button>
              </div>
            </VeeForm>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// Form as VeeForm 换名方法
import { Form as VeeForm, Field } from "vee-validate";
import schema from "@/utils/vee-validate-schema";
import Message from "../../components/Message/Message"; //函数
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Register } from "@/utils/html";
export default {
  name: "Register",
  components: { VeeForm, Field },
  setup() {
    const showUl = ref(false);
    const useriden = ref("选择身份");
    const formCom = ref(null); //为了后面获取form表单内容
    const identityList = reactive([
      { identity: "普通用户", index: 1 },
      { identity: "工作人员", index: 2 },
      { identity: "老师", index: 3 },
    ]);
    const form = reactive({
      username: null,
      password: null,
      confirmPwd: null,
      identity: null,
    });
    // vee-validate校验基本步骤
    // 1.导入Form Field 组件，将form和input替换，需要加上name用来指定将来的校验规则函数的
    // 2.Field需要进行数据绑定,字段名称最好和后端接口需要的一致
    // 3.定义Field的name属性指定的校验规则函数，Form的validation-schema接受定义好的校验规则是对象
    // 4.自定义组件需要校验必须先支持v-model  然后Field使用as指定为组件名称
    const myschema = {
      // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败错误提示
      username: schema.username,
      password: schema.password,
    };
    const identityOpt = () => (showUl.value = !showUl.value);
    const getiduser = (item) => {
      useriden.value = item.identity;
      form.identity = item.index;
    };
    // 点击登录时对整体表单进行验证
    const store = useStore();
    const router = useRouter(); //拿路由信息
    const route = useRoute();
    const register = async () => {
      const valid = await formCom.value.validate();
      console.log(valid);
      //2.成功：存储用户信息+跳转到登录页+消息提示    失败：消息提示
      if (valid) {
        const { username, password, confirmPwd, identity } = form;
        console.log(form);
        Register({ username, password, confirmPwd, identity }).then((res) => {
          const data = res.data;
          console.log(data);
          if (data.status == 1) {
            Message({ type: "error", text: data.message });
          } else if (data.status == 0) {
            Message({ type: "success", text: data.message });
            // 跳转页面
            router.push(route.query.redirectUrl || "/login");
          } else {
            Message({ type: "warn", text: "发生异常" });
          }
        });
      }
    };
    return {
      showUl,
      form,
      identityList,
      useriden,
      schema: myschema,
      formCom,
      register,
      identityOpt,
      getiduser,
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