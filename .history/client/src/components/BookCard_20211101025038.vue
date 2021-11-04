<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-3">
      <router-link to="/book/detail" class="card-img">
        <img :src="`http://localhost:305/${book.img}`" class="card-img-top" alt="book" />
        <div class="quick-add">
          <a
            href="#"
            data-bs-toggle="modal"
            :data-bs-target="`#qa`+book._id"
            >Quick add</a
          >
        </div>        
        <div
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
                    <img :src="`http://localhost:305/${book.img}`" class="card-img-top" alt="book" />
                    <div class="quick-add_des">
                      <h3>{{ book.book_name }}</h3>
                      <p>{{ book.author }}</p>
                      <p>{{ book.type }}</p>
                      <div>
                        <span class="new-price">${{ book.price }}</span>
                        <span class="old-price">${{ book.price * 1.5}}</span>
                      </div>
                      <div class="mt-3">
                        {{ book.brief_des }}
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
        </div>
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
</template>

<script>
export default {
  name: "BookCard",
  props: ["book"]
};
</script>
