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
            <li class="breadcrumb-item active" aria-current="page">Thể loại</li>
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/economic-technology"><h2><span>Công nghệ - </span> Kinh tế</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/abc"><h2><span>Phát triển</span> bản thân</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/abc"><h2><span>Xã hội - </span>Lịch sử</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/abc"><h2><span>Hành động - </span> Phiêu lưu</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/abc"><h2><span>Truyện </span>tiểu thuyết</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/abc"><h2><span>Kinh</span> dị</h2></router-link>
          </div>
          <div class="row">
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

import BookAPI from "../api/book"

export default {
  name: "Type",
  components: {
      BookCard,
      Header,
      Footer,
      BackToTop
  },
  data: () => {
    return {
      bookapi: [],
      booksEconomicTechnology: [],
    };
  },
  async created() {
    this.bookapi = await BookAPI.getAllBooks()
    this.booksEconomicTechnology = await BookAPI.getBooksByType('type', 'Công nghệ - Kinh tế')
  },
}
</script>