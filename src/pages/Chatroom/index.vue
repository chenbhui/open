<template>
  <!-- banner -->
  <div class="w">
    <div class="banner">
      <div class="cs">
        <div class="commitBarometer-show">
          <div class="commitBarometer-show-img">
            <img src="../../assets/images/chatRoombg.svg" alt="" />
          </div>
          <div class="commitBarometer-show-text">
            <h3>Commit Barometer</h3>
            <p class="commitB">
              Please input the class code and submit the barometer after passing
              the verification. You can't tell the non staff the class code,
              otherwise you will bear the consequences.
            </p>
            <div class="commitVerification">
              <form action="" reactive="form" enctype="multipart/form-data">
                <div class="commitCode">
                  <input
                    type="text"
                    placeholder="输入班级代号+周数,例:(200+13)"
                    v-model="form.classNum"
                  />
                </div>
                <div class="commitConfirm" @click="changeShowfilecommit">
                  Upload
                </div>
                <!-- 上传区域 -->
                <div class="classCommit" v-if="showfilecommit">
                  <div class="fileBox">
                    <div id="drop-area">
                      <input
                        type="file"
                        multiple="multiple"
                        @change="getfile"
                      />
                      <p class="picture iconfont icon-segi-icon-download"></p>
                    </div>
                    <div
                      class="closeload iconfont icon-guanbi"
                      @click="changeShowfilecommit"
                    ></div>
                    <div class="filecommitBtn" @click="commitFile">Commit</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- 填写晴雨表按钮Fill in the barometer -->
        <div class="fillInBtn" @click="changeFillBtn">Gain Barometer</div>
        <!-- 聊天小窗口 -->
        <div class="chatWindow">
          <div class="chatWindow-him">Hey!Do you need any help?</div>
          <div
            class="chatWindow-me iconfont icon-icon_sent"
            @click="changechatWindow"
          >
            Write a message...
          </div>
          <div class="chatWindow-worker" @click="changechatWindow">
            <img src="../../assets/images/authorPhoto.jpg" alt="" />
          </div>
        </div>
        <!-- 聊天室 -->
        <div class="chatWindowRoom" v-if="showchatWindowRoom">
          <div class="chatWindowRoom-head">
            <div class="welcome">
              <div class="welcome-more iconfont icon-gengduo"></div>
              <p>welcome to Open</p>
              <div
                class="welcome-close iconfont icon-shouqi"
                @click="changechatWindow"
              ></div>
            </div>
            <div class="welcome-worker">
              <div class="worker-img">
                <img src="../../assets/images/authorPhoto.jpg" alt="" />
              </div>
              <div class="worker-data">
                <h3>{{ worker[0].workerNickname }}</h3>
                <p>Support Agent</p>
              </div>
              <div class="work-good iconfont icon-zans"></div>
              <div class="work-bad iconfont icon-buzan"></div>
            </div>
          </div>
          <div class="chatWindowRoom-body">
            <div class="chat-show">
              <div class="chat-show-he">
                <div class="chat-show-Photo">
                  <img src="img/doctorPhoto1.jpg" alt="" />
                </div>
                <div class="Say">hi!今天过得怎么样</div>
              </div>
              <div
                class="chat-show-my clearfix"
                v-for="item of msgList"
                :key="item.id"
              >
                <div class="chat-show-Photo">
                  <img src="img/doctorPhoto2.jpg" alt="" />
                </div>
                <div class="Say" id="mySay">{{ item.msg }}</div>
              </div>
            </div>
            <div class="chat-edit">
              <form
                action=""
                method="POST"
                enctype="multipart/form-data"
                id="form"
              >
                <div class="icon">
                  <p class="iconfont" @click="changefacePrint"></p>
                  <p class="iconfont"></p>
                </div>
                <div class="chat-spare">
                  <div
                    class="chat-fuWenBen"
                    contenteditable="true"
                    ref="fuwenbenMsg"
                  ></div>
                </div>
                <!-- 遍历本地图片的另一种解决方法：require() -->
                <div class="facePrint" v-if="showfacePrint">
                  <ul class="facePrintUl">
                    <li v-for="(item, index) in emoij" :key="index">
                      <img :src="item" alt="图" />
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div class="chatWindowRoom-footer" @click="handleSendBtn">
            Power by Open
          </div>
        </div>
        <!-- 填写晴雨表 -->
        <div class="Barometer-form" v-if="showBarometerForm">
          <div
            class="Barometer-form-close iconfont icon-guanbi"
            @click="changeFillBtn"
          ></div>
          <div class="Barometer-form-content">
            <h3>Barometer</h3>
            <div class="Barometer-form-content-body">
              <Form
                ref="formCom"
                reactive="userForm"
                :validation-schema="schema"
                v-slot="{ errors }"
                autocomplete="off"
              >
                <div class="editdate">
                  <label for="">日期：</label>
                  <div class="editdateBox">
                    <Field
                      type="text"
                      name="qybdate"
                      placeholder="例：2022/5/12"
                      v-model="userForm.qybdate"
                    />
                    <div class="error" v-if="errors.qybdate">
                      <i class="iconfont icon-error">{{ errors.qybdate }}</i>
                    </div>
                  </div>
                </div>
                <div class="editname">
                  <label for="">姓名：</label>
                  <div class="editnameBox">
                    <Field
                      type="text"
                      name="qybname"
                      placeholder="请输入真实姓名"
                      v-model="userForm.qybname"
                    />
                    <div class="error" v-if="errors.qybname">
                      <i class="iconfont icon-error">{{ errors.qybname }}</i>
                    </div>
                  </div>
                </div>
                <div class="editclass">
                  <label for="">班级学号：</label>
                  <div class="editclassBox">
                    <Field
                      type="text"
                      name="qybclassNum"
                      placeholder="例：201549101"
                      v-model="userForm.qybclassNum"
                    />
                    <div class="error" v-if="errors.qybclassNum">
                      <i class="iconfont icon-error">{{
                        errors.qybclassNum
                      }}</i>
                    </div>
                  </div>
                </div>
                <div class="editsex">
                  <label for="">性别：</label>
                  <div class="editsexBox">
                    <Field
                      type="text"
                      name="qybSex"
                      placeholder="例：男"
                      v-model="userForm.qybsex"
                    />
                    <div class="error" v-if="errors.qybSex">
                      <i class="iconfont icon-error">{{ errors.qybSex }}</i>
                    </div>
                  </div>
                </div>
                <div class="editaddress">
                  <label for="">所在学校校区：</label>
                  <div class="editaddressBox">
                    <Field
                      type="text"
                      name="qybschool"
                      placeholder="例：广东金融学院广州校区"
                      v-model="userForm.qybschool"
                    />
                    <div class="error" v-if="errors.qybschool">
                      <i class="iconfont icon-error">{{ errors.qybschool }}</i>
                    </div>
                  </div>
                </div>
                <div class="editphone">
                  <label for="">手机号码：</label>
                  <div class="editphoneBox">
                    <Field
                      type="text"
                      name="qybphone"
                      placeholder="请输入手机号码"
                      v-model="userForm.qybphone"
                    />
                    <div class="error" v-if="errors.qybphone">
                      <i class="iconfont icon-error">{{ errors.qybphone }}</i>
                    </div>
                  </div>
                </div>
                <div class="editevent">
                  <label for="">想要说：</label>
                  <div class="editeventBox">
                    <textarea
                      class="editeventBox-fuWenBen"
                      v-model="userForm.qybwords"
                    ></textarea>
                  </div>
                </div>
                <div class="editfree">
                  <label for="">空档期：</label>
                  <div class="editfreeBox">
                    <Field
                      type="text"
                      name="qybFreetime"
                      placeholder="例：周五有空"
                      v-model="userForm.qybfreeTime"
                    />
                    <div class="error" v-if="errors.qybFreetime">
                      <i class="iconfont icon-error">{{
                        errors.qybFreetime
                      }}</i>
                    </div>
                  </div>
                </div>
                <!-- 提交按钮 -->
                <button
                  class="Barometer-form-commit"
                  type="button"
                  @click="commituserQingyubiao"
                >
                  提交
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useWebSocket } from "@/hooks";
import { loadfiles, userQingyubiao, getworker } from "@/utils/html";
import { Form, Field } from "vee-validate";
import schema from "@/utils/vee-validate-schema";
import Message from "../../components/Message/Message"; //函数
export default {
  name: "Chatroom",
  components: { Form, Field },
  setup() {
    const showBarometerForm = ref(false);
    const showchatWindowRoom = ref(false);
    const showfacePrint = ref(false);
    const showfilecommit = ref(false);
    // （1）聊天室部分
    /*聊天框的表情包：这里只是为了测试用require()解决遍历本地图片问题*/
    const emoij = reactive([
      require("../../assets/images/emoij/大哭.png"),
      require("../../assets/images/emoij/点个赞.png"),
      require("../../assets/images/emoij/调皮.png"),
      require("../../assets/images/emoij/愤怒.png"),
      require("../../assets/images/emoij/惊讶.png"),
      require("../../assets/images/emoij/开心.png"),
      require("../../assets/images/emoij/满意.png"),
      require("../../assets/images/emoij/亲好评.png"),
      require("../../assets/images/emoij/伤心.png"),
      require("../../assets/images/emoij/睡觉.png"),
      require("../../assets/images/emoij/贪吃.png"),
      require("../../assets/images/emoij/喜欢.png"),
      require("../../assets/images/emoij/笑.png"),
      require("../../assets/images/emoij/一般.png"),
      require("../../assets/images/emoij/疑问.png"),
      require("../../assets/images/emoij/愉快.png"),
    ]);
    const router = useRouter();
    const fuwenbenMsg = ref(null);
    let msgList = reactive([]);
    let worker = reactive([]);
    let userId = "";
    let receiveid = "";
    onMounted(() => {
      userId = sessionStorage.getItem("userId");
      if (!userId) {
        router.push("/login");
        return;
      }
      //获取工作人员信息
      const today = new Date().getDay();
      getworker({ today: today }).then((res) => {
        const data = res.data.data;
        worker.push(...data);
        receiveid = worker[0].id;
      });
    });
    const ws = useWebSocket(handleMessage);
    const handleSendBtn = () => {
      const _msg = fuwenbenMsg.value.innerHTML;
      /* 去掉空格后看是否有文字 */
      if (!_msg.trim().length) {
        return;
      }
      console.log("我发过去了！！！");
      ws.send(
        JSON.stringify({
          sendid: userId,
          receiveid: receiveid,
          dateTime: new Date().getTime(), //这个可以用来显示时间（与现在间隔超过二分钟的要显示一次当前事件）
          msg: _msg,
        })
      );
      fuwenbenMsg.value.innerHTML = "";
    };

    // （2）晴雨表部分
    /* 班级晴雨表的form */
    const form = reactive({
      classNum: null,
      files: [],
    });
    // 用户晴雨表的form
    const formCom = ref(null);
    const userForm = reactive({
      qybdate: null,
      qybname: null,
      qybclassNum: null,
      qybsex: null,
      qybschool: null,
      qybphone: null,
      qybwords: null,
      qybfreeTime: null,
    });
    // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败错误提示
    const myschema = {
      qybdate: schema.qybdate,
      qybname: schema.qybname,
      qybclassNum: schema.qybclassNum,
      qybSex: schema.qybSex,
      qybschool: schema.qybschool,
      qybphone: schema.qybphone,
      qybFreetime: schema.qybFreetime,
    };
    const commituserQingyubiao = async () => {
      console.log(formCom.value);
      const valid = await formCom.value.validate();
      if (valid) {
        userQingyubiao(userForm).then((res) => {
          const data = res.data;
          console.log(data);
          if (data.status == 1) {
            Message({ type: "error", text: "请准确填写个人信息" });
          } else if (data.status == 0) {
            Message({ type: "success", text: "晴雨表已提交·" });
            location.reload();
          }
        });
      }
    };

    const changeFillBtn = () => {
      showBarometerForm.value = !showBarometerForm.value;
    };
    const changechatWindow = () => {
      showchatWindowRoom.value = !showchatWindowRoom.value;
    };
    const changefacePrint = () => {
      showfacePrint.value = !showfacePrint.value;
    };
    const changeShowfilecommit = () => {
      showfilecommit.value = !showfilecommit.value;
    };
    //获取文件数组
    const getfile = (e) => {
      let target = e.target;
      for (let i = 0; i < target.files.length; i++) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[i]);
        form.files.push(target.files[i]);
        // fileReader.result可以用来判断文件类型
        /*  fileReader.onload = function () {
          console.log(fileReader.result);
          let filetype = fileReader.result.slice(5, 10); //video  image
          console.log(filetype);
        }; */
      }
    };
    // 发送到后台
    const commitFile = async () => {
      console.log(form);
      if (form.classNum == "") {
        console.log(form.classNum);
        Message({ type: "warn", text: "请先输入班级号" });
      } else if (form.files.length == 0) {
        console.log(form.files.length);
        Message({ type: "warn", text: "请上传文件" });
      } else {
        let formData = new FormData();
        console.log(form.classNum);
        console.log(form.files);
        formData.append("classNum", form.classNum);
        for (let i = 0; i < form.files.length; i++) {
          formData.append("file", form.files[i]);
        }
        console.log(formData.getAll("file"));
        await loadfiles(formData)
          .then((res) => {
            Message({ type: "success", text: "上传成功" });
            console.log(res.data);
            showfilecommit.value = !showfilecommit.value;
            form.classNum = "";
          })
          .catch(() => {
            Message({ type: "error", text: "上传失败" });
          });
      }
    };
    function handleMessage(e) {
      console.log(e); //{"type":"text","id":"6"}
      const _msgdata = JSON.parse(e.data);
      msgList.push(_msgdata);
    }
    return {
      showBarometerForm,
      showchatWindowRoom,
      showfacePrint,
      showfilecommit,
      form,
      formCom,
      userForm,
      emoij,
      msgList,
      schema: myschema,
      changeFillBtn,
      changechatWindow,
      changefacePrint,
      changeShowfilecommit,
      getfile,
      worker,
      fuwenbenMsg,
      handleSendBtn,
      ws,
      commitFile,
      commituserQingyubiao,
      handleMessage,
    };
  },
};
</script>

<style scoped src="../../assets/styles/scss/chatRoom.css">
/* 
import 的权重比较高，会自动越过scoped，变成全局，正确引入应该是上面那种
@import url("../../assets/styles/scss/chatRoom.css"); 
*/
</style>