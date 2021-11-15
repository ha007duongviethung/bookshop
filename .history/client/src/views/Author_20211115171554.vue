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
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div v-for="book in bookapi" :key="book.name">
          <div class="title my-5">
            <span style="cursor: pointer;" class="title-link" @click="author(book.name)"><h2><span>{{book.name}}</span></h2></span>
          </div>
          <div class="row">
            <BookCard v-for="k in dataLength(book.data)" :key="book.data[k-1]._id" :book="book.data[k-1]"/>
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
  name: "Author",
  components: {
      BookCard,
      Header,
      Footer,
      BackToTop
  },
  data: () => {
    return {
      bookapi: []
    };
  },
  methods: {
    dataLength(data) {
      let length = data.length
      if(length < 6) {
        return length
      } else if(length < 12) {
        return 6
      } else {
        return 12
      }
    },
    async author(at) {
        this.$router.push({ path: '/author-description', query: {name: at} })
    }
  },
  async created() {
    const list = await BookAPI.getAllBooks()

    const counts = []
    list.forEach(book => {
        let tmp = book.author
        if(!counts[tmp]) {
            counts[tmp] = []
        } 
        counts[tmp].push(book)
    })

    for(const count in counts) {
        const item = {
            name: count,
            data: counts[count]
        }
        this.bookapi.push(item)
    }

    console.log(this.bookapi)
  },

}
</script>