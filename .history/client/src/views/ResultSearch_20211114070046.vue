<template>
  <div class="newbook content">
    <div class="name-page">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Kết quả tìm kiếm: {{search}}</li>
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
</template>

<script>
import BookCard from "../components/BookCard.vue"

import BookAPI from "../api/book"

export default {
  name: "ResultSearch",
  components: {
    BookCard,
  },
  data: () => {
    return {
        search: '',
        bookapi: [],
    };
  },
  async created() {
    this.search = this.$route.query.search
    alert(this.$route.query)
    this.bookapi = (await BookAPI.getAllBooks()).filter(item => item.book_name.toLowerCase().search(this.search) != -1)
  }
};
</script>
