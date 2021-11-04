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
                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#ModalForm">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                    <div class="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <!-- Login Form -->
                                <form action="">
                                    <h2 class="text-center text-success">Register Now</h2>
					<hr>
				  	<div class="form-group">
				    	<label>Email Address</label>
				    	<input type="email" class="form-control" placeholder="Enter email">
				    	<span class="hint alert-success">Enter you valid email id</span>
				  	</div>
				  	<div class="form-group">
				    	<label>Password</label>
				    	<input type="password" class="form-control" placeholder="Password">
				    	<span class="hint alert-success">Password should be 8 or up chars </span>
				  	</div>
				  	<div class="form-group">
				    	<label>Re-enter Password</label>
				    	<input type="password" class="form-control" placeholder="Password">
				    	<span class="hint alert-success">Re-enter same password</span>
				  	</div>
				  	<div class="form-group form-check">
				    	<input type="checkbox" class="form-check-input">
				    	<label class="form-check-label">Remember me</label>
				  	</div>
				  	<hr>
					<button type="submit" class="btn btn-success float-right">Register</button>
					<p class="text-center mt-2 mb-0 float-left">If you have account <a href="#" class="text-success">Sign In</a></p>
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
