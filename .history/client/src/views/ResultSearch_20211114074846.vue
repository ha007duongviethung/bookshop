<template>
  <div>
    <Header />
    <div class="newbook content">
      <div class="name-page">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Kết quả tìm kiếm: {{search}}</li>
          </ol>
        </nav>
      </div>
      <div class="container py-5">
        <div class="row" v-if="(bookapi.length != 0)">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
        <div class="row" v-else>
          <h1>Không có sách phù hợp</h1>
        </div>
      </div>
    </div>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import BookAPI from "../api/book"

export default {
  name: "ResultSearch",
  components: {
    BookCard,
    Header,
    Footer,
    BackToTop
  },
  data: () => {
    return {
        search: '',
        bookapi: [],
    };
  },
  async created() {
    this.search = this.$route.query.search
    this.bookapi = (await BookAPI.getAllBooks()).filter(item => item.book_name.toLowerCase().search(this.search) != -1)
  },
  async beforeUpdate() {
    this.search = this.$route.query.search
    this.bookapi = (await BookAPI.getAllBooks()).filter(item => item.book_name.toLowerCase().search(this.search) != -1)
  }
};
</script>
