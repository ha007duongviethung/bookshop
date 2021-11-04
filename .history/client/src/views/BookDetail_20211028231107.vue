<template>
    <section class="my-5 content">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div id="mdb-lightbox-ui"></div>

                    <div class="mdb-lightbox">
                        <div class="row product-gallery mx-1">
                            <div class="col-12 mb-0">
                                <figure class="view overlay rounded z-depth-1 main-img">
                                <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                    data-size="710x823">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                    class="img-fluid z-depth-1">
                                </a>
                                </figure>
                                <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                    data-size="710x823">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                    class="img-fluid z-depth-1">
                                </a>
                                </figure>
                                <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                    data-size="710x823">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                    class="img-fluid z-depth-1">
                                </a>
                                </figure>
                                <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
                                <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    data-size="710x823">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    class="img-fluid z-depth-1">
                                </a>
                                </figure>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                <div class="col-3">
                                    <div class="view overlay rounded z-depth-1 gallery-item">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                        class="img-fluid">
                                    <div class="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="view overlay rounded z-depth-1 gallery-item">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                        class="img-fluid">
                                    <div class="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="view overlay rounded z-depth-1 gallery-item">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                        class="img-fluid">
                                    <div class="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="view overlay rounded z-depth-1 gallery-item">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        class="img-fluid">
                                    <div class="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">

                <h5>Fantasy T-shirt</h5>
                <p class="mb-2 text-muted text-uppercase small">Shirts</p>
                <div>
                    <span class="new-price">$12.99</span>
                    <span class="old-price">$50.00</span>
                </div>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                    error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                    officia quis dolore quos sapiente tempore alias.</p>
                <div class="table-responsive">
                    <table class="table table-sm table-borderless mb-0">
                    <tbody>
                        <tr>
                        <th class="pl-0 w-25" scope="row"><strong>Thể loại</strong></th>
                        <td>Shirt 5407X</td>
                        </tr>
                        <tr>
                        <th class="pl-0 w-25" scope="row"><strong>Tác giả</strong></th>
                        <td>Black</td>
                        </tr>
                        <tr>
                        <th class="pl-0 w-25" scope="row"><strong>Nhà xuất bản</strong></th>
                        <td>USA, Europe</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <hr>
                <div class="table-responsive mb-2">
                    <table class="table table-sm table-borderless">
                    <tbody>
                        <tr>
                            <td class="pl-0 pb-0 w-25">Quantity</td>
                            <td class="pl-0 pb-0 w-25">Price</td>
                        </tr>
                        <tr>
                            <td class="pl-0">
                                <div class="def-number-input number-input safari_only mb-0">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus">-</button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus">+</button>
                                </div>
                            </td>
                            <td class="pl-0 total">$100.93</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <button type="button" class="btn btn-primary btn-md">Buy now</button>
                <button type="button" class="btn btn-outline-dark mx-3">Add to cart</button>
                </div>
            </div>
        </div>
    </section>
</template>