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
            <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
          </div>
          <nav aria-label="Page navigation" class="pagination mt-4">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
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
    BackToTop
  },
  data: () => {
    return {
      bookapi: [],
    };
  },
  async created() {
    this.bookapi = await BookAPI.getAllBooks()
  },
};
</script>
