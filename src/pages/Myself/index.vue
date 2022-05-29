<template>
  <!-- banner -->
  <div class="w">
    <div class="banner">
      <div class="myselfAnnouncement">
        <div class="myself-show">
          <div class="myself-show-li">
            <div class="myself-show-li-img">
              <img src="../../assets/images/7画家兔-rgb.png" alt="" />
            </div>
            <div class="myself-show-li-text">
              <div class="myself-show-li-text-card">
                <ul>
                  <li>
                    <div class="myself-text-card-head">Tomtutu</div>
                  </li>
                  <li>
                    <div class="myself-text-card-head">陈冰冰</div>
                  </li>
                  <li>
                    <div class="myself-text-card-head">201549101</div>
                  </li>
                  <li>
                    <div class="myself-text-card-head">
                      广东金融学院广州校区
                    </div>
                  </li>
                  <li>
                    <div class="myself-text-card-head">
                      天王盖地虎，我是可爱的老鼠
                    </div>
                  </li>
                </ul>
              </div>
              <div class="editdata" @click="showmy">编辑资料</div>
            </div>
          </div>
        </div>
        <div class="editBox" v-show="editdata">
          <form action="" id="editData">
            <div class="editNickname">
              <label for="">昵称</label>
              <div class="ennBox">
                <input type="text" placeholder="Tomtutu" />
              </div>
            </div>
            <div class="editname">
              <label for="">姓名</label>
              <div class="enBox">
                <input type="text" placeholder="陈冰冰" />
              </div>
            </div>
            <div class="editSex">
              <label for="">性别</label>
              <div class="sexBox">
                <div class="sexsmall">
                  <input
                    type="radio"
                    id="radio1"
                    name="radio"
                    checked="checked"
                  />
                  <label for="radio1">男</label>
                </div>
                <div class="sexsmall">
                  <input type="radio" id="radio2" name="radio" />
                  <label for="radio2">女</label>
                </div>
              </div>
            </div>
            <div class="editClassnum">
              <label for="">学号</label>
              <div class="ecBox">
                <input type="text" placeholder="201549101" />
              </div>
            </div>
            <div class="editadddress">
              <label for="">校区</label>
              <div class="eaBox">
                <!-- 默认是老的昵称 -->
                <input type="text" placeholder="广东金融学院广州校区" />
              </div>
            </div>
            <div class="edittext">
              <label for="">简介</label>
              <div class="enBox">
                <input type="text" placeholder="天王盖地虎，我是可爱的老鼠" />
              </div>
            </div>
            <div id="commitdata" @click="closeEdit">保存</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { Form, Field } from "vee-validate";
export default {
  name: "myself",
  setup() {
    const editdata = ref(false);
    const showmy = () => {
      editdata.value = !editdata.value;
    };
    const closeEdit = () => {
      editdata.value = !editdata.value;
    };

    return {
      editdata,
      showmy,
      closeEdit,
    };
  },
};
</script>

<style scoped src="../../assets/styles/scss/myself.css">
</style>