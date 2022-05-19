<template>
  <div class="my-pagination">
    <a
      href="javascript:;"
      :class="{ disabled: currentPage === 1 }"
      @click="changePage(false)"
      >上一页</a
    >
    <span v-if="currentPage > 3">...</span>
    <a
      href="javascript:;"
      v-for="item in list"
      :key="item"
      :class="{ active: currentPage === item }"
      @click="changePage(item)"
      >{{ item }}</a
    >
    <span v-if="currentPage < pages - 2">...</span>
    <a
      href="javascript:;"
      :class="{ disabled: currentPage === pages }"
      @click="changePage(true)"
      >下一页</a
    >
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "MyPagination",
  props: {
    // 用来传递数据总条数
    total: {
      type: Number,
      default: 16,
    },
    //每页展示几条数据
    pagesize: {
      type: Number,
      default: 4,
    },
  },
  // emit: ["change-page"],
  setup(props, { emit, attrs }) {
    //  currentPage当前默认页码
    const currentPage = ref(attrs.currentPage);
    // 计算总页数
    const pages = computed(() => Math.ceil(props.total / props.pagesize));
    // 页码显示组合
    const list = computed(() => {
      const result = [];
      // 总页数小于等于4页的时候
      if (pages.value <= 4) {
        for (let i = 1; i <= pages.value; i++) {
          result.push(i);
        }
      } else {
        // 总页数大于4页的时候
        // 控制两个极端那边的省略号的有无，页码的显示个数与选中页码居中
        if (currentPage.value <= 2) {
          for (let i = 1; i <= 4; i++) {
            result.push(i);
          }
        } else if (
          currentPage.value >= 3 &&
          currentPage.value <= pages.value - 2
        ) {
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i);
          }
        } else if (currentPage.value > pages.value - 2) {
          for (let i = pages.value - 4; i <= pages.value; i++) {
            result.push(i);
          }
        }
      }
      return result;
    });

    //(changePage 事件 ：页码改变时触发的事件，参数为当前页码)
    // 点击上一页下一页页码改变页码
    const changePage = (type) => {
      // 点击上一页按钮
      if (type === false) {
        if (currentPage.value <= 1) return;
        currentPage.value -= 1;
      } else if (type === true) {
        // 点击下一页按钮
        if (currentPage.value >= pages.value) return;
        currentPage.value += 1;
      } else {
        // 点击页码
        currentPage.value = type;
      }
      // 传给父组件当前页码，可以在该事件中做相关操作
      //  attr.emit("change-page", currentPage.value);
      emit("change-page", currentPage.value);
    };
    return { currentPage, pages, list, changePage };
  },
};
</script>
<style scoped>
.my-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.my-pagination a {
  display: inline-block;
  width: auto;
  height: 45px;
  padding: 0 16px;
  margin: 0 10px;
  text-align: center;
  line-height: 45px;
  border: 1px solid #ffe284;
  border-radius: 4px;
  border-radius: 5px;
  background: #fff;
  color: #ffe284;
  font-size: 18px;
  font-weight: bold;
}
.my-pagination a:hover {
  color: #ffd867;
  background: #fcf7f1;
}
.my-pagination a.active {
  background: #ffe284;
  color: #fff;
}
.my-pagination a.disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
.my-pagination a.disabled:hover {
  color: #333;
}
.my-pagination span {
  margin-right: 3px;
  line-height: 24px;
  font-size: 31px;
  color: #ffe284;
}
</style>