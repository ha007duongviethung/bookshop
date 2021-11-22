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
                    <CartItem v-for="item in cartList" :key="item._id" :item="item" 
                    @changeQuantity="changeQuantity($event, item.data.price)" />
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="row justify-content-between">
                                <div class="col-lg-6">
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <h5 class="form-control-label">Giao tới</h5> 
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-control-label" style="text-decoration: underline"
                                            data-bs-toggle="modal" data-bs-target="#edit" v-if="address">Sửa</label> 
                                            <label class="form-control-label" style="text-decoration: underline"
                                            data-bs-toggle="modal" data-bs-target="#add" v-else>Thêm</label> 
                                        </div>
                                        <div
                                        class="modal fade"
                                        id="add"
                                        tabindex="-1"
                                        aria-hidden="true"
                                        >
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Thêm địa chỉ nhận hàng</h5>
                                                        <button
                                                            class="btn-close"
                                                            type="button"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="mb-3">
                                                            <label for="newAddress"
                                                            >Địa chỉ<span class="text-danger">*</span></label
                                                            >
                                                            <input
                                                            type="text"
                                                            name="newAddress.address"
                                                            v-model="newAddress.address"
                                                            class="form-control"
                                                            id="newAddress"
                                                            placeholder="Nhập địa chỉ"
                                                            required
                                                            />
                                                        </div>

                                                        <div class="mb-3">
                                                            <label for="phone_number"
                                                            >Số điện thoại<span class="text-danger">*</span></label
                                                            >
                                                            <input
                                                            type="text"
                                                            name="newAddress.phone_number"
                                                            v-model="newAddress.phone_number"
                                                            class="form-control"
                                                            id="phone_number"
                                                            placeholder="Nhập số điện thoại"
                                                            required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer pt-4">
                                                        <button @click="addNewAddress" data-bs-dismiss="modal"
                                                            aria-label="Close" class="btn btn-success mx-auto w-100">
                                                            Thêm
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                        class="modal fade"
                                        id="edit"
                                        tabindex="-1"
                                        aria-hidden="true"
                                        >
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Sửa địa chỉ nhận hàng</h5>
                                                        <button
                                                            class="btn-close"
                                                            type="button"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="mb-3">
                                                            <label for="address"
                                                            >Địa chỉ<span class="text-danger">*</span></label
                                                            >
                                                            <input
                                                            type="text"
                                                            v-model="oldAddress.address"
                                                            class="form-control"
                                                            id="address"
                                                            placeholder="Nhập địa chỉ"
                                                            required
                                                            />
                                                        </div>

                                                        <div class="mb-3">
                                                            <label for="old-phone_number"
                                                            >Số điện thoại<span class="text-danger">*</span></label
                                                            >
                                                            <input
                                                            type="text"
                                                            v-model="oldAddress.phone_number"
                                                            class="form-control"
                                                            id="old-phone_number"
                                                            placeholder="Nhập số điện thoại"
                                                            required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer pt-4">
                                                        <button @click="editAddress" data-bs-dismiss="modal"
                                                            aria-label="Close" class="btn btn-success mx-auto w-100">
                                                            Sửa
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row px-2" v-if="address">
                                        <div class="col-md-6"> 
                                            <label class="form-control-label">{{name}}</label>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label class="form-control-label">{{address.phone_number}}</label> 
                                        </div>
                                        <div class="col-md-12"> 
                                            <label class="form-control-label">{{address.address}}</label> 
                                        </div>
                                    </div>
                                    <div class="row px-2" v-else>
                                        <div class="col-md-6"> 
                                            <label class="form-control-label"><span class="text-danger">Bạn chưa có thông tin địa chỉ nhận hàng</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-2">
                                    <div class="row d-flex justify-content-between px-4">
                                        <p class="mb-1 text-left">Tổng tiền</p>
                                        <h6 class="mb-1 text-right">{{subTotal}} VNĐ</h6>
                                    </div>
                                    <div class="row d-flex justify-content-between px-4">
                                        <p class="mb-1 text-left">Vận chuyển</p>
                                        <h6 class="mb-1 text-right">{{shiping}} VNĐ</h6>
                                    </div>
                                    <div class="row d-flex justify-content-between px-4" id="tax">
                                        <p class="mb-1 text-left">Số tiền cần thanh toán</p>
                                        <h6 class="mb-1 text-right">{{total}} VNĐ</h6>
                                    </div> <button class="btn-block btn-blue" @click="payment">
                                        <span> 
                                            <span id="checkout">Thanh toán</span> 
                                            <span id="check-amt" style="margin-left: 5px">{{total}} VNĐ</span> 
                                        </span>
                                    </button>
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
import CartItem from "../components/CartItem.vue"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

import CartAPI from "../api/cart"
import BookAPI from "../api/book"
import AddressAPI from "../api/address"
import UserAPI from "../api/user"

export default {
    components: {
        CartItem,
        Header,
        Footer,
        BackToTop
    },
    data: () => {
        return {
            cartList: [],
            subTotal: 0,
            shiping: 0,
            total: 0,
            address: null,
            name: null,
            newAddress: {
                address: null,
                phone_number: null
            },
            oldAddress: {
                id: null,
                address: null,
                phone_number: null
            }
        }
    },
    methods: {
        async changeQuantity(e, item) {
            if(e) {
                this.subTotal += item
                this.total += item
            } else {
                this.subTotal -= item
                this.total -= item
            }
        },
        async payment() {
            if(this.address) {
                alert('Thanh toán thành công!!!')
                this.$router.push('/')
            } else {
                alert('Chưa có địa chỉ')
            }
        },
        async addNewAddress() {
            this.newAddress.name = this.name
            await AddressAPI.addItemToCart(this.newAddress)
            location.reload()
        },
        async editAddress() {
            await AddressAPI.updateAddress(this.oldAddress.id, this.oldAddress)
            location.reload()
        },
        async getAddress() {
            const temp = await AddressAPI.getAddress()
            if(temp) {
                this.address = temp.data.pop()
            }

            if(this.address) {
                this.oldAddress.id = this.address._id
                this.oldAddress.address = this.address.address
                this.oldAddress.phone_number = this.address.phone_number
            }


            this.name = (await UserAPI.rememberUser()).full_name
        }
    },
    async created() {
        const item = await CartAPI.fetchAllItem()
        item.forEach(async(element) => {
            const data = await BookAPI.getBookByID(element.book)
            const list = {
                element,
                data
            }
            this.cartList.push(list)
            const temp = data.price * element.quantity
            this.subTotal += temp
            this.shiping += 20000
            this.total += (temp + 20000)
        })

        this.getAddress()
    }
}
</script>