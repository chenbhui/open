<template>
  <!-- footer -->
  <footer class="footer">
    <div class="footer-publish">
      <p class="copyright">Copyright &copy; | All Rights Reserved</p>
      <p class="slogan">love and expectation are ahead</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot2",
  setup() {},
};
</script>

<style scoped>
/* 尾部 */
.footer {
  width: 100%;
  background: #ffe284;
}

.footer-publish {
  width: 100%;
  height: 100px;
  padding-top: 30px;
  text-align: center;
  background: #f9f9f9;
}

.footer-publish .copyright {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>