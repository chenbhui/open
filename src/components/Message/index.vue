<template>
  <Transition name="down">
    <div class="message" :style="style[type]" v-show="visible">
      <!-- 上面绑定的是样式 -->
      <!-- 不同提示图标会变 :class="['icon-warning']" :class="{'icon-warning':true}]"-->
      <p class="iconfont text" :class="[style[type].icon]">{{ text }}</p>
    </div>
  </Transition>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "message",
  props: {
    type: {
      type: String,
      default: "warn",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    //   控制元素隐藏
    const visible = ref(false);
    onMounted(() => {
      visible.value = true;
    });
    //   定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon: "icon-jinggao",
        color: "#E6A23C",
        backgroundColor: "rgb(253,246,236)",
        borderColor: "rgb(250,236,216)",
      },
      error: {
        icon: "icon-error",
        color: "#f56c6c",
        backgroundColor: "rgb(254,240,240)",
        borderColor: "rgb(253,226,226)",
      },
      success: {
        icon: "icon-chenggong",
        color: "#67c23a",
        backgroundColor: "rgb(240,249,235)",
        borderColor: "rgb(225,243,216)",
      },
    };
    return {
      style,
      visible,
    };
  },
};
</script>

<style scoped>
.message {
  position: fixed;
  left: 50%;
  top: 25px;
  min-width: 250px;
  height: 40px;
  margin-left: -125px;
  line-height: 40px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  z-index: 9999;
}
.text {
  font-size: 13px;
}
.iconfont:before {
  margin-right: 10px;
}
.down-enter-from {
  transform: translateY(-75px);
  opacity: 0;
}
.down-enter-active {
  transition: all 0.5s;
}
.down-enter-to {
  transform: none;
  opacity: 1;
}
</style>