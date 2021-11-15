<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img class="logo" src="../assets/logo_green.png" alt="BookStore"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 300px"
          >
            <li class="nav-item d-lg-none d-xl-block">
              <router-link class="nav-link" to="/new-book"
                >Mới nhất</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Thể loại
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="item in types" :key="item.slug">
                  <a class="dropdown-item" :href="`/type-${item.slug}`">{{item.name}}</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="/type">Một số thể loại khác</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tác giả
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Robin Sharma</a></li>
                <li><a class="dropdown-item" href="#">David J.Lieberman</a></li>
                <li><a class="dropdown-item" href="#">Rosie Nguyễn</a></li>
                <li><a class="dropdown-item" href="#">Dale Carnegie</a></li>
                <li><a class="dropdown-item" href="#">Lê Thẩm Dương</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Một số tác giả khác</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nhà sản xuất
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Lao động - xã hội</a></li>
                <li><a class="dropdown-item" href="#">Nhã Nam</a></li>
                <li><a class="dropdown-item" href="#">Tổng hợp tp.HCM</a></li>
                <li><a class="dropdown-item" href="#">Phụ nữ</a></li>
                <li><a class="dropdown-item" href="#">Trẻ</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="">Một số nhà xuất bản khác</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav my-2 my-lg-0 align-items-lg-center">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="d-lg-none me-2">Tài khoản của bạn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path fill="#222" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill="#222"
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style="left: unset; right: 0"
                v-if="isToken"
              >
                <li>
                  <a
                    class="dropdown-item disabled"
                    href=""
                    >{{full_name}}</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href=""
                    @click="logout"
                    >Đăng xuất</a
                  >
                </li>
              </ul>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style="left: unset; right: 0"
                v-else
              >
                <li>
                  <router-link
                    class="dropdown-item"
                    to="/login"
                    >Đăng nhập</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    to="/register"
                    >Đăng ký</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/shoping-cart" class="nav-link shopping" role="button">
                <span class="d-lg-none me-2">Giỏ hàng</span>
                <svg
                  width="27"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="cart"
                  class="brand"
                >
                  <path
                    d="M23.097 18.988l-.165.783H7.77L5.75 8.862H25.25l-2.154 10.126zm-14.89 7.955c.934 0 1.692.713 1.692 1.591s-.758 1.59-1.693 1.59c-.933 0-1.691-.712-1.691-1.59 0-.878.758-1.591 1.691-1.591zm13.014 0c.934 0 1.691.713 1.691 1.591s-.757 1.59-1.691 1.59-1.692-.712-1.692-1.59c0-.872.746-1.58 1.672-1.591h.02zm5.802-19.454H5.5L4.241.689a.714.714 0 00-.713-.564H.471v1.363h2.447l4.476 24.21c-1.338.358-2.303 1.496-2.303 2.847 0 1.631 1.407 2.955 3.142 2.955 1.736 0 3.142-1.324 3.142-2.954 0-.595-.187-1.15-.508-1.613l7.695.01c-.308.449-.49.996-.49 1.583 0 1.627 1.401 2.946 3.132 2.946 1.73 0 3.133-1.32 3.133-2.946 0-1.627-1.403-2.945-3.133-2.945H8.844l-.822-4.446H24.15l.397-1.918.356-1.727.234-1 1.886-9.001z"
                    fill="#000"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span class="shopping-amount">16</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import UserAPI from "../api/user"
import BookAPI from "../api/book"

export default {
  name: "Header",
  data: () => {
    return {
      types: [
        {slug: 'economic_technology', name: 'Công nghệ - Kinh tế'},
        {slug: 'historical_society', name: 'Xã hội - Lịch sử'},
        {slug: 'action_adventure', name: 'Hành động - Phiêu lưu'},
        {slug: 'novel', name: 'Truyện tiểu thuyết'},
        {slug: 'self_growth', name: 'Phát triển bản thân'},
      ],
      isToken: false,
      full_name: '',
    };
  },
  methods: {
    async token() {
      const data = await UserAPI.rememberUser()
      this.full_name = data.full_name
      if(data.accessToken) {
        this.isToken = true
      }
    },
    logout() {
      this.isToken = false
      localStorage.removeItem('bookshop')
    },
    async allAuthor() {
      const bookapi = await BookAPI.getAllBooks()
      const counts = []
      bookapi.forEach(book => {
        let tmp = book.author
        counts[tmp] = counts[tmp] ? counts[tmp] + 1 : 1
      })

      for(const count in counts) {
        console.log(count)
      }
    },
    dataRandom(data) {
      let i = data.length
      let count = 0
      let result = []
      while(i-- && count < 5) {
        let j = Math.floor(Math.random() * (i+1))
        result.push(data[j])
        data.splice(j, 1)
        count++
      }
      return result
    },
  },
  async created() {
    this.token()
    this.allAuthor()
  }
};
</script>
