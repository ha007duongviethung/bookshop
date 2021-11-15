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
                        <button type="button" class="btn btn-outline-dark mx-3" @click="addItemToCart(quantity)">Thêm vào giỏ hàng</button>
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
                                <BookCard v-for="book in booksRelateTo" :key="book._id" :book="book" />
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
import BookCard from "../components/BookCard.vue"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import BookAPI from "../api/book"
import CartAPI from "../api/cart"
import UserAPI from "../api/user"

export default {
    name: "BookDetail",
    components: {
        BookCard,
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
      isToken: false,
    };
  },
  methods: {
    async addItemToCart(quantity) {
        if(this.isToken) {
            const cart = await CartAPI.fetchItemById(this.bookDetail._id)
            if(!cart) {
                const data = {
                    book: this.bookDetail._id, 
                    quantity: quantity
                }
                await CartAPI.addItemToCart(data)
            } else {
                alert('Sách đã có trong giỏ!!!')
            }
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