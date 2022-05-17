<template>
  <!-- 头部 -->
  <header class="header">
    <div class="wrap header-wrap">
      <div class="title-area">
        <router-link to="/home">
          <img src="../../assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <div class="widget-area">
        <ul class="nav">
          <li><router-link to="/chatroom">PSY SERVICE</router-link></li>
          <li><a href="javascript:;">DECOMPRESSION</a></li>
          <li><router-link to="/knowledge">PSY KNOWLEDGE</router-link></li>
          <li><a href="javascript:;">ABOUT US</a></li>
          <!-- router-link是声明式导航，无法有其他业务逻辑，只能跳转，编程式导航（replace、push）才能有其他业务 -->
          <li><router-link to="login">SIGN IN</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  setup() {},
};
</script>

<style scoped>
.header {
  width: 100%;
  background: #ffe284;
  height: 80px;
}

.wrap {
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  max-width: 1300px;
  padding: 10px;
}

.title-area {
  float: left;
  display: block;
  position: relative;
  top: -6px;
  width: 250px;
  max-width: 250px;
  height: 100%;
}

.title-area a {
  width: 100%;
  height: 100%;
}

.title-area img {
  width: 97%;
  height: 122%;
}

.widget-area {
  float: right;
  width: 760px;
  max-width: 760px;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav li {
  height: 100%;
}

.nav li a {
  height: 100%;
  line-height: 60px;
  font-size: 17px;
  letter-spacing: 1px;
}
</style>