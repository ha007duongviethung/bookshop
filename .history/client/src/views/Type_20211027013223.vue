<template>
  <div class="newbook content">
    <div class="name-page">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Type</li>
          <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
        </ol>
      </nav>
    </div>
    <div class="container pt-5">
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
      <div>
        <div class="title my-5">
          <h2><span>Ưu đãi</span> sách tiết kiệm</h2>
        </div>
        <div class="row">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Type",
}
</script>