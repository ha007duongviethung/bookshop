<template>
    <div class="row d-flex justify-content-center border-top py-3">
        <div class="col-6">
            <div class="row d-flex flex-nowrap">
                <div class="book"> <img src="https://i.imgur.com/2DsA49b.jpg" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-6">
            <div class="row text-right">
                <div class="col-4">
                    <p class="mob-text">Digital</p>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-start px-3">
                        <p class="mb-0" id="cnt1">1</p>
                        <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">$9.99</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
}
</script>