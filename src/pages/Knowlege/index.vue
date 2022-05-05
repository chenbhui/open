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
            <div class="book-card">
              <div class="book-card-img">
                <img src="../../assets/images/book_21.jpg" alt="" />
              </div>
            </div>
            <div class="book-card">
              <div class="book-card-img">
                <img src="../../assets/images/book_22.jpg" alt="" />
              </div>
              <div class="book-card-text"></div>
            </div>
            <div class="book-card">
              <div class="book-card-img">
                <img src="../../assets/images/book_23.jpg" alt="" />
              </div>
              <div class="book-card-text"></div>
            </div>
            <div class="book-card">
              <div class="book-card-img">
                <img src="../../assets/images/book_24.jpg" alt="" />
              </div>
              <div class="book-card-text"></div>
            </div>
          </div>
          <div class="switch">
            <ul>
              <li>&lt;</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>></li>
            </ul>
          </div>
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
                  <li>
                    <div class="science-text-card-head">
                      I have a boat that can ferry you away from the fallen
                      river
                    </div>
                    <div class="science-text-card-body">May special issue</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      I was trapped in the confusion of 20 years old and
                      couldn't find myself
                    </div>
                    <div class="science-text-card-body">May special issue</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      When psychology collides with art, welcome to the world of
                      zhuanxun
                    </div>
                    <div class="science-text-card-body">May special issue</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      Here comes the blind box of consultation letter ~ please
                      recite your lucky numbers!
                    </div>
                    <div class="science-text-card-body">May special issue</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      it's not so bad to say that you don't obey the coerced
                      choice
                    </div>
                    <div class="science-text-card-body">Lilushu</div>
                  </li>
                </ul>
              </div>
              <div class="science-show-li-text-card">
                <ul>
                  <li>
                    <div class="science-text-card-head">
                      please live well even for "me"
                    </div>
                    <div class="science-text-card-body">Depression</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      You are not "glass heart", just highly sensitive
                    </div>
                    <div class="science-text-card-body">Sensitive</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      What are we doing when we're on CP?
                    </div>
                    <div class="science-text-card-body">Love observer</div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      At the beginning of the school season, the unaccepted self
                      is the biggest enemyv
                    </div>
                    <div class="science-text-card-body">
                      At the beginning of the school season
                    </div>
                  </li>
                  <li>
                    <div class="science-text-card-head">
                      PUA against incomplete guidelines
                    </div>
                    <div class="science-text-card-body">PUA against</div>
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
export default {
  name: "Knowledge",
};
</script>

<style scoped>
/* banner */
.banner {
  margin: 0 auto;
}

.summer {
  padding: 0 50px;
  background: #fdf4cf;
}

.summer-show {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 555px;
}

.summer-show > div {
  flex: 1;
}

.summer-show-img {
  padding: 80px 50px 0px 50px;
}

.summer-show-img img {
  width: 100%;
  height: 100%;
}

.summer-show-text {
  position: relative;
  padding: 110px 30px;
  text-align: center;
}

.summer-show-text h3 {
  font-size: 39px;
  color: #ff4d4d;
}

.summer-show-text p {
  margin-top: 50px;
  font-size: 20px;
  color: #000;
}

.bookList,
.scienceAnnouncement {
  width: 100%;
}

.booklist-show,
.science-show {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fcf7f1;
}

.booklist-show h3,
.science-show h3 {
  width: 100%;
  font-size: 28px;
  text-align: center;
  padding: 30px;
  background: #fff;
}

.bookList-show-content {
  display: flex;
  padding-top: 45px;
}

.book-card {
  width: 308px;
  height: 400px;
  margin: 15px 17px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px#ccc;
  overflow: hidden;
  background: #fff;
}

.book-card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.book-card-img img {
  height: 98%;
  max-width: 100%;
  max-height: 100%;
}

.switch {
  width: 600px;
  margin: 50px auto;
  height: 50px;
}

.switch ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.switch ul > li {
  width: 45px;
  height: 45px;
  margin: 0 10px;
  line-height: 45px;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  color: #ffe284;
  font-size: 18px;
  font-weight: bold;
}

.science-show-li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
}

.science-show-li-img {
  width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
}

.science-show-li-img img {
  width: 100%;
}

.science-show-li-text {
  display: flex;
  justify-content: space-between;
  width: 864px;
  height: 400px;
  padding: 15px 30px;
  border-radius: 15px;
  background: #fff;
}

.science-show-li-text-card {
  width: 357px;
  height: 100%;
  background: pink;
}

.science-show-li-text-card li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 74px;
  padding-left: 60px;
  background: #fff;
}

.science-show-li-text-card li::before {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  content: "";
  width: 43px;
  height: 43px;
  border-radius: 3px;
  background: #ccc;
  background: url(../../assets/images/science-li-icon5.jpg) center center
    no-repeat;
  background-size: 80% 80%;
  overflow: hidden;
}

.science-show-li-text-card li > div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.science-text-card-head {
  font-size: 16px;
  font-weight: 545;
  margin-bottom: 6px;
}

.science-text-card-body {
  font-size: 13px;
}
</style>