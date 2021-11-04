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
      <div class="title my-5">
        <h2><span>Đề xuất</span> cho bạn</h2>
      </div>
      <div class="row">
        <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
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
          img: "../../assets/book1.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 2,
          img: "../../assets/book2.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 3,
          img: "../../assets/book3.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 4,
          img: "../../assets/book4.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 5,
          img: "../../assets/book5.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "../../assets/book6.png",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
      ]
    }
  }
};
</script>
