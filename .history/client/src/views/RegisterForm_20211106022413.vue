<template>
    <div class="login d-flex justify-content-center align-items-center modal-dialog modal-dialog-centered">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <form @submit.prevent="handleSubmitRegister">
                <div class="modal-header">
                <h5 class="modal-title">Đăng ký</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div class="modal-body">
                <div class="mb-3">
                    <label for="full_name">Họ và tên</label>
                    <input
                    type="text"
                    name="full_name"
                    v-model="full_name"
                    class="form-control"
                    id="full_name"
                    placeholder="Nhập họ và tên"
                    />
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
                    id="user_name_register"
                    placeholder="Nhập tài khoản"
                    required
                    />
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
                <a
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#FormLogin"
                    >Đăng nhập</a
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
            full_name: "",
            user_name: "",
            password: "",
        }
    },
    methods: {
        async handleSubmitRegister() {
            const data = {
                user_name: this.user_name,
                password: this.password
            }

            await UserAPI.register(data)
            this.$router.push('/login')
        },
    }
}
</script>