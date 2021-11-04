<template>
    <div class="row d-flex justify-content-center border-top py-3">
        <div class="col-6">
            <div class="row d-flex flex-nowrap">
                <div class="book"> <img :src=" `http:localhost/${item.img}`" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{item.book_name}}</h6>
                    <p class="mob-text">{{item.author}}</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-6">
            <div class="row text-right">
                <div class="col-3">
                    <p class="mob-text">{{item.price}}</p>
                </div>
                <div class="col-3">
                    <div class="d-flex justify-content-start px-3">
                        <p class="mb-0" id="cnt1">{{item.amount}}</p>
                        <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                    </div>
                </div>
                <div class="col-3">
                    <h6 class="mob-text">{{item.price * item.amount}}</h6>
                </div>
                <div class="col-3">
                    <a href="">Xóa</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ["item"]
}
</script>