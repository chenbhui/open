<template>
  <!-- banner -->
  <div class="w">
    <div class="banner">
      <!-- 总结 -->
      <div class="summer">
        <div class="summer-show">
          <div class="summer-show-text">
            <h3>Read more books</h3>
            <h3>more Perception</h3>
            <p class="essey">
              We cannot change the objective facts, but we can change the
              subjective interpretation at will. Moreover, we all live or live
              in the subjective world.
            </p>
            <!-- <div class="btnOPEN">EXPLORE OPEN</div> -->
          </div>
          <div class="summer-show-img">
            <img src="../../assets/images/psy-knowleage-book.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 书单展示 -->
      <div class="bookList">
        <div class="booklist-show">
          <h3>Delve in deeper</h3>
          <div class="bookList-show-content">
            <div class="book-card" v-for="item in Books" :key="item.id">
              <div class="book-card-img">
                <img :src="item.imgAddress" :title="item.title" />
              </div>
            </div>
          </div>
          <!-- 调用myPaginationVue组件 -->
          <myPaginationVue
            :total="bookInfo.total"
            :pagesize="bookInfo.pagesize"
            :currentPage="bookInfo.currentPage"
            @change-page="changePage"
          />
        </div>
      </div>
      <!-- 科普类公告 -->
      <div class="scienceAnnouncement">
        <div class="science-show">
          <h3>Popular science guide</h3>
          <div class="science-show-li">
            <div class="science-show-li-img">
              <img src="../../assets/images/psy-knowleage-book.png" alt="" />
            </div>
            <div class="science-show-li-text">
              <div class="science-show-li-text-card">
                <ul>
                  <li
                    v-for="item in News"
                    :key="item.id"
                    @click="GoHref(item.webAddress)"
                  >
                    <div class="science-text-card-head">
                      {{ item.title }}
                    </div>
                    <div class="science-text-card-body">
                      {{ item.periodical }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNew, getBook } from "@/utils/html";
import myPaginationVue from "@/components/my-pagination/my-pagination.vue";
export default {
  name: "Knowledge",
  components: {
    myPaginationVue,
  },
  setup() {
    let News = reactive([]);
    let Books = reactive([]);
    // 获取书籍列表的参数对象
    const bookInfo = reactive({
      query: "",
      //数据总条数
      total: 16,
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 4,
    });

    onMounted(() => {
      // 想要一进页面就发请求
      getNew().then((res) => {
        const data = res.data;
        console.log(data);
        //这里直接用News=data.data会失去响应式！！
        News.push(...data.data);
        console.log(News);
      });
      let { currentPage, pagesize } = bookInfo;
      getBook({ currentPage, pagesize }).then((res) => {
        const data = res.data;
        console.log(data);
        Books.push(...data.data);
      });
    });

    const GoHref = (e) => {
      // console.log(e); //获取点击的参数(url地址)
      /*  // 在本页面打开感觉不是很友好
      window.location.href = e; //在本页f面打开外部链接 */
      window.open(e, "_blank"); //在新窗口打开外链接
    };
    const changePage = (value) => {
      //value是点击的页码
      // console.log(value);
      bookInfo.currentPage = value;
      bookInfo.pagesize = 4;
      let { currentPage, pagesize } = bookInfo;
      getBook({ currentPage, pagesize }).then((res) => {
        const data = res.data;
        console.log(data);
        // 先把Books置空
        Books.length = 0;
        Books.push(...data.data);
      });
    };
    return {
      News,
      Books,
      bookInfo,
      GoHref,
      changePage,
    };
  },
};
</script>

<style scoped src="../../assets/styles/scss/knowledge.css">
</style>