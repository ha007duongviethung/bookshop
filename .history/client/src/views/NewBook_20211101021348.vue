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
            <!-- <BookCard v-for="book in bookapi" :key="book._id" :book="book" /> -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="book in bookapi" :key="book._id">
              <div class="card mb-3">
                <router-link to="/book/detail" class="card-img">
                  <img :src="`${book.img}`" class="card-img-top" alt="book" />
                  <div class="quick-add">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      :data-bs-target="`#qa`+book._id"
                      >Quick add</a
                    >
                  </div>        
                  <!-- <div
                      class="modal fade"
                      :id="`qa`+book._id"
                      tabindex="-1"
                      aria-hidden="true"
                      @click.stop.prevent
                    >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="quick-add_box">
                              <img :src="book.img" class="card-img-top" alt="book" />
                              <div class="quick-add_des">
                                <h3>{{ book.title }}</h3>
                                <p>{{ book.auth }}</p>
                                <p>{{ book._type }}</p>
                                <div>
                                  <span class="new-price">$39.99</span>
                                  <span class="old-price">$50.00</span>
                                </div>
                                <div class="mt-3">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum aperiam ipsa veniam sed rem culpa exercitationem obcaecati?
                                </div>
                                <div class="mt-3">
                                  <button class="btn btn-primary">Add to card</button>
                                  <button class="btn btn-outline-dark mt-2">Sign in to Purchase Instanly</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer pt-4">
                            <button class="btn btn-success mx-auto w-100 view-detail" 
                              data-bs-dismiss="modal"
                              aria-label="Close">
                              <router-link to="/book/detail">View product details >></router-link>
                            </button>
                          </div>
                      </div>
                    </div>
                  </div> -->
                </router-link>
                <div class="card-body">
                  <router-link to="/book/detail" class="card-title">{{ book.book_name }}</router-link>
                  <p class="card-text">{{ book.type }}</p>
                  <p class="card-text">
                    <small class="text-muted">by: {{ book.author }}</small>
                  </p>
                </div>
              </div>
            </div>
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
import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import BackToTop from "../components/BackToTop.vue"

import BookAPI from "../api/book"

export default {
  name: "NewBook",
  components: {
    // BookCard,
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
  }
};
</script>
