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
        <div class="title">
          <h2><span>{{title}} </span></h2>
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
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">1</a>
            </li>
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
  beforeCreate() {
    title = window.location.pathname.slice(6)
  },
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
        {
            _id: 6,
            img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
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
        {
            _id: 6,
            img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
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
        {
            _id: 6,
            img: "https://images-na.ssl-images-amazon.com/images/I/51qRuaFyT0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
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
        }
        ],
    };
  },
};
</script>
