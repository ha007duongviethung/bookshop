<template>
    <div class="content crud">
        <div>
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <router-link to="/" @click="logout">Đăng xuất</router-link>
                            <router-link to="/crud"><h2>Quản lý <b>Sách</b></h2></router-link>
                        </div>
                        <div class="col-sm-6">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addEmployeeModal" class="btn btn-success"><i class="material-icons">&#xE147;</i> <span>Thêm sách</span></a>
                            <a href="" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal"><i class="material-icons">&#xE15C;</i> <span>Xoá</span></a>						
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>NXB</th>
                            <th>Thể loại</th>
                            <th>Ngày tạo</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll" @click="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th><input type="text" v-model="search_name" @keyup="searchBookName" class="form-control searchable-input floatL" placeholder="Tìm kiếm tên sách"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm tác giả"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm NXT"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm thể loại"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm ngày tạo"></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <BookItem v-for="book in bookapi" :key="book._id" :book="book" />
                    </tbody>
                </table>
                <div class="clearfix">
                    <div class="hint-text d-flex">
                        Show 
                        <div class="px-2">
                            <select name="" id="">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="250">250</option>
                                <option value="500">500</option>
                            </select>
                        </div>
                        entities
                    </div>
                    <ul class="pagination">
                        <li class="page-item disabled"><a href="#">Previous</a></li>
                        <li class="page-item"><a href="#" class="page-link">1</a></li>
                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                        <li class="page-item active"><a href="#" class="page-link">3</a></li>
                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                        <li class="page-item"><a href="#" class="page-link">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="addEmployeeModal" class="modal fade" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog large">
                <div class="modal-content">
                    <form @submit="handleAddBook">
                        <div class="modal-header">						
                            <h4 class="modal-title">Thêm sách</h4>
                            <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            @click="reset"
                            ></button>
                        </div>
                        <div class="modal-body">					
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="book_name">Tên sách</label>
                                        <input type="text" class="form-control" id="book_name" v-model="book_name" required>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="author">Tên tác giả</label>
                                        <input type="text" class="form-control" id="author" name="author" v-model="author" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="pb_company">Nhà sản xuất</label>
                                        <input type="text" class="form-control" id="pb_company" name="pb_company" v-model="pb_company" required>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="tp">Thể loại</label>
                                        <input type="text" class="form-control" id="tp" name="tp" v-model="tp" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="price">Giá sách (VNĐ)</label>
                                        <input type="number" class="form-control" id="price" name="price" v-model="price" required>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="amount">Số lượng</label>
                                        <input type="number" class="form-control" id="amount" name="amount" v-model="amount" required>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="slug">Slug</label>
                                        <select id="slug" class="form-select" v-model="slug">
                                            <option value="economic_technology">Công nghệ - Kinh tế</option>
                                            <option value="historical_society">Lịch sử - xã hội</option>
                                            <option value="action_adventure">Hành động - Phiêu lưu</option>
                                            <option value="novel">Truyện tiểu thuyết</option>
                                            <option value="self_growth">Phát triển bản thân</option>
                                            <option value="horror">Kinh dị</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <label for="brief_des">Mô tả ngắn gọn</label>
                                <textarea class="form-control" id="brief_des" name="brief_des" v-model="brief_des"></textarea>
                            </div>
                            <div class="form-group mt-3">
                                <label for="detailed_des">Mô tả chi tiết</label>
                                <textarea class="form-control" id="detailed_des" name="detailed_des" v-model="detailed_des"></textarea>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="height">Chiều dài (cm)</label>
                                        <input type="number" class="form-control" id="height" name="height" v-model="height">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="width">Chiều rộng (cm)</label>
                                        <input type="number" class="form-control" id="width" name="width" v-model="width">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="weight">Cân nặng (g)</label>
                                        <input type="number" class="form-control" id="weight" name="weight" v-model="weight">
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <input type="file" name="img" v-on:change="uploadImage" class="form-control" id="inputGroupFile02">
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>				
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" @click="reset" data-bs-dismiss="modal" value="Cancel">
                            <input type="submit" class="btn btn-success" value="Thêm sách">
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div id="deleteEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form @submit="handleDeleteBookSeleted">
                        <div class="modal-header">						
                            <h4 class="modal-title">Xoá</h4>
                            <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">					
                            <p>Bạn có chắc chắn muốn xoá những bản ghi đã được chọn này?</p>
                            <p class="text-warning"><small>Hành động này không thể được hoàn tác.</small></p>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Cancel">
                            <input type="submit" class="btn btn-danger" value="Delete">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookItem from "../components/BookItem.vue"
import BookAPI from "../api/book"
import UserAPI from "../api/user"

export default {
    name: "CRUD",
    components: {
        BookItem,
    },
    data: () => {
        return {
            bookapi: [],
            book_name: '',
            author: '',
            pb_company: '',
            tp: '',
            price: null,
            amount: null,
            slug: '',
            brief_des: '',
            detailed_des: '',
            height: null,
            width: null,
            weight: null,
            img: null,
            search_name: null
        }
    }, 
    methods: {
        async handleAddBook() {
            const data = {
                book_name: this.book_name,
                author: this.author,
                pb_company: this.pb_company,
                type: this.tp,
                price: this.price,
                amount: this.amount,
                slug: 'type-' + this.slug,
                brief_des: this.brief_des,
                detailed_des: this.detailed_des,
                height: this.height,
                width: this.width,
                weight: this.weight,
                img: this.img
            }

            await BookAPI.addBook(data)
        },
        reset() {
            this.book_name = '',
            this.author = '',
            this.pb_company = '',
            this.tp = '',
            this.price = null,
            this.amount = null,
            this.slug = '',
            this.brief_des = '',
            this.detailed_des = '',
            this.height = null,
            this.width = null,
            this.weight = null,
            this.img = null
        },
        uploadImage(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            const _this = this;
            reader.onload = (e) => {
                _this.img = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        selectAll(e) {
            const data = document.querySelectorAll('.checkbox')
            if(e.target.checked) {
                data.forEach(function(e) {
                    e.checked = true
                })
                
            } else {
                data.forEach(function(e) {
                    e.checked = false
                })
            }
        },
        handleDeleteBookSeleted() {
            const data = document.querySelectorAll('.checkbox')
            data.forEach(async function(e) {
                if(e.checked == true) {
                    const id = e.id.split('-')[1]
                    await BookAPI.deleteBook(id)
                }
            })
        },
        // searchBookName() {
        //     this.bookapi.forEach(book => {
                
        //     })
        // },
        logout() {
            this.isToken = false
            localStorage.removeItem('bookshop')
            alert("Đăng xuất thành công!!!")
        }
    },
    async created() {
        if(localStorage.getItem('bookshop')) {
            const user = await UserAPI.rememberUser()
            if(user.message == 'Admin logged in successfully')
            {
                const data = await BookAPI.getAllBooks()
                data.reverse().forEach(book => {
                    this.bookapi.push(book)
                })
            } else {
                this.$router.push('/')
            }
        } else {
            this.$router.push('/login')
        }
    }
}
</script>