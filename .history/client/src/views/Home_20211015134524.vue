<template>
  <div class="home">
    <!-- Carousel wrapper -->
    <div
      id="carouselDarkVariant"
      class="carousel slide carousel-fade carousel-dark"
      data-mdb-ride="carousel"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselDarkVariant"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselDarkVariant"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Carousel wrapper -->
    <nav aria-label="breadcrumb" class="name-page">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>

    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav> -->
    <div class="container">
      <div class="title my-5">
        <h2><span>Choose</span> Your Demo</h2>
        <h5>Select your layout from several pre-built variations</h5>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card mb-3">
            <img src="../assets/home-1.webp" class="card-img-top" alt="">
            <!-- <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div> -->
          </div>
        </div>
        <div class="col-6">
          <div class="card mb-3">
            <img src="../assets/home-2.webp" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <img src="../assets/home-3.webp" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <img src="../assets/home-4.jpg" class="card-img-bottom" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
