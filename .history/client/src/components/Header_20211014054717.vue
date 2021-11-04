<template>
    <header>
            <div class="container">
                <div class="row top-header">
                    <div class="col-12 col-md-3 order-md-0">
                        <ul class="personcal-list">
                            <li class="person-item">
                                <div class="person-icon">
                                    <div class="amount">1</div>
                                    <img src="./public/img/heart.png" alt="">
                                </div>
                                <p>Love</p>
                            </li>
                            <li class="person-item js-person-item">
                                <div class="person-icon">
                                    <img src="./public/img/user.png" alt="">
                                </div>
                                <p>Account</p>
                                <nav class="person-nav js-person-nav">
                                    <ul>
                                        <li>Login</li>
                                        <li>Register</li>
                                    </ul>
                                </nav>
                            </li>
                            <li class="person-item">
                                <div class="person-icon">
                                    <div class="amount">2</div>
                                    <img src="./public/img/shopping-cart.png" alt="">
                                </div>
                                <p>Cart</p>
                                <nav class="person-cart">
                                    <ul class="person-cart_box">
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                        <li class="">
                                            <img src="./public/img/world-history.png" alt="">
                                            <span>World History 101: From Ancient Mesopotamia and the Viking</span>
                                        </li>
                                    </ul>
                                    <div class="payment">
                                        <p><span>Tổng tiền:</span> 2500$</p>
                                        <button>Giỏ hàng</button>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                    </div>
                    <div class="col-2 d-md-none">
                        <div class="menu-icon js-menu">
                            <img src="./public/img/menu.png" alt="">
                            <img class="d-none" src="./public/img/cancel.png" alt="">
                        </div>
                    </div>
                    <div class="col-8 col-md-3 order-md-first">
                        <div class="logo">
                            <a href="./">
                                <img src="./public/img/logo_green.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-2 col-md-6 order-md-first">
                        <div class="search js-search">
                            <button class="search-button">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
                                                c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
                                                c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
                                                S326.847,409.323,225.474,409.323z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
                                                c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="equal-container menu-header js-list">
                            <ul>
                                <li class="js-item">
                                    <a>
                                        <p>Books & Media</p>
                                        <img src="./public/img/right-chevron.png" alt="">
                                        <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                    </a>
                                    <ul class="submenu1">
                                        <li class="js-item">
                                            <a>
                                                <p>Fiction</p>
                                                <img src="./public//img/right-chevron.png" alt="">
                                                <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                            </a>
                                            <ul class="submenu2">
                                                <li><a>View all Fiction</a></li>
                                                <li>
                                                    <a>Award Winners</a>
                                                </li>
                                                <li><a>LGBT</a></li>
                                                <li><a>Crime & Thriller</a></li>
                                                <li><a>Sclence Fiction & Fantasy</a></li>
                                                <li><a>Romance</a></li>
                                                <li><a>Short story books</a></li>
                                                <li><a>Asian Literature</a></li>
                                            </ul>
                                        </li>
                                        <li class="js-item">
                                            <a>
                                                <p>Non-Fiction</p>
                                                <img src="./public//img/right-chevron.png" alt="">
                                                <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                            </a>
                                            <ul class="submenu2">
                                                <li><a>Biography & Memories</a></li>
                                                <li>
                                                    <a>Business & Economics</a>
                                                </li>
                                                <li><a>Finance & Investment</a></li>
                                                <li><a>Moticational & Inspirationals</a></li>
                                            </ul>
                                        </li>
                                        <li class="js-item"><a>Classics</a></li>
                                        <li class="js-item"><a>Poetry</a></li>
                                        <li class="js-item"><a>Books Into Movies</a></li>
                                        <li class="js-item">
                                            <a>
                                                <p>Award Winners</p>
                                                <img src="./public//img/right-chevron.png" alt="">
                                                <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                            </a>
                                            <ul class="submenu2">
                                                <li><a>Pulitzer Prize Winners & Finalists</a></li>
                                                <li>
                                                    <a>Man Booker Prize Winners & Finalists</a>
                                                </li>
                                                <li><a>Nobel Prize</a></li>
                                            </ul>
                                        </li>
                                        <li class="js-item"><a>Children Books</a></li>
                                        <li class="js-item"><a>Young Adults</a></li>
                                        <li class="js-item"><a>Gre / GMAT Bookss</a></li>
                                        <li class="js-item">
                                            <a>
                                                <p>Books By Languages</p>
                                                <img src="./public//img/right-chevron.png" alt="">
                                                <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                            </a>
                                            <ul class="submenu2">
                                                <li><a>Korean Languages</a></li>
                                                <li>
                                                    <a>English Languages</a>
                                                </li>
                                                <li><a>France Languages</a></li>
                                                <li><a>Chinese Languages</a></li>
                                            </ul>
                                        </li>
                                        <li class="js-item"><a>Books ob Sale</a></li>
                                    </ul>
                                </li>
                                <li class="js-item" ><a>Rare & Collectibles</a></li>
                                <li class="js-item" ><a>Gifts & Apparel</a></li>
                                <li class="js-item" ><a>Corporate Services</a></li>
                                <li class="js-item" ><a>Wholesale</a></li>
                                <li class="js-item" ><a>More..</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-9">
                        <div class="equal-container search-input js-input">
                            <input type="text" name="search" placeholder="Search..." autocomplete="off" value="">
                            <div class="cancel js-cancel">
                                <img class="" src="./public/img/cancel.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-header d-md-block">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="navbar js-navbar">
                                <li class="navbar-item js-item">
                                    <a>
                                        Books & Media
                                        <img src="./public/img/down-arrow.png" alt="">
                                        <img class="d-none" src="./public/img/up-arrow.png" alt="">
                                    </a>
                                    <ul class="position-subnavbar subnavbar">
                                        <li class="js-item">
                                            <a>
                                                English Languages
                                                <img src="./public/img/right-chevron.png" alt="">
                                                <img class="d-none" src="./public/img/left-chevron.png" alt="">
                                            </a>
                                            <ul class="position-subnavbar sub-subnavbar">
                                                <li><a>Toeic</a></li>
                                                <li><a>Ielts</a></li>
                                            </ul>
                                        </li>
                                        <li class=""><a>France Languages</a></li>
                                        <li class=""><a>Chinese Languages</a></li>
                                        <li class=""><a>Korean Languages</a></li>
                                    </ul>
                                </li>
                                <li class="navbar-item">
                                    <a>Gifts & Apparel</a>
                                </li>
                                <li class="navbar-item">
                                    <a>Corporate Services</a>
                                </li>
                                <li class="navbar-item js-item">
                                    <a>
                                        Wholesale
                                    </a>
                                </li>
                                <li class="navbar-item">
                                    <a>More...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
</template>

<script>
export default {
    name: "Header"
}
</script>
