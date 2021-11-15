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
            <BookCard v-for="key in (12*currentPage + lg)" :key="booksNew[key-1]._id" :book="booksNew[key-1]" />
          </div>
          <nav aria-label="Page navigation" v-if="amountPage > 0" class="pagination mt-4">
            <ul class="pagination">
              <li class="page-item" :class="{disabled: isDisabledPrev}" @click="prevPage">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" :class="{active: isActive}" v-for="(index) in amountPage" :key="index" aria-current="page">
                <a class="page-link">{{index}}</a>
              </li>
              <li class="page-item" :class="{disabled: isDisabledNext}" @click="nextPage">
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
      amountItem: 0,
      amountPage: 0,
      currentPage: 0,
      key: 0,
      lg: 0,
      isDisabledPrev: true,
      isDisabledNext: false,
      isActive: false,
    };
  },
  methods: {
    prevPage() {
      if(this.currentPage > 0) {
        if(this.amountItem > 0) {
          this.lg = 12
        } else {
          this.amountItem += 12
        }
        this.currentPage--
        this.isDisabledNext = false
        console.log('Prev: currentPage: ' + this.currentPage + ' lg: ' + this.lg + ' amountItem: ' + this.amountItem)
      }
      if(this.currentPage == 0) {
        this.isDisabledPrev = true
      }
    },
    nextPage() {
      if(this.currentPage < this.amountPage - 1) {
        if(this.amountItem < 12) {
          this.lg = this.amountItem
        } else {
          this.amountItem -= 12
        }
        this.currentPage++
        this.isDisabledPrev = false
        console.log('Next: currentPage: ' + this.currentPage + ' lg: ' + this.lg + ' amountItem: ' + this.amountItem)
      }
      if(this.currentPage == this.amountPage - 1) {
        this.isDisabledNext = true
      }
    }
  },
  async created() {
    const data = await BookAPI.getAllBooks()
    data.reverse().forEach(book => {
      this.booksNew.push(book)
    })
    
    this.amountItem = this.booksNew.length
    this.lg = 12
    if(this.amountItem < 12) {
      this.lg = this.amountItem
    }
    this.amountPage = Math.round(this.amountItem / 12)
    this.amountItem -= 12
  },
};
</script>
