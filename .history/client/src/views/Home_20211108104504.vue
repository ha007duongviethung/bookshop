<template>
  <div>
    <Header />
    <div class="home content">
      <HomeBackground />

      <div class="container">
        <div>
          <div class="title my-5">
            <h2><span>Đề xuất</span> cho bạn</h2>
          </div>
          <div class="row">
            <BookCard v-for="book in booksForYou" :key="book._id" :book="book" />
          </div>
        </div>

        <div>
          <div class="title my-5">
            <h2><span>Top </span>thịnh hành</h2>
          </div>
          <div class="row">
            <BookCard v-for="book in booksTrading" :key="book._id" :book="book" />
          </div>
        </div>

        <div>
          <div class="title my-5">
            <h2><span>Mới </span>nhất</h2>
          </div>
          <div class="row">
            <BookCard v-for="k in 6" :key="booksNew[k-1]._id" :book="booksNew[k-1]" />
          </div>
        </div>

        <div class="middle-background my-5">
          <img src="../assets/middle-bankground.png" alt="" />
        </div>

        <div>
          <div class="title mb-5">
            <h2><span>Đừng sợ</span> nó chỉ là những câu truyện ...</h2>
          </div>
          <div class="row">
            <BookCard v-for="book in booksHorror" :key="book._id" :book="book" />
          </div>
        </div>

        <div>
          <div class="title my-5">
            <h2><span>Top 100 </span> cuốn sách mọi thời đại</h2>
          </div>
          <div class="row">
            <BookCard v-for="book in booksTop" :key="book._id" :book="book" />
          </div>
        </div>

        <div>
          <div class="title my-5">
            <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
          </div>
          <div class="row">
            <BookCard v-for="book in booksCombo" :key="book._id" :book="book" />
          </div>
        </div>

        <div
          id="bn"
          class="carousel carousel-dark slide my-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators bn-button">
            <button
              type="button"
              data-bs-target="#bn"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#bn"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#bn"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_1.png" alt="" />
                    <h5 class="mt-3">Tạo không gian đọc sách</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_2.png" alt="" />
                    <h5 class="mt-3">Cách đọc sách hiệu quả</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_3.png" alt="" />
                    <h5 class="mt-3">Khám phá một câu lạc bộ mới</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_2.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_3.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_1.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_3.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_1.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="bn-img">
                    <img src="../assets/bn_2.png" alt="" />
                    <h5 class="mt-3">Discover A New Club</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import HomeBackground from "../components/HomeBackground.vue";
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import BookAPI from "../api/book";

export default {
  name: "Home",
  components: {
    HomeBackground,
    BookCard,
    Header,
    Footer,
    BackToTop,
  },
  data: () => {
    return {
      booksForYou: [],
      booksTrading: [],
      booksNew: [],
      booksHorror: [],
      booksTop: [],
      booksCombo: [],
    };
  },
  async created() {
    this.booksForYou = await BookAPI.getBooksForMeHome()
    this.booksTrading = await BookAPI.getBooksTradingHome()
    this.booksNew = await BookAPI.getBooksNewHome()
    this.booksHorror = await BookAPI.getBookHorrorHome()
    this.booksTop = await BookAPI.getBookTopHome()
    this.booksCombo = await BookAPI.getBookComboHome()
  },
};
</script>
