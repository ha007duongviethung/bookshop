<template>
    <div class="row d-flex justify-content-center border-top py-3 " >
        <a :href="`/book-detail_${item.element.book}`" class="col-6 text-decoration-none" style="color: #111">
            <div class="row d-flex flex-nowrap">
                <div class="book"> <img :src="item.data.img" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{sstring(item.data.book_name)}}</h6>
                    <p class="mob-text">{{sstring(item.data.author)}}</p>
                </div>
            </div>
        </a>
        <div class="my-auto col-6">
            <div class="row text-right" style="margin: 0">
                <div class="col-3">
                    <p class="mob-text">{{item.data.price}}</p>
                </div>
                <div class="col-3">
                    <div class="d-flex justify-content-start px-3">
                        <p class="mb-0" id="cnt1">{{quantity}}</p>
                        <div class="d-flex flex-column plus-minus"> 
                            <span class="vsm-text plus" @click="quantityPlus">+</span> 
                            <span class="vsm-text minus" @click="quantityPrev">-</span> 
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <h6 class="mob-text text-center">{{item.data.price * quantity}}</h6>
                </div>
                <div class="col-3">
                    <a href="" class="d-block text-center" @click="deleteItemInCart">Xóa</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartAPI from '../api/cart'

export default {
    name: 'CartItem',
    props: ["item"],
    methods: {
        sstring(str) {
            let title = str.substring(0, 30)
            if(str.length > 30) {
                title += '...'
            }
            return title
        },
        quantityPlus() {
            if(this.quantity < this.item.data.amount) {
                this.quantity++
                this.updateItem()
                this.$emit('changeQuantity', true)
            }
        },
        quantityPrev() {
            if(this.quantity > 1) {
                this.quantity--
                this.updateItem()
                this.$emit('changeQuantity', false)
            }
        },
        async updateItem() {
            const data = {
                book: this.item.data._id,
                quantity: this.quantity
            }
            await CartAPI.updateItem(this.item.element._id, data)
        },
        async deleteItemInCart() {
            await CartAPI.deleteItemInCart(this.item.element._id)
        }
    },
    data() {
        return {
            subTotal: null,
            quantity: null
        }
    },
    created() {
        this.quantity = this.item.element.quantity
    }
}
</script>