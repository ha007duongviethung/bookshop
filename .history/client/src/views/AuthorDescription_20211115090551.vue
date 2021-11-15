<template>
  <div>
    <Header />
    <div class="newbook content">
      <div class="name-page">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Trang chủ</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Tác giả</li>
            <li class="breadcrumb-item active" aria-current="page">{{name}}</li>
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div>
          <div class="title">
            <h2><span>{{name}}</span></h2>
          </div>
          <div class="row mt-4">
            <BookCard v-for="book in authorBook" :key="book._id" :book="book" />
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import BookAPI from "../api/book"

export default {
  name: "AuthorDescription",
  components: {
    BookCard,
    Header,
    Footer,
    BackToTop
  },
  data: () => {
    return {
      name: '',
      bookapi: [],
      authorBook: []
    };
  },
  methods: {
    show() {
      this.name = this.$route.query.name

      this.bookapi.forEach(item => {
        if(item.author == this.name)
          this.authorBook.push(item)
      })
    }
  },
  async created() {
    this.bookapi = await BookAPI.getAllBooks()
    this.show()
  },
  beforeUpdate() {
    this.authorBook = []
    this.show()
  }
};
</script>
