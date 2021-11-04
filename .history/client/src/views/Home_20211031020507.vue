<template>
  <div>
    <Header />
    <router-view />
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
      bookapi: [
        {
          _id: 1,
          img: "https://images-eu.ssl-images-amazon.com/images/I/51Pw6joFN7L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 2,
          img: "https://images-na.ssl-images-amazon.com/images/I/41jf0Rju1fL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 3,
          img: "https://images-na.ssl-images-amazon.com/images/I/51xrf2zIIkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 4,
          img: "https://images-na.ssl-images-amazon.com/images/I/51XAvq6Hw9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 5,
          img: "https://m.media-amazon.com/images/I/512W0wi6lZL._SY346_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
      ],
    };
  },
};
</script>
