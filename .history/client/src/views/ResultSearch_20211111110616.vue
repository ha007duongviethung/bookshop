<template>
  <div>
    <Header />
    <div class="newbook content">
      <div class="name-page">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Kết quả tìm kiếm: {{type}}</li>
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div>
          <div class="title">
            <h2><span></span></h2>
          </div>
          <div class="row mt-4">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import BackToTop from "../components/BackToTop.vue"

// import BookAPI from "../api/book"

export default {
  name: "ResultSearch",
  components: {
    BookCard,
    Header,
    Footer,
    BackToTop
  },
  props: ['params'],
  data: () => {
    return {
        titleLeft: '',
        titleRight: '',
        type: '',
        bookapi: [],
    };
  },
  async created() {
      console.log(this.$router)
  }
};
</script>
