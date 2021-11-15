<template>
    <div>
        <Header />
        <section class="my-5 content">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <div class="mdb-lightbox">
                            <div class="row product-gallery mx-1">
                                <div class="col-12 mb-0">
                                    <figure class="view overlay rounded z-depth-1 main-img">
                                        <a :href="bookDetail.img"
                                            >
                                            <img :src="bookDetail.img"
                                            class="img-fluid z-depth-1">
                                        </a>
                                    </figure>
                                    <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                        <a :href="bookDetail.img"
                                            data-size="710x823">
                                            <img :src="bookDetail.img"
                                            class="img-fluid z-depth-1">
                                        </a>
                                    </figure>
                                    <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                        <a :href="bookDetail.img"
                                            data-size="710x823">
                                            <img :src="bookDetail.img"
                                            class="img-fluid z-depth-1">
                                        </a>
                                    </figure>
                                    <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                        <a :href="bookDetail.img"
                                            data-size="710x823">
                                            <img :src="bookDetail.img"
                                            class="img-fluid z-depth-1">
                                        </a>
                                    </figure>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="view overlay rounded z-depth-1 gallery-item">
                                                <img :src="bookDetail.img"
                                                    class="img-fluid">
                                                <div class="mask rgba-white-slight"></div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="view overlay rounded z-depth-1 gallery-item">
                                                <img :src="bookDetail.img"
                                                    class="img-fluid">
                                                <div class="mask rgba-white-slight"></div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="view overlay rounded z-depth-1 gallery-item">
                                                <img :src="bookDetail.img"
                                                    class="img-fluid">
                                                <div class="mask rgba-white-slight"></div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="view overlay rounded z-depth-1 gallery-item">
                                                <img :src="bookDetail.img"
                                                    class="img-fluid">
                                                <div class="mask rgba-white-slight"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <h5>{{bookDetail.book_name}}</h5>
                        <p class="mb-2 text-muted text-uppercase small">{{bookDetail.type}}</p>
                        <div>
                            <span class="new-price">{{bookDetail.price}}</span>
                            <span class="old-price">{{bookDetail.price * 1.3}}</span>
                            VNĐ
                        </div>
                        <p class="pt-1">{{bookDetail.brief_des}}</p>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless mb-0">
                            <tbody>
                                <tr>
                                <th class="pl-0 w-25" scope="row"><strong>Thể loại</strong></th>
                                <td>{{bookDetail.type}}</td>
                                </tr>
                                <tr>
                                <th class="pl-0 w-25" scope="row"><strong>Tác giả</strong></th>
                                <td>{{bookDetail.author}}</td>
                                </tr>
                                <tr>
                                <th class="pl-0 w-25" scope="row"><strong>Nhà xuất bản</strong></th>
                                <td>{{bookDetail.pb_company}}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <hr>
                        <div class="table-responsive mb-2">
                            <table class="table table-sm table-borderless">
                            <tbody>
                                <tr>
                                    <td class="pl-0 pb-0 w-25">Số lượng</td>
                                    <td class="pl-0 pb-0 w-25">Giá tiền</td>
                                </tr>
                                <tr>
                                    <td class="pl-0">
                                        <div class="def-number-input number-input safari_only mb-0">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" 
                                            @click="quantity = (quantity == 1 ? 1 : quantity - 1)" class="minus">-</button>
                                        <input class="quantity" min="1" name="quantity" v-model="quantity" type="number">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                            @click="quantity++" class="plus">+</button>
                                        </div>
                                    </td>
                                    <td class="pl-0 total">{{bookDetail.price * quantity}} VNĐ</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-primary btn-md">Mua ngay</button>
                        <button type="button" class="btn btn-outline-dark mx-3" @click="addItemToCart">Thêm vào giỏ hàng</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="classic-tabs rounded px-3 mt-5">
                            <ul class="nav tabs-primary nav-justified" id="advancedTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Mô tả</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Thông tin</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Đánh giá (1)</a>
                                </li>
                            </ul>
                            <div class="tab-content mt-3" id="advancedTabContent">
                                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                    <h5>Mô tả chi tiết về sách</h5>
                                    <p class="small text-muted text-uppercase mb-2">{{bookDetail.type}}</p>
                                    <h6>{{bookDetail.price}} VNĐ</h6>
                                    <p class="pt-1">{{bookDetail.detailed_des}}</p>
                                </div>
                                <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                    <h5>Thông tin thêm</h5>
                                    <table class="table table-striped table-bordered mt-3">
                                        <thead>
                                        <tr>
                                            <th scope="row" class="w-150 dark-grey-text h6">Cân nặng</th>
                                            <td><em>{{bookDetail.weight}}</em></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row" class="w-150 dark-grey-text h6">Kích thước</th>
                                            <td><em>{{bookDetail.width}} × {{bookDetail.height}} cm</em></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <h5><span>1</span> đánh giá cho <span>{{bookDetail.book_name}}</span></h5>
                                    <div class="media mt-3 mb-4">
                                        <img class="d-flex mr-3 z-depth-1" src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.18169-9/22046463_111085909643101_8836396360326816750_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9-EH6P1b0kQAX8nx7F9&_nc_ht=scontent.fhan5-4.fna&oh=65d305bb12b957d172312348706b12fd&oe=61A97E20" width="62" alt="Generic placeholder image">
                                        <div class="media-body">
                                        <div class="d-sm-flex justify-content-between">
                                            <p class="mt-1 mb-2">
                                            <strong>Sen Nông </strong>
                                            <span>– </span><span>May 03, 2021</span>
                                            </p>
                                            <!-- <ul class="rating mb-sm-0">
                                                <li>
                                                    <i class="fas fa-star fa-sm text-primary"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star fa-sm text-primary"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star fa-sm text-primary"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star fa-sm text-primary"></i>
                                                </li>
                                                <li>
                                                    <i class="far fa-star fa-sm text-primary"></i>
                                                </li>
                                            </ul> -->
                                        </div>
                                        <p class="mb-0">Rất thú vị và bổ ích, tôi yêu chúng.</p>
                                        </div>
                                    </div>
                                    
                                    <h5 class="mt-4">Thêm đánh giá</h5>
                                    <p>Địa chỉ sẽ không được công bố</p>
                                    <div class="my-3">
                                        <!-- <ul class="rating mb-0">
                                            <li>
                                                <a href="#!">
                                                <i class="fas fa-star fa-sm text-primary"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                <i class="fas fa-star fa-sm text-primary"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                <i class="fas fa-star fa-sm text-primary"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                <i class="fas fa-star fa-sm text-primary"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                <i class="far fa-star fa-sm text-primary"></i>
                                                </a>
                                            </li>
                                        </ul> -->
                                    </div>
                                    <div>
                                        <div class="md-form md-outline">
                                            <label for="form76">Đánh giá của bạn</label>
                                            <textarea id="form76" class="md-textarea form-control pr-6" rows="4"></textarea>
                                        </div>
                                        <div class="text-right py-2">
                                            <button type="button" class="btn btn-primary">Thêm đánh giá</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-12">
                        <section class="px-3">
                            <hr>
                            <h4 class="my-5"><strong>Một số sách có liên quan</strong></h4>
                            <div class="row">
                                <div v-for="book in booksRelateTo" :key="book._id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                    <div class="card mb-3">
                                    <a :href="`/book-detail_${book._id}`" class="card-img">
                                        <img :src="book.img" class="card-img-top" alt="book" />
                                        <div class="quick-add">
                                        <a
                                            data-bs-toggle="modal"
                                            :data-bs-target="`#qa`+book._id"
                                            >Quick add</a
                                        >
                                        </div>        
                                        <div
                                            class="modal fade"
                                            :id="`qa`+book._id"
                                            tabindex="-1"
                                            aria-hidden="true"
                                            @click.stop.prevent
                                        >
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                                </div>
                                                <div class="modal-body">
                                                <div class="quick-add_box">
                                                    <img :src="book.img" onerror="this.src='data:image/png;base64,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'" class="card-img-top" alt="book" />
                                                    <div class="quick-add_des">
                                                    <h3>{{ sstring(book.book_name, 95) }}</h3>
                                                    <p>{{ book.author }}</p>
                                                    <p>{{ book.type }}</p>
                                                    <div>
                                                        <span class="new-price">${{ book.price }}</span>
                                                        <span class="old-price">${{ book.price * 1.3}}</span>
                                                    </div>
                                                    <div class="mt-3">
                                                        {{ sstring(book.brief_des, 150) }}
                                                    </div>
                                                    <div class="mt-3">
                                                        <button class="btn btn-primary" @click="addBookToCart" v-if="isToken">Thêm vào giỏ hàng</button>
                                                        <button class="btn btn-outline-dark mt-2" @click="login" data-bs-dismiss="modal" aria-label="Close" v-else>Đăng nhập để mua ngay</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="modal-footer pt-4">
                                                <button class="btn btn-success mx-auto w-100 view-detail" 
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close">
                                                    <a :href="`/book-detail_${book._id}`">Xem chi tiết sách >></a>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </a>
                                    <div class="card-body">
                                        <a :href="`/book-detail_${book._id}`" class="card-title">{{ book.book_name }}</a>
                                        <p class="card-text">{{ sstring(book.type, 16) }}</p>
                                        <p class="card-text">
                                        <small class="text-muted">by: {{ sstring(book.author, 13) }}</small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <BackToTop />
    </div>
