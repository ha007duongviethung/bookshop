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
        <nav aria-label="Page navigation" class="pagination mt-4">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
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
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "NewBook",
  components: {
    BookCard,
  },
  data: () => {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ],
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
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
};
</script>
