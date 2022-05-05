<template>
  <Head v-if="$route.path == '/home'"></Head>
  <!-- 路由组件出口的地方 -->
  <router-view> </router-view>
  <Foot v-if="$route.path == '/home'"></Foot>
</template>

<script>
import Head from "./components/Head";
import Foot from "./components/Foot";
export default {
  name: "App",
  components: {
    Head,
    Foot,
  },
  mounted() {},
};
</script>

<style>
</style>
