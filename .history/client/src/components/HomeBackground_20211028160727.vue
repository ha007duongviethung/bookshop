<template>
  <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner home-background">
      <div class="carousel-item active" data-bs-interval="10000">
        <!-- <nav aria-label="breadcrumb" class="name-page">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav> -->
        <img src="../assets/carousel.png" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h4>Discover something new</h4>
          <p>Here is a book store just like your friend.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img src="../assets/carousel_1.png" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h4>Make your books your best friend</h4>
          <p>Books are not only to entertain us, but also inspire us.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/carousel_2.png" class="d-block w-100" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBackground",
};
</script>
