<template>
  <div class="home">
    <HomeBackground />
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav> -->
    <div class="container">
      <div>
        <div class="title my-5">
          <h2><span>Đề xuất</span> cho bạn</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>

      <div>
        <div class="title my-5">
          <h2><span>Top </span>thịnh hành</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>

      <div>
        <div class="title my-5">
          <h2><span>Mới </span>nhất</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>

      <div class="middle-background my-5">
        <img src="../assets/middle-bankground.png" alt="">
      </div>

      <div>
        <div class="title mb-5">
          <h2><span>Đừng sợ</span> nó chỉ là những câu truyện ...</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      
      <div>
        <div class="title my-5">
          <h2><span>Top 100 </span> cuốn sách mọi thời đại</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>

      <div id="bn" class="carousel carousel-dark slide my-5" data-bs-ride="carousel">
        <div class="carousel-indicators bn-button a">
          <button type="button" data-bs-target="#bn" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#bn" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#bn" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_1.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_2.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_3.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_2.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_3.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_1.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_3.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_1.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="bn-img">
                  <img src="../assets/bn_2.png" alt="">
                  <h5 class="mt-3">Discover A New Club</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#bn" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#bn" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBackground from "../components/HomeBackground.vue";
import BookCard from "../components/BookCard.vue";

export default {
  name: "Home",
  components: {
    HomeBackground,
    BookCard,
  },
  data: () => {
    return {
      bookapi: [
        {
          _id: 1,
          img: "https://images-eu.ssl-images-amazon.com/images/I/51Pw6joFN7L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 2,
          img: "https://images-na.ssl-images-amazon.com/images/I/41jf0Rju1fL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 3,
          img: "https://images-na.ssl-images-amazon.com/images/I/51xrf2zIIkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 4,
          img: "https://images-na.ssl-images-amazon.com/images/I/51XAvq6Hw9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 5,
          img: "https://m.media-amazon.com/images/I/512W0wi6lZL._SY346_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
      ]
    }
  }
};
</script>
