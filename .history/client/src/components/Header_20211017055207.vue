<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img class="logo" src="../assets/logo_green.png" alt="BookStore"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 300px;">
                        <li class="nav-item d-lg-none d-xl-block">
                            <router-link class="nav-link" to="/new-book">Mới nhất</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action and Adventure</a></li>
                                <li><a class="dropdown-item" href="#">Classics</a></li>
                                <li><a class="dropdown-item" href="#">Detective and Mystery</a></li>
                                <li><a class="dropdown-item" href="#">Historical Fiction</a></li>
                                <li><a class="dropdown-item" href="#">Horror</a></li>
                                <li><a class="dropdown-item" href="#">Literary Fiction</a></li>
                                <li><a class="dropdown-item" href="#">Suspense and Thrillers</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tác giả
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nhà sản xuất
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav my-2 my-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#FormLogin">Đăng nhập</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#FormRegister">Đăng ký</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown rhf-cart"><a class="nav-link dropdown-toggle rhf-nav-link mobile-additional mobile-hide  rhf-my-cart-icon" href="https://www.barnesandnoble.com/checkout" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg width="27" height="32" xmlns="http://www.w3.org/2000/svg" alt="cart" class="brand"><path d="M23.097 18.988l-.165.783H7.77L5.75 8.862H25.25l-2.154 10.126zm-14.89 7.955c.934 0 1.692.713 1.692 1.591s-.758 1.59-1.693 1.59c-.933 0-1.691-.712-1.691-1.59 0-.878.758-1.591 1.691-1.591zm13.014 0c.934 0 1.691.713 1.691 1.591s-.757 1.59-1.691 1.59-1.692-.712-1.692-1.59c0-.872.746-1.58 1.672-1.591h.02zm5.802-19.454H5.5L4.241.689a.714.714 0 00-.713-.564H.471v1.363h2.447l4.476 24.21c-1.338.358-2.303 1.496-2.303 2.847 0 1.631 1.407 2.955 3.142 2.955 1.736 0 3.142-1.324 3.142-2.954 0-.595-.187-1.15-.508-1.613l7.695.01c-.308.449-.49.996-.49 1.583 0 1.627 1.401 2.946 3.132 2.946 1.73 0 3.133-1.32 3.133-2.946 0-1.627-1.403-2.945-3.133-2.945H8.844l-.822-4.446H24.15l.397-1.918.356-1.727.234-1 1.886-9.001z" fill="#000" fill-rule="evenodd"></path></svg><span class="rhf-cart-count">0</span></a><div id="rhfMiniCartContainer" class="dropdown-menu dropdown-menu-right bagContentsContainer" aria-labelledby="navbarDropdown" aria-hidden="true" style="opacity: 1; display: block;"><aside data-slide="" class="cart-slide-out spinner-container crtHidden" id="miniCart" style="opacity: 0; display: none;">
<input type="hidden" value="0" id="miniCartQuantityVal">
<div class="mini-cart-animated-box applyAnimation">
<div class="mini-cart">
<div class="mini-cart-top-section">
<div class="header-container d-flex">
<div class="header-text">Shopping Cart</div>
<div aria-describedby="shopping-cart-label" class="cart d-lg-block d-none">
<a class="shopping-bag-link" href="/checkout/">
<div class="icon-cart"></div>
<span class="count">0</span>
</a>
</div>
<div class="close-button">
<a class="icon-close-modal"></a>
</div>
</div>
<section id="miniCartErr" class="error-msg" role="alert" style="display:none;"></section>
<div class="free-shipping-rule">
<em class="emphasis emphasis--notification"> <span class="text--uppercase message"> FREE SHIPPING ON ORDERS OF $35+.</span>
</em>
</div>
</div>
<aside class="pb-0 mt-0 pt-0 mb-0 error-msg alert alert--error display-error crtHidden" id="error-msg-save-item-for-later" style="display: none; opacity: 0;">
<em class="emphasis emphasis--alert"></em>
</aside>
<div class="emptyMiniCart">
<div class="icon-empty-cart text--center">
<svg xmlns="http://www.w3.org/2000/svg" alt="Nook press cart" class="brand" width="50" height="62" viewBox="0 0 27 32">
<path d="M23.097 18.988l-.165.783H7.77L5.75 8.862H25.25l-2.154 10.126zm-14.89 7.955c.934 0 1.692.713 1.692 1.591s-.758 1.59-1.693 1.59c-.933 0-1.691-.712-1.691-1.59 0-.878.758-1.591 1.691-1.591zm13.014 0c.934 0 1.691.713 1.691 1.591s-.757 1.59-1.691 1.59-1.692-.712-1.692-1.59c0-.872.746-1.58 1.672-1.591h.02zm5.802-19.454H5.5L4.241.689a.714.714 0 00-.713-.564H.471v1.363h2.447l4.476 24.21c-1.338.358-2.303 1.496-2.303 2.847 0 1.631 1.407 2.955 3.142 2.955 1.736 0 3.142-1.324 3.142-2.954 0-.595-.187-1.15-.508-1.613l7.695.01c-.308.449-.49.996-.49 1.583 0 1.627 1.401 2.946 3.132 2.946 1.73 0 3.133-1.32 3.133-2.946 0-1.627-1.403-2.945-3.133-2.945H8.844l-.822-4.446H24.15l.397-1.918.356-1.727.234-1 1.886-9.001z" fill="#000" fill-rule="evenodd"></path></svg>
</div>
<p>There are currently no items in your shopping cart.</p>
</div>
<div class="accordion mini-cart-save-for-later-scroll-section" id="accordionPaymentOptions">
</div>
<div class="emptyMiniCart__footer shadow-none">
<button class="btn continue-btn btn--large mb-0" onclick="RhfMiniCartHideCart()">CONTINUE SHOPPING</button>
<a href="#" class="cart-sign-in text--align btn-ghost pt-0">SIGN
IN</a>
</div>
<script src="//www.paypalobjects.com/api/checkout.js"></script>
<input type="hidden" id="paypal_express_post_url" name="paypal_express_post_url" value="/checkout/express-checkout.jsp?express=true">
<input type="hidden" id="pp_environment" name="paypalEnvironment" value="production">
</div>
</div>
<div class="mini-cart-mask"></div>
</aside>
</div></li>
                    </ul>
                    <div class="modal fade" id="FormLogin" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <!-- Login Form -->
                                <form action="">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Login Form</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="Username">Username<span class="text-danger">*</span></label>
                                            <input type="text" name="username" class="form-control" id="Username" placeholder="Enter Username" required>
                                        </div>

                                        <div class="mb-3">
                                            <label for="Password">Password<span class="text-danger">*</span></label>
                                            <input type="password" name="password" class="form-control" id="Password" placeholder="Enter Password" required>
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="remember">
                                            <label class="form-check-label" for="remember">Remember Me</label>
                                        </div>
                                    </div>
                                    <div class="modal-footer pt-4">                  
                                        <button type="submit" class="btn btn-success mx-auto w-100">Login</button>
                                    </div>
                                    <p class="text-center">Not yet account, <a href="#" data-bs-toggle="modal" data-bs-target="#FormRegister">Register</a></p> 
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="FormRegister" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <!-- Login Form -->
                                <form action="">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Register Form</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="Fullname">Fullname</label>
                                            <input type="text" name="fullname" class="form-control" id="Fullname" placeholder="Enter Full Name">
                                        </div>

                                        <div class="mb-3">
                                            <label for="Username">Username<span class="text-danger">*</span></label>
                                            <input type="text" name="username" class="form-control" id="Username" placeholder="Enter Username" required>
                                        </div>

                                        <div class="mb-3">
                                            <label for="Password">Password<span class="text-danger">*</span></label>
                                            <input type="password" name="password" class="form-control" id="Password" placeholder="Enter Password" required>
                                        </div>

                                        <div class="mb-3">
                                            <label for="Confirmpassword">Confirm password<span class="text-danger">*</span></label>
                                            <input type="password" name="ConfirmPassword" class="form-control" id="Confirmpassword" placeholder="Confirm Password" required>
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="agree">
                                            <label class="form-check-label me-2" for="agree">I agree all statements in </label>
                                            <a href="#">Terms of service</a>
                                        </div>
                                    </div>
                                    <div class="modal-footer pt-4">                  
                                        <button type="submit" class="btn btn-success mx-auto w-100">Register</button>
                                    </div>
                                    <p class="text-center">Already have an account, <a href="#" data-bs-toggle="modal" data-bs-target="#FormLogin">Login</a></p> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: () => {
        return {
            isTL: false
        }
    }
}
</script>
