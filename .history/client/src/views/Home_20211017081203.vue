<template>
  <div class="home">
    <HomeBackground></HomeBackground>
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav> -->
    <div class="container">
      <div class="title my-5">
        <h2><span>Đề xuất</span> cho bạn</h2>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <BookCard />
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card mb-3">
            <div class="card-img">
              <img src="../assets/book2.png" class="card-img-bottom" alt="">
              <div class="quick-add">
                <a href="#">Quick add</a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card-img">
              <img src="../assets/book3.png" class="card-img-bottom" alt="">
              <div class="quick-add">
                <a href="#">Quick add</a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card-img">
              <img src="../assets/book4.png" class="card-img-bottom" alt="">
              <div class="quick-add">
                <a href="#">Quick add</a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card-img">
              <img src="../assets/book5.png" class="card-img-bottom" alt="">
              <div class="quick-add">
                <a href="#">Quick add</a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card-img">
              <img src="../assets/book6.png" class="card-img-bottom" alt="">
              <div class="quick-add">
                <a href="#">Quick add</a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBackground from "../components/HomeBackground.vue";
import BookCard from "../components/BookCard.vue";

export default {
  name: "Home",
  components: {
    HomeBackground,
    BookCard,
  }
};
</script>
