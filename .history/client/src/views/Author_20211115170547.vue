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
          </ol>
        </nav>
      </div>
      <div class="container pt-5">
        <div v-for="lt in list" :key=lt.slug>
          <div class="title my-5">
            <router-link class="title-link" :to="`/type-${lt.slug}`"><h2><span>{{lt.titleRight}}</span>{{lt.titleLeft}}</h2></router-link>
          </div>
          <div class="row">
            <BookCard v-for="k in dataLength(lt.data)" :key="lt.data[k-1]._id" :book="lt.data[k-1]"/>
          </div>
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

import BookAPI from "../api/book"

export default {
  name: "Author",
  components: {
    //   BookCard,
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
    },
    dataLength(data) {
      let length = data.length
      if(length < 6) {
        return length
      } else if(length < 12) {
        return 6
      } else {
        return 12
      }
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
  },
}
</script>