<template>
  <div>
    <Header />
    <!-- <div class="newbook content">
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
    </div> -->
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
// import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

// import BookAPI from "../api/book"

export default {
  name: "AuthorDescription",
  components: {
    // BookCard,
    Header,
    Footer,
    BackToTop
  },
  data: () => {
    return {
        name: '',
        bookapi: [],
    };
  },
  methods: {
  },
  async created() {
    const data = this.$route.params.data
    for(const item in data) {
      console.log(item)
    }
    // const data = await BookAPI.getAllBooks()
    // const pathname = window.location.pathname.replace(/%20/g, ' ').split('-')[1];
    
    // this.name = pathname
    
    // data.forEach(book => {
    //   if(book.author == pathname) {
    //     this.bookapi.push(book)
    //   }
    // })
  }
};
</script>
