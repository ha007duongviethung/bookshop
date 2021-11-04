<template>
    <div>
        <Header />
        <div class="content cart">
            <div class="container px-4 py-5 mx-auto">
                <div class="row cart-header d-flex justify-content-center align-items-center pb-2">
                    <div class="col-6">
                        <h4 class="heading">Giỏ hàng</h4>
                    </div>
                    <div class="col-6">
                        <div class="row text-right">
                            <div class="col-3">
                                <h6 class="mt-2">Đơn giá</h6>
                            </div>
                            <div class="col-3">
                                <h6 class="mt-2">Số lượng</h6>
                            </div>
                            <div class="col-3">
                                <h6 class="mt-2">Thành tiền</h6>
                            </div>
                            <div class="col-3">
                                <h6 class="mt-2">Hành động</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-list">    
                    <CartItem v-for="item in cartList" :key="item._id" :item="item" class="" />
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-lg-3 radio-group">
                                    <div class="row d-flex px-3 radio"> <img class="pay" src="https://i.imgur.com/WIAP9Ku.jpg">
                                        <p class="my-auto">Thẻ ATM nội địa</p>
                                    </div>
                                    <div class="row d-flex px-3 radio gray"> <img class="pay" src="https://i.imgur.com/OdxcctP.jpg">
                                        <p class="my-auto">Thẻ quốc tế Visa, Master</p>
                                    </div>
                                    <div class="row d-flex px-3 radio gray mb-3"> <img class="pay" src="https://i.imgur.com/cMk1MtK.jpg">
                                        <p class="my-auto">PayPal</p>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="row px-2 mb-2">
                                        <div class="form-group col-md-6"> 
                                            <label class="form-control-label">Tên in trên thẻ</label> 
                                            <input type="text" id="cname" name="cname" placeholder="Johnny Doe"> 
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label class="form-control-label">Số thẻ</label> 
                                            <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"> 
                                        </div>
                                    </div>
                                    <div class="row px-2 mb-2">
                                        <div class="form-group col-md-6"> 
                                            <label class="form-control-label">Ngày phát hành</label> 
                                            <input type="text" id="exp" name="exp" placeholder="MM/YYYY"> 
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label class="form-control-label">CVV</label> 
                                            <input type="text" id="cvv" name="cvv" placeholder="***"> 
                                        </div>
                                    </div>
                                    <div class="row px-2">
                                        <div class="form-group col-md-12">
                                            <label class="form-control-label">Loại thẻ</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>------ Chọn loại thẻ ATM -----</option>
                                                <option value="VietinBank">VietinBank</option>
                                                <option value="BIDV">BIDV</option>
                                                <option value="VietcomBank">VietcomBank</option>
                                                <option value="AgriBank">AgriBank</option>
                                                <option value="TechcomBank">TechcomBank</option>
                                                <option value="MB Bank">MB Bank</option>
                                                <option value="VPBank">VPBank</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-2">
                                    <div class="row d-flex justify-content-between px-4">
                                        <p class="mb-1 text-left">Tổng tiền</p>
                                        <h6 class="mb-1 text-right">{{total}} VNĐ</h6>
                                    </div>
                                    <div class="row d-flex justify-content-between px-4">
                                        <p class="mb-1 text-left">Vận chuyển</p>
                                        <h6 class="mb-1 text-right">{{total*0.1}} VNĐ</h6>
                                    </div>
                                    <div class="row d-flex justify-content-between px-4" id="tax">
                                        <p class="mb-1 text-left">Số tiền cần thanh toán</p>
                                        <h6 class="mb-1 text-right">{{total + total*0.1}} VNĐ</h6>
                                    </div> <button class="btn-block btn-blue"> <span> <span id="checkout">Thanh toán</span> <span id="check-amt">$26.48</span> </span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <BackToTop />
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import BackToTop from "../components/BackToTop.vue"
import CartItem from "../components/CartItem.vue"

import BookAPI from "../api/book"

export default {
    components: {
        Header,
        Footer,
        BackToTop,
        CartItem
    },
    data: () => {
        return {
            cartList: '',
            total: '',
        }
    },
    async created() {
        this.cartList = await BookAPI.getAllBooks()
        for(let i = 0 ; i < 3 ; i++){
            this.total += this.cartList[i].price * this.cartList[i].amount
        }
    }
}
</script>