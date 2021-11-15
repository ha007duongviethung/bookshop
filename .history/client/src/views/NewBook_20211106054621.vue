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
              <li class="page-item" @click="prevPage">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" v-for="index in amountPage" :key="index" aria-current="page">
                <a class="page-link">{{index}}</a>
              </li>
              <li class="page-item" @click="nextPage">
                <a class="page-link" aria-label="Next">
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
      lengPage: 0,
      amountPage: 0,
      currentPage: 0,
      key: 0,
      lg: 0,
    };
  },
  methods: {
    prevPage() {
      if(this.currentPage > 0) { 
        this.currentPage--
        this.lengPage + 6
      }
    },
    nextPage() {
      if(this.currentPage < this.amountPage - 1) {
        this.currentPage++
        if(this.lengPage < 6) {
          this.lg = this.lengPage
        } else {
          this.lengPage - 6
        }
        console.log(6*this.currentPage + this.lg + " " + this.lengPage)
      }
    }
  },
  async created() {
    this.booksNew = await BookAPI.getBooksNewHome()
    this.lengPage = this.booksNew.length
    console.log(this.lengPage)
    this.lg = 6
    if(this.lengPage < 6) {
      this.lg = this.lengPage
    }
    this.amountPage = Math.round(this.lengPage / 6)
  },
};
</script>
