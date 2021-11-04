<template>
  <div class="home">
    <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner home-background">
        <div class="carousel-item active" data-bs-interval="10000">
          <!-- <nav aria-label="breadcrumb" class="name-page">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav> -->
          <img src="../assets/carousel.png" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h4>Discover something new</h4>
            <p>Here is a book store just like your friend.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src="../assets/carousel_1.png" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h4>Make your books your best friend</h4>
            <p>Books are not only to entertain us, but also inspire us.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel_2.png" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

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
          <div class="card mb-3">
            <img src="../assets/book1.png" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card mb-3">
            <img src="../assets/book2.png" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <img src="../assets/book3.png" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <img src="../assets/book4.png" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <img src="../assets/book5.png" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Beautiful World, Where Are You: A Novel</h5>
              <p class="card-text">Detective and Mystery</p>
              <p class="card-text"><small class="text-muted">by: Sally Rooney Hardcover</small></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card">
            <img src="../assets/book6.png" class="card-img-bottom" alt="">
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

export default {
  name: "Home"
};
</script>