</template>

<script>
// import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import BackToTop from "../components/BackToTop.vue"

import BookAPI from "../api/book"
import CartAPI from "../api/cart"
import UserAPI from "../api/user"

export default {
    name: "BookDetail",
    components: {
        // BookCard,
        Header,
        Footer,
        BackToTop
    },
  data: () => {
    return {
      bookDetail: [],
      id: '',
      quantity: 1,
      booksRelateTo: [],
      isToken: false
    };
  },
  methods: {
    async addItemToCart() {
        if(this.isToken) {
            await CartAPI.addItemToCart()
        } else {
            alert('Bạn chưa đăng nhập!!!')
            this.$router.push('/login')
        }
    },
    sstring(str, length) {
      let substr = str.substring(0, length)
      if(str.length > length) {
        substr += '...'
      }
      return substr
    }
  },
    async created() {
    const pathname = window.location.pathname.split("/")
    this.id = pathname[1].split('_')[1]
    this.bookDetail = await BookAPI.getBookByID(this.id)

    const data = await BookAPI.getBooksBySlug(this.bookDetail.slug.split('-')[1])
    data.forEach((item) => {
        if(this.booksRelateTo.length < 6 && item.book_name != this.bookDetail.book_name)
            this.booksRelateTo.push(item)
    })

    if(localStorage.getItem('bookshop')) {
        const data = await UserAPI.rememberUser()
        if(data.accessToken) {
            this.isToken = true
        }
    }
  }
}
</script>