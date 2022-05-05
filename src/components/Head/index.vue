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
          <li><a href="javascript:;">PSY SERVICE</a></li>
          <li><a href="javascript:;">DECOMPRESSION</a></li>
          <li><a href="javascript:;">PSY KNOWLEDGE</a></li>
          <li><a href="javascript:;">ABOUT US</a></li>
          <li><router-link to="/login">SIGN IN</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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