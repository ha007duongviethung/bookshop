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
                href=""
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
                href=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tác giả
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="authorHeader in authorShow" :key="authorHeader">
                  <span class="dropdown-item" @click="author(authorHeader)">{{authorHeader}}</span>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="/author">Một số tác giả khác</router-link>
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
                <li v-for="companyHeader in companyShow" :key="companyHeader">
                  <span class="dropdown-item" @click="company(companyHeader)">{{companyHeader}}</span>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="/company">Một số nhà xuất bản khác</router-link>
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
              v-model="search"
            />
            <button class="btn btn-outline-success" type="submit" @click.stop.prevent="handleSearch">
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
                <div class="avatar">
                  <img :src="avatar = (avatar) ? avatar : 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png'" >
                </div>
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
              <span @click="cartList" class="nav-link shopping" role="button">
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
                <span class="shopping-amount">{{amountItem}}</span>
              </span>
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
import CartAPI from "../api/cart"

export default {
  name: "Header",
  data: () => {
    return {
      bookapi: [],
      types: [],
      isToken: false,
      full_name: '',
      avatar: '',
      authorShow: [],
      companyShow: [],
      amountItem: 0,
      search: ''
    };
  },
  methods: {
    async token() {
      if(localStorage.getItem('bookshop')) {
        const data = await UserAPI.rememberUser()
        this.full_name = data.full_name
        this.avatar = data.img
        if(data.accessToken) {
          if(data.message == 'Admin logged in successfully') {
            this.$router.push('/crud')
          } else {
            this.isToken = true
            const temp = await CartAPI.fetchAllItem()
            this.amountItem = temp.length
          }
        }
      }
    },
    logout() {
      this.isToken = false
      localStorage.removeItem('bookshop')
      alert("Đăng xuất thành công!!!")
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
    compare(a, b) {
      const amountA = a.amount
      const amountB = b.amount

      let comparison = 0;
      if (amountA > amountB) {
        comparison = 1;
      } else if (amountA < amountB) {
        comparison = -1;
      }
      return comparison;
    },
    removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
      str = str.replace(/\u02C6|\u0306|\u031B/g, "");
      str = str.replace(/ + /g," ");
      str = str.trim();
      // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
      return str;
    },
    async handleSearch() {
      this.$router.push({ path: '/result-search', query : {search: this.search} })
      this.search = ''
    },
    async author(at) {
      this.$router.push({ path: '/author-description', query: {name: at} })
    },
    async company(cm) {
      this.$router.push({ path: '/company-description', query: {name: cm} })
    },
    cartList() {
      if(this.isToken) {
        this.$router.push({ path: '/shoping-cart'})
      } else {
        alert('Bạn chưa đăng nhâp@@@ Mời bạn đăng nhập!!!')
        this.$router.push('/login')
      }
    }
  },
  async created() {
    this.token()
    this.bookapi = await BookAPI.getAllBooks()

    const allType = []
    const allAuthor = []
    const allCompany = []

    this.bookapi.forEach(book => {
      const slug = book.slug.split('-')[1]
      const type = book.type
      let temp = slug + "/" + type
      allType[temp] = allType[temp] ? allType[temp] + 1 : 1

      temp = book.author
      allAuthor[temp] = allAuthor[temp] ? allAuthor[temp] + 1 : 1

      temp = book.pb_company
      allCompany[temp] = allCompany[temp] ? allCompany[temp] + 1 : 1
    })

    const listType = []
    for(const item in allType) {
      const slug = item.split('/')[0]
      const name = item.split('/')[1]
      const amount = allType[item]
      const data = {
        slug,
        name,
        amount
      }
      listType.push(data)
    }
    listType.sort(this.compare)

    while(this.types.length < 5) {
      const at = listType.pop()
      this.types.push(at)
    }

    const listAuthor = []
    for(const count in allAuthor) {
      const item = {
        name: count,
        amount: allAuthor[count]
      }
      listAuthor.push(item)
    }
    listAuthor.sort(this.compare)

    while(this.authorShow.length < 5) {
      const at = listAuthor.pop().name
      if(at != "Nhiều tác giả")
        this.authorShow.push(at)
    }

    const listCompany = []
    for(const count in allCompany) {
      const item = {
        name: count,
        amount: allCompany[count]
      }
      listCompany.push(item)
    }
    listCompany.sort(this.compare)

    while(this.companyShow.length < 5) {
      const at = listCompany.pop().name
      this.companyShow.push(at)
    }
  },
};
</script>
