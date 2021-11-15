<template>
  <div>
    <Header />
    <div class="newbook content">
      <div class="name-page">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">NewBook</li>
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div>
          <div class="title">
            <h2><span>Mới </span>nhất</h2>
          </div>
          <div class="row mt-4">
            <BookCard v-for="key in (6*currentPage + lg)" :key="booksNew[key-1]._id" :book="booksNew[key-1]" />
          </div>
          <nav aria-label="Page navigation" class="pagination mt-4">
            <ul class="pagination">
              <li class="page-item disabled" @click="prevPage">
                <a class="page-link" href="" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" v-for="index in amountPage" :key="index" aria-current="page">
                <a class="page-link" href="#">{{index}}</a>
              </li>
              <li class="page-item" @click="nextPage">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import BookAPI from "../api/book";

export default {
  name: "NewBook",
  components: {
    BookCard,
    Header,
    Footer,
    BackToTop,
  },
  data: () => {
    return {
      booksNew: [],
      amountPage: 0,
      currentPage: 0,
      key: 0,
      lg: 0,
    };
  },
  methods: {
    prevPage() {
      if(this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if(this.currentPage < this.amountPage) {
        this.currentPage++
        this.key = 6*(this.currentPage)
      }
    }
  },
  async created() {
    this.booksNew = await BookAPI.getBooksNewHome()
    this.lg = 6
    if(this.booksNew.length < 6) {
      this.lg = this.booksNew.length
    }
    this.amountPage = Math.round(this.booksNew.length / 6)
  },
};
</script>
