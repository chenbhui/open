<template>
  <Head
    v-if="
      $route.path == '/home' ||
      $route.path == '/chatroom' ||
      $route.path == '/knowledge' ||
      $route.path == '/myself' ||
      $route.path == '/aboutus'
    "
  ></Head>
  <!-- 路由组件出口的地方 -->
  <router-view> </router-view>
  <Foot v-if="$route.path == '/home'"></Foot>
  <Foot2
    v-if="
      $route.path == '/knowledge' ||
      $route.path == '/chatroom' ||
      $route.path == '/myself' ||
      $route.path == '/aboutus'
    "
  ></Foot2>
</template>

<script>
import Head from "./components/Head";
import Foot from "./components/Foot";
import Foot2 from "./components/Foot2";
import request from "@/utils/request";
export default {
  name: "App",
  components: {
    Head,
    Foot,
    Foot2,
  },
  setup() {},
};
</script>

<style>
</style>
