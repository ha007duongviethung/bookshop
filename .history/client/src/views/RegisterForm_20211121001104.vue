<template>
    <div class="login d-flex justify-content-center align-items-center modal-dialog modal-dialog-centered">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <form @submit.prevent="handleSubmitRegister">
                <div class="modal-header">
                <h5 class="modal-title">Đăng ký</h5>
                <router-link
                    to="/"
                    class="btn-close"
                ></router-link>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="full_name">Họ và tên<span class="text-danger">*</span></label>
                        <input
                        type="text"
                        name="full_name"
                        v-model="full_name"
                        class="form-control"
                        :class="{'is-valid': nameValid, 'is-invalid': nameInvalid}"
                        @keyup="checkName"
                        @blur="checkName"
                        id="full_name"
                        placeholder="Nhập họ và tên"
                        required
                        />
                        <div class="valid-feedback">
                            Hợp lệ!!!
                        </div>
                        <div class="invalid-feedback">
                            Tên không hợp lệ@@@
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="user_name_register"
                        >Tài khoản<span class="text-danger">*</span></label
                        >
                        <input
                        type="text"
                        name="username"
                        v-model="user_name"
                        class="form-control"
                        :class="{'is-valid': userValid, 'is-invalid': userInvalid}"
                        @keyup="checkUser"
                        @blur="checkUser"
                        id="user_name_register"
                        placeholder="Nhập tài khoản"
                        required
                        />
                        <div class="valid-feedback">
                            Hợp lệ!!!
                        </div>
                        <div class="invalid-feedback">
                            Tài khoản không hợp lệ@@@
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password_register"
                        >Mật khẩu<span class="text-danger">*</span></label
                        >
                        <input
                        type="password"
                        name="password"
                        v-model="password"
                        class="form-control"
                        id="password_register"
                        placeholder="Nhập mật khẩu"
                        required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="confirm_password"
                        >Nhập lại mật khẩu<span class="text-danger"
                            >*</span
                        ></label
                        >
                        <input
                        type="password"
                        name="ConfirmPassword"
                        v-model="confirm_password"
                        class="form-control"
                        id="confirm_password"
                        placeholder="Nhập lại mật khẩu"
                        required
                        />
                    </div>

                    <div class="input-group mb-3">
                        <input type="file" name="img" v-on:change="uploadImage" class="form-control" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>	

                    <div class="mb-3">
                        <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="agree"
                        />
                        <label class="form-check-label me-2" for="agree"
                        >Tôi đồng ý với tất cả các tuyên bố trong
                        </label>
                        <a href="#">Điều khoản dịch vụ</a>
                    </div>
                </div>
                <div class="modal-footer pt-4">
                <button type="submit" class="btn btn-success mx-auto w-100">
                    Đăng ký
                </button>
                </div>
                <p class="text-center">
                Tôi đã có tài khoản,
                <router-link
                to="/login"
                    >Đăng nhập</router-link
                >
                </p>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import UserAPI from "../api/user"

export default {
    name: "Register",
    data: () => {
        return {
            full_name: null,
            user_name: null,
            password: null,
            confirm_password: null,
            img: null,
            nameValid: false,
            nameInvalid: false,
            userValid: false,
            userInvalid: false
        }
    },
    methods: {
        async handleSubmitRegister() {
            if(this.password == this.confirm_password) {
                const data = {
                    full_name: this.full_name,
                    user_name: this.user_name,
                    password: this.password,
                    img: this.img
                }
                await UserAPI.register(data)
                this.$router.push('/login')
                alert('Đăng ký thành công!!!')
            } else {
                alert('Mật khẩu không đúng@@@')
            }
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
        checkFormat(str) {
            return str.match(/^[^a-zA-Z0-9]*$/) ? true : false;
        },
        checkName() {
            this.nameValid = false
            this.nameInvalid = true
            if(this.full_name) {
                if(!this.checkFormat(this.full_name)) {
                    this.nameValid = true
                    this.nameInvalid = false
                }
            }
        },
        checkUser() {
            this.userValid = false
            this.userInvalid = true
            if(this.user_name) {
                if(!this.checkFormat(this.user_name)) {
                    this.userValid = true
                    this.userInvalid = false
                }
            }
        }
    }
}
</script>