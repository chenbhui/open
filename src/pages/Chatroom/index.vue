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
              <form action="">
                <div class="commitCode">
                  <input type="text" placeholder="输入班级代号" />
                </div>
                <div class="commitConfirm" @click="changeShowfilecommit">
                  Upload
                </div>
                <!-- 上传区域 -->
                <div class="classCommit" v-if="showfilecommit">
                  <div class="fileBox">
                    <div class="loadBox">
                      <input type="file" multiple="multiple" />
                      <p class="picture iconfont icon-segi-icon-download"></p>
                    </div>
                    <div
                      class="closeload iconfont icon-guanbi"
                      @click="changeShowfilecommit"
                    ></div>
                    <div class="filecommitBtn">Commit</div>
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
                <h3>Tomtu</h3>
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
              <div class="chat-show-my clearfix">
                <div class="chat-show-Photo">
                  <img src="img/doctorPhoto2.jpg" alt="" />
                </div>
                <div class="Say">hhi!今天过得怎么样</div>
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
                  <div class="chat-fuWenBen" contenteditable="true"></div>
                  <textarea
                    name="message"
                    id="content"
                    style="display: none"
                  ></textarea>
                </div>
                <div class="facePrint" v-if="showfacePrint">
                  <ul class="facePrintUl">
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div class="chatWindowRoom-footer">Power by Open</div>
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
              <form action="">
                <div class="editdate">
                  <label for="">日期：</label>
                  <div class="editdateBox">
                    <input type="text" placeholder="例：2022/5/12" />
                  </div>
                </div>
                <div class="editname">
                  <label for="">姓名：</label>
                  <div class="editnameBox">
                    <input type="text" placeholder="请输入真实姓名" />
                  </div>
                </div>
                <div class="editclass">
                  <label for="">班级学号：</label>
                  <div class="editclassBox">
                    <input type="text" placeholder="例：201549101" />
                  </div>
                </div>
                <div class="editsex">
                  <label for="">性别：</label>
                  <div class="editsexBox">
                    <input type="text" placeholder="例：男" />
                  </div>
                </div>
                <div class="editaddress">
                  <label for="">所在学校校区：</label>
                  <div class="editaddressBox">
                    <input type="text" placeholder="例：广东金融学院广州校区" />
                  </div>
                </div>
                <div class="editphone">
                  <label for="">手机号码：</label>
                  <div class="editphoneBox">
                    <input type="text" placeholder="请输入手机号码" />
                  </div>
                </div>
                <div class="editevent">
                  <label for="">想要说：</label>
                  <div class="editeventBox">
                    <div
                      class="editeventBox-fuWenBen"
                      contenteditable="true"
                    ></div>
                  </div>
                </div>
                <div class="editfree">
                  <label for="">空档期：</label>
                  <div class="editfreeBox">
                    <input type="text" placeholder="例：周五有空" />
                  </div>
                </div>
                <!-- 提交按钮 -->
                <button class="Barometer-form-commit" type="button">
                  提交
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Chatroom",
  setup() {
    const showBarometerForm = ref(false);
    const showchatWindowRoom = ref(false);
    const showfacePrint = ref(false);
    const showfilecommit = ref(false);
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
    return {
      showBarometerForm,
      showchatWindowRoom,
      showfacePrint,
      showfilecommit,
      changeFillBtn,
      changechatWindow,
      changefacePrint,
      changeShowfilecommit,
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