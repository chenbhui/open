<template>
  <footer class="footer">
    <div class="footer-top">
      <!-- 加入我们 -->
      <!-- <div class="footer-wrap">
        <div class="footer-worker-detail">
          <h3>Our Mailing Address</h3>
          <h4>How can you find us</h4>
          <p>Email chenbinghuibbh@126.com</p>
          <p>Laboratory Building707</p>
          <p>49101</p>
          <p class="contact-us"><a href="javasctipt;;">CONTACT US</a></p>
          <p class="copyright">&copy; All Rights Reserved | Privary & Terms</p>
        </div>
        <div class="join-us">
          <h3>Join our psychology team</h3>
          <div class="write-data">
            <form action="">
              <div class="name"><input type="text" placeholder="name" /></div>
              <div class="Email"><input type="text" placeholder="Email" /></div>
              <div class="Grace"><input type="text" placeholder="Grace" /></div>
              <div class="class"><input type="text" placeholder="class" /></div>
              <div class="button"><button>LET ME IN</button></div>
            </form>
          </div>
          <div class="means">
            <p class="iconfont icon-facebookfacebook52"></p>
            <p class="iconfont icon-weibo1"></p>
            <p class="iconfont icon-in1"></p>
            <p class="iconfont icon-weixin"></p>
          </div>
        </div>
      </div> -->
    </div>
    <div class="footer-publish">
      <p class="copyright">Copyright &copy; | All Rights Reserved</p>
      <p class="slogan">love and expectation are ahead</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* 尾部 */
.footer {
  width: 100%;
  background: #ffe284;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  height: 390px;
  padding: 43px 30px;
  color: #fff;
}

.footer-worker-detail {
  width: 600px;
  height: 100%;
}

.footer-worker-detail h3,
.join-us h3 {
  margin-bottom: 20px;
  font-size: 24px;
}

.footer-worker-detail h4 {
  font-size: 22px;
}

.footer-worker-detail p {
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 1px;
}

.contact-us {
  margin: 33px 0 46px 0;
  font-size: 20px;
}

.join-us {
  width: 684px;
  height: 100%;
}

.join-us h3 {
  text-align: right;
}

.join-us .write-data {
  width: 100%;
}
.join-us .write-data form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.join-us .write-data form > div {
  width: 335px;
  height: 40px;
  margin-bottom: 27px;
  border-radius: 3px;
  background: #fff;
  overflow: hidden;
}

.join-us .write-data form > div input {
  width: 100%;
  height: 100%;
  line-height: 40px;
  padding: 0 10px;
}

.join-us .write-data form > div:last-child {
  width: 100%;
}

.join-us .write-data form > div:last-child button {
  width: 100%;
  height: 100%;
  font-size: 16px;
  letter-spacing: 1px;
  background: #fff;
}

.means {
  display: flex;
  justify-content: flex-end;
}

.means > p {
  width: 46px;
  height: 46px;
  margin-left: 11px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
}

.icon-weibo1:before,
.icon-in1:before,
.icon-weixin:before,
.icon-facebookfacebook52:before {
  font-size: 47px;
}

.footer-publish {
  width: 100%;
  height: 100px;
  padding-top: 30px;
  text-align: center;
  background: #ffe284;
}

.footer-publish .copyright {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>