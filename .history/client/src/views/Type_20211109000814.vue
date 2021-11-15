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
            <BookCard v-for="k in (booksEconomicTechnology.length < 12 ? 6 : 12)" :key="booksEconomicTechnology[k-1]._id" :book="booksEconomicTechnology[k-1]" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/self-growth"><h2><span>Phát triển</span> bản thân</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="k in (booksSelfGrowth.length < 12 ? 6 : 12)" :key="booksSelfGrowth[k-1]._id" :book="booksSelfGrowth[k-1]" />
          </div>
        </div>
        <div>
          <div class="title my-5">
            <router-link class="title-link" to="/type/historical-society"><h2><span>Lịch sử - </span>Xã hội</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="book in booksHistoricalSociety" :key="book._id" :book="book" />
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
      booksSelfGrowth: [],
      booksHistoricalSociety: []
    };
  },
  methods: {
    dataRandom(data) {
      let i = data.length
      let count = 0
      let result = []
      while(i-- && count < 12) {
        let j = Math.floor(Math.random() * (i+1))
        result.push(data[j])
        data.splice(j, 1)
        count++
      }
      return result
    }
  },
  async created() {
    this.bookapi = await BookAPI.getAllBooks()
    this.booksEconomicTechnology = this.dataRandom(await BookAPI.getBooksBySlug('economic_technology'))
    this.booksSelfGrowth = this.dataRandom(await BookAPI.getBooksBySlug('self_growth'))
    this.booksHistoricalSociety = this.dataRandom(await BookAPI.getBooksBySlug('historical_society'))

    const counts = {}
    this.bookapi.forEach(book => {
      let tmp = book.type
      counts[tmp] = counts[tmp] ? counts[tmp] + 1 : 1
    })

    console.log(counts)
  },
}
</script>