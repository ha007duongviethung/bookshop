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
        <div class="row alert alert-warning align-items-center" role="alert" v-if="check == true">
          <div style="background: url(https://salt.tikicdn.com/desktop/img/icon-svg/icon-warning.svg) no-repeat; 
          width: 16px; height: 17px; margin-right: 12px;"></div>
          Rất tiếc, không tìm thấy sách phù hợp với lựa chọn của bạn
        </div>
        <div class="title my-5" v-if="check == true">
          <h2 class="title-link"><span>Sách dành</span> cho bạn</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
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
      data: [],
      search: '',
      bookapi: [],
      check: false
    };
  },
  methods: {
    show() {
      this.search = this.$route.query.search
      this.bookapi = this.data.filter(item => item.book_name.toLowerCase().search(this.search) != -1)
      if(this.bookapi.length == 0) {
        this.check = true
        this.bookapi = this.data
      }
    }
  },
  async created() {
    this.data = await BookAPI.getAllBooks()
    this.show()
  },
  beforeUpdate() {
    this.bookapi = []
    this.show()
  }
};
</script>
