<template>
    <div id="addEmployeeModal" class="modal fade" @click="reset" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog large">
            <div class="modal-content">
                <form @submit.prevent="handleAddBook" @click.stop>
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
                                    <input type="text" class="form-control" id="book_name" name="book_name" v-model="book_name" required>
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
</template>