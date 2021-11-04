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
    <div class="container pt-5">
      <div>
        <div class="title">
          <h2><span>Mới </span>nhất</h2>
        </div>
        <div class="row mt-4">
          <BookCard v-for="book in bookapi" :key="book._id" :book="book" />
        </div>
        <div class="pagination">
          <ul>
            <li class="prev disabled"><a href="#">&lt;</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li class="next"><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "NewBook",
  components: {
    BookCard
  },
  data: () => {
    return {
      bookapi: [
        {
          _id: 1,
          img: "https://images-eu.ssl-images-amazon.com/images/I/51Pw6joFN7L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 2,
          img: "https://images-na.ssl-images-amazon.com/images/I/41jf0Rju1fL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 3,
          img: "https://images-na.ssl-images-amazon.com/images/I/51xrf2zIIkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 4,
          img: "https://images-na.ssl-images-amazon.com/images/I/51XAvq6Hw9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 5,
          img: "https://m.media-amazon.com/images/I/512W0wi6lZL._SY346_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
        {
          _id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          title: "Beautiful World, Where Are You: A Novel",
          _type: "Detective and Mystery",
          auth: "Sally Rooney Hardcover"
        },
      ]
    }
  }
};
</script>
