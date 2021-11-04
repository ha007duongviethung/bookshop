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
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="rhf-icon-user"><path d="M9.773.813c4.971 0 9 3.827 9 8.55 0 4.722-4.029 8.55-9 8.55-4.97 0-9-3.828-9-8.55 0-4.723 4.03-8.55 9-8.55zm.787 11.257H8.975c-1.964.004-3.554 1.515-3.558 3.38h0v.388l-.03-.018a8.311 8.311 0 004.385 1.236 8.27 8.27 0 004.345-1.212h0v-.394c-.003-1.865-1.594-3.376-3.557-3.38h0zM9.778 1.668h-.022c-4.47 0-8.094 3.442-8.094 7.689 0 2.348 1.108 4.451 2.868 5.86.14-2.219 2.076-3.977 4.445-3.98h1.584c2.37.003 4.305 1.762 4.457 3.982 1.747-1.41 2.856-3.514 2.856-5.862 0-4.247-3.623-7.69-8.094-7.69h0zm-.005 1.71c1.989 0 3.6 1.53 3.6 3.42 0 1.889-1.611 3.42-3.6 3.42-1.988 0-3.6-1.531-3.6-3.42 0-1.89 1.612-3.42 3.6-3.42zm0 .855c-1.49.003-2.696 1.15-2.7 2.565 0 1.416 1.21 2.565 2.7 2.565 1.491 0 2.7-1.149 2.7-2.565 0-1.417-1.209-2.565-2.7-2.565h0z" fill="#000" fill-rule="nonzero" stroke="#000" stroke-width=".25"></path></svg>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#FormLogin">Đăng nhập</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#FormRegister">Đăng ký</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link shopping">
                                <span class="d-lg-none me-2">Giỏ hàng</span>
                                <svg width="27" height="32" xmlns="http://www.w3.org/2000/svg" alt="cart" class="brand"><path d="M23.097 18.988l-.165.783H7.77L5.75 8.862H25.25l-2.154 10.126zm-14.89 7.955c.934 0 1.692.713 1.692 1.591s-.758 1.59-1.693 1.59c-.933 0-1.691-.712-1.691-1.59 0-.878.758-1.591 1.691-1.591zm13.014 0c.934 0 1.691.713 1.691 1.591s-.757 1.59-1.691 1.59-1.692-.712-1.692-1.59c0-.872.746-1.58 1.672-1.591h.02zm5.802-19.454H5.5L4.241.689a.714.714 0 00-.713-.564H.471v1.363h2.447l4.476 24.21c-1.338.358-2.303 1.496-2.303 2.847 0 1.631 1.407 2.955 3.142 2.955 1.736 0 3.142-1.324 3.142-2.954 0-.595-.187-1.15-.508-1.613l7.695.01c-.308.449-.49.996-.49 1.583 0 1.627 1.401 2.946 3.132 2.946 1.73 0 3.133-1.32 3.133-2.946 0-1.627-1.403-2.945-3.133-2.945H8.844l-.822-4.446H24.15l.397-1.918.356-1.727.234-1 1.886-9.001z" fill="#000" fill-rule="evenodd"></path></svg>
                                <span class="shopping-amount">0</span>
                            </a>
                        </li>
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
