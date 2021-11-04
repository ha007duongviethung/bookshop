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
    data: () => {
    return {
      bookapi: [
        {
          _id: 1,
          img: "https://images-eu.ssl-images-amazon.com/images/I/51Pw6joFN7L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 2,
          img: "https://images-na.ssl-images-amazon.com/images/I/41jf0Rju1fL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 3,
          img: "https://images-na.ssl-images-amazon.com/images/I/51xrf2zIIkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 4,
          img: "https://images-na.ssl-images-amazon.com/images/I/51XAvq6Hw9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 5,
          img: "https://m.media-amazon.com/images/I/512W0wi6lZL._SY346_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Thám tử, bí ẩn",
          auth: "Sally Rooney Hardcover",
        },
      ],
    };
  },
}
</script>