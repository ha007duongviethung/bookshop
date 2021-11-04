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
      <div>
        <div class="title my-5">
          <h2><span>Đề xuất</span> cho bạn</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="middle-background">
        <img src="../assets/middle-bankground.png" alt="">
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
