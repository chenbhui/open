<template>
  <!-- banner -->
  <div class="w">
    <div class="aboutus-show">
      <div class="aboutus-show-img"></div>
      <div class="aboutus-show-text">
        <h3>We are together</h3>
        <h3>forever</h3>
        <p class="essey">
          No matter how dark the moment is, love and expectation are always
          ahead. The world is very simple, so is life.We want everyone to live
          better! Do you want to join in us?
        </p>
        <div class="btnOPEN">COME ON</div>
      </div>
    </div>
    <div class="banner">
      <div class="meet">Meet the owner</div>
      <div class="myselfAnnouncement">
        <div class="myself-show">
          <div class="myself-show-li">
            <div class="myself-show-li-img">
              <img src="../../assets/images/authorPhoto.jpg" alt="" />
            </div>
            <div class="myself-show-li-text">
              <div class="myself-show-li-text-card">
                Chen Binghui, female, is now a student of the first class of
                software engineering in the school of Internet Finance and
                information engineering. She served as a psychological member in
                the last academic year and led the class to the first place in
                psychological activities in the school. Strictly abide by the
                rules and regulations of the college and won the military
                training advanced individual award in the military training. At
                the same time, he is now the deputy director of the practice
                department of the Party Construction Office of the college. He
                works steadily and is also an activist to join the party.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="readus-img"></div>
      <div class="editdata">let us together</div>
      <div class="joinus">
        <div class="beauty"></div>
        <div class="editBox">
          <form action="" id="editData">
            <div class="editSex">
              <label for="">??????</label>
              <div class="sexBox">
                <div class="sexsmall">
                  <input
                    type="radio"
                    id="radio1"
                    name="radio"
                    checked="checked"
                  />
                  <label for="radio1">???</label>
                </div>
                <div class="sexsmall">
                  <input type="radio" id="radio2" name="radio" />
                  <label for="radio2">???</label>
                </div>
              </div>
            </div>
            <div class="editname">
              <label for="">??????</label>
              <div class="enBox">
                <input type="text" placeholder="?????????" />
              </div>
            </div>

            <div class="editphone">
              <label for="">??????</label>
              <div class="epBox">
                <input type="text" placeholder="1234567" />
              </div>
            </div>
            <div class="editClassnum">
              <label for="">??????</label>
              <div class="ecBox">
                <input type="text" placeholder="201549101" />
              </div>
            </div>
            <div class="editadddress">
              <label for="">??????</label>
              <div class="eaBox">
                <!-- ????????????????????? -->
                <input type="text" placeholder="??????????????????????????????" />
              </div>
            </div>
            <div class="edittext">
              <label for="">??????</label>
              <div class="enBox">
                <input type="text" placeholder="???????????????????????????????????????" />
              </div>
            </div>
            <div id="commitdata" @click="closeEdit">????????????</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "myself",
  setup() {
    const closeEdit = () => {};
    return {
      closeEdit,
    };
  },
};
</script>

<style scoped src="../../assets/styles/scss/aboutus.css">
</style>