<template>
  <div class="newbook content">
    <div class="name-page">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    </div>
    <div class="container">
      <div class="row">
        <div class="title my-5">
          <h2><span>Mới </span>nhất</h2>
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
  name: "NewBook"
};
</script>
