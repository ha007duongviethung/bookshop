<template>
    <div class="content crud">
        <div>
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <router-link to="/">Exit</router-link>
                            <h2>Quản lý <b>Sách</b></h2>
                        </div>
                        <div class="col-sm-6">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addEmployeeModal" class="btn btn-success"><i class="material-icons">&#xE147;</i> <span>Thêm sách</span></a>
                            <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal"><i class="material-icons">&#xE15C;</i> <span>Xoá</span></a>						
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
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm tên sách"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm tên tác giả"></th>
                            <th><input type="text" class="form-control searchable-input floatL" placeholder="Tìm kiếm tên NXT"></th>
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

        <div id="editEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Edit Employee</h4>
                            <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <textarea class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" required>
                            </div>					
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Cancel">
                            <input type="submit" class="btn btn-info" value="Save">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div id="deleteEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Delete Employee</h4>
                            <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">					
                            <p>Are you sure you want to delete these Records?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
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
            brief_des: '',
            detailed_des: '',
            height: null,
            width: null,
            weight: null,
            img: null
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
                brief_des: this.brief_des,
                detailed_des: this.detailed_des,
                height: this.height,
                width: this.width,
                weight: this.weight,
                img: this.img
            }

            await BookAPI.addBook(data)
            this.$router.push({ name: 'CRUD'})
        },
        reset() {
            this.book_name = '',
            this.author = '',
            this.pb_company = '',
            this.tp = '',
            this.price = null,
            this.amount = null,
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
            let vm = this;
            reader.onload = (e) => {
                vm.img = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    async created() {
        this.bookapi = await BookAPI.getAllBooks();
    }
}
</script>