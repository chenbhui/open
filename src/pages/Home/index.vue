<template>
  <!-- banner -->
  <div class="w">
    <div class="banner">
      <div class="summer">
        <div class="summer-show">
          <div class="summer-show-img">
            <img src="../../assets/images//home1.svg" alt="" />
          </div>
          <div class="summer-show-text">
            <h3>love and expectation</h3>
            <h3>are ahead</h3>
            <p class="essey">
              No matter how dark the moment is, love and expectation are always
              ahead. The world is very simple, so is life.
            </p>
            <div class="btnOPEN">EXPLORE OPEN</div>
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="cooperation-sign">
        <img src="../../assets/images/company.jpg" alt="" />
      </div>
      <!-- 服务咨询介绍 -->
      <div class="psy-service">
        <div class="service-show">
          <div class="service-show-text">
            <h3>psychological service</h3>
            <h3>are ahead</h3>
            <p class="essey">
              We help the person who needs help to resolve their inner emotions.
              Speak out your troubles in the form of a barometer.
            </p>
            <div class="btnOPEN">Read more</div>
          </div>
          <div class="service-show-img">
            <img src="../../assets/images/psyservice.svg" alt="" />
          </div>
        </div>
      </div>
      <!-- 减压模块 -->
      <div class="decompression">
        <div class="decompression-wrap">
          <div class="decompression-wrap-show">
            <div class="iconfont icon-youxiyouxiji decompresssion-img"></div>
            <div class="decompression-text">
              <div class="decompression-text-head">game</div>
              <div class="decompression-text-descri">
                We help the person who needs help to resolve their inner
                emotions
              </div>
            </div>
          </div>
          <div class="decompression-wrap-show">
            <div
              class="iconfont icon-a-yinlebofangliebiaoyinle decompresssion-img"
            ></div>
            <div class="decompression-text">
              <div class="decompression-text-head">game</div>
              <div class="decompression-text-descri">
                We help the person who needs help to resolve their inner
                emotions
              </div>
            </div>
          </div>
          <div class="decompression-wrap-show">
            <div class="iconfont icon-chengbao-xian decompresssion-img"></div>
            <div class="decompression-text">
              <div class="decompression-text-head">game</div>
              <div class="decompression-text-descri">
                We help the person who needs help to resolve their inner
                emotions
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 科普方面 -->
      <div class="psy-knowledge">
        <h3>Gain the full control over reaching your leads</h3>
        <div class="knowledge-show">
          <div class="knowledge-show-book">
            <div class="knowledge-show-img">
              <img src="../../assets/images/knowledgeBook.jpg" alt="" />
            </div>
            <div class="knowledgev-show-text">
              <h4>Auto-schedule your books</h4>
              <p>you may defind the number of attempt youer agent</p>
              <p>you may defind the number of attempt</p>
              <p>you may defind the number of attempt youer agent</p>
              <p>you may defind the</p>
            </div>
          </div>
          <div class="knowledge-show-case">
            <div class="knowledge-show-img">
              <img src="../../assets/images/knowlegeCase.jpg" alt="" />
            </div>
            <div class="knowledge-show-text">
              <div class="knowledgev-show-text">
                <h4>Auto-schedule your books</h4>
                <p>you may defind the number of attempt youer agent</p>
                <p>you may defind the number of attempt</p>
                <p>you may defind the number of attempt youer agent</p>
                <p>you may defind the</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 关于我们 -->
      <div class="readus">
        <div class="readus-img"></div>
        <div class="readus-text">
          <div class="readus-text-card">
            <h3>Meet the owner</h3>
            <p class="card-little-head">yes,we even have the same name.</p>
            <div class="readus-author">
              <div class="readus-author-img">
                <img src="../../assets/images/authorPhoto.jpg" alt="" />
              </div>
              <div class="readus-author-text">
                <p>
                  Chen Binghui, female, is now a student of the first class of
                  software engineering in the school of Internet Finance and
                  information engineering. She served as a psychological member
                  in the last academic year and led the class to the first place
                  in psychological activities in the school. Strictly abide by
                  the rules and regulations of the college and won the military
                  training advanced individual award in the military training.
                  At the same time, he is now the deputy director of the
                  practice department of the Party Construction Office of the
                  college. He works steadily and is also an activist to join the
                  party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* banner */
.banner {
  margin: 0 auto;
}

.banner > div {
  padding: 0 50px;
}

.psy-knowledge {
  margin-top: 50px;
}

.summer-show,
.service-show,
.knowledge-show {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 555px;
}

.knowledge-show {
  height: 660px;
  padding: 88px 80px 0 80px;
}

.summer-show > div,
.service-show > div,
.knowledge-show > div {
  flex: 1;
}

.summer-show-img,
.service-show-img {
  padding: 80px 50px 30px 50px;
}

.summer-show-img img,
.service-show-img img {
  width: 100%;
  height: 100%;
}

.service-show-text,
.summer-show-text {
  position: relative;
  padding: 110px 30px;
  text-align: center;
}

.service-show-text h3,
.summer-show-text h3 {
  font-size: 39px;
  color: #ff4d4d;
}

.service-show-text p,
.summer-show-text p {
  margin-top: 50px;
  font-size: 20px;
  color: #000;
}

.service-show-text .btnOPEN,
.summer-show-text .btnOPEN {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 245px;
  height: 60px;
  margin-top: 80px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background: rgba(255, 77, 77, 0.8);
}

.cooperation-sign {
  width: 100%;
  height: 80px;
  margin-top: 55px;
  background: #fafafa;
}

.cooperation-sign img {
  width: 100%;
}

.psy-knowledge h3 {
  width: 100%;
  text-align: center;
  font-size: 32px;
}

.knowledge-show > div {
  margin: 0 36px;
  border-radius: 7px;
  box-shadow: 0px 0px 5px#ccc;
  background: #fff;
}

.knowledge-show-img {
  width: 100%;
  padding: 0 30px;
}

.readus-author-img img,
.knowledge-show-img img {
  width: 100%;
}

.knowledgev-show-text {
  width: 100%;
  text-align: center;
}

.knowledgev-show-text h4 {
  margin: 48px 0 19px 0;
  font-size: 23px;
}

.knowledgev-show-text p {
  line-height: 23px;
  font-size: 16px;
  color: #535353;
}

/* 减压模块 */
.decompression {
  width: 100%;
  height: 400px;
  padding: 0 50px;
  background: #ffe284;
}

.decompression-wrap {
  display: flex;
  width: 995px;
  max-width: 995px;
  height: 100%;
  margin: 0 auto;
}

.decompression-wrap-show {
  flex: 1;
  margin: 20px 10px;
  text-align: center;
}

.decompresssion-img {
  width: 100px;
  height: 100px;
  margin: 45px auto 32px;
}

.decompression-wrap-show .iconfont:before {
  color: #fff;
  font-size: 100px;
}

.decompression-text-head {
  margin-bottom: 30px;
  font-size: 27px;
  font-weight: 600;
}

.decompression-text-descri {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 1px;
}

/* 关于我们 */
.readus {
  width: 100%;
  margin-top: 80px;
}

.readus-img {
  width: 100%;
  height: 500px;
  background: url(../../assets/images/aboutus.svg) center center no-repeat;
}

.readus-text {
  position: relative;
  top: -20px;
  width: 100%;
  height: 400px;
}

.readus-text-card {
  width: 917px;
  height: 370px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  background: #fbf7f1;
}

.readus-text h3 {
  font-size: 32px;
}

.readus-text p {
  margin-top: 5px;
  font-size: 15px;
}

.readus-text-card > div {
  display: flex;
  margin: 30px auto 0 auto;
  width: 758px;
  height: 221px;
}

.readus-author-img {
  width: 221px;
  height: 221px;
  margin-right: 45px;
}

.readus-author-text {
  width: 505px;
  height: 221px;
}

.readus-author-text p {
  text-align: left;
  word-spacing: 3px;
  letter-spacing: 0.3px;
  font-size: 15px;
  color: #134160;
}
</style>