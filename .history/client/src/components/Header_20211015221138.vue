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
                        <li class="nav-item">
                            <router-link class="nav-link" to="/new-book">Mới nhất</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại
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
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#FormLogin">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#FormRegister">Register</a>
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
                                            <input type="text" name="username" class="form-control" id="Username" placeholder="Enter Username">
                                        </div>

                                        <div class="mb-3">
                                            <label for="Password">Password<span class="text-danger">*</span></label>
                                            <input type="password" name="password" class="form-control" id="Password" placeholder="Enter Password">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="remember" required>
                                            <label class="form-check-label" for="remember">Remember Me</label>
                                            <a href="#" class="float-end">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div class="modal-footer pt-4">                  
                                        <button type="button" class="btn btn-success mx-auto w-100">Login</button>
                                    </div>
                                    <p class="text-center">Not yet account, <a href="#">Signup</a></p> 
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
                                            <input type="text" name="fullname" class="form-control" id="Fullname" placeholder="Enter Fullname">
                                        </div>

                                        <div class="mb-3">
                                            <label for="Username">Username<span class="text-danger">*</span></label>
                                            <input type="text" name="username" class="form-control" id="Username" placeholder="Enter Username">
                                        </div>

                                        <div class="mb-3">
                                            <label for="Password">Password<span class="text-danger">*</span></label>
                                            <input type="password" name="password" class="form-control" id="Password" placeholder="Enter Password">
                                        </div>
                                        <div class="mb-3">
                                            <a href="#" class="float-center">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div class="modal-footer pt-4">                  
                                        <button type="button" class="btn btn-success mx-auto w-100">Login</button>
                                    </div>
                                    <p class="text-center">Not yet account, <a href="#">Signup</a></p> 
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
