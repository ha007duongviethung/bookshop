<template>
    <div class="login d-flex justify-content-center align-items-center modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form @submit.prevent="handleSubmitLogin">
                <div class="modal-header">
                <h5 class="modal-title">Đăng nhập</h5>
                <router-link
                    to="/"
                    class="btn-close"
                ></router-link>
                </div>
                <div class="modal-body">
                <div class="mb-3">
                    <label for="user_name"
                    >Tài Khoản<span class="text-danger">*</span></label
                    >
                    <input
                    type="text"
                    name="username"
                    v-model="user_name"
                    class="form-control"
                    id="user_name"
                    placeholder="Nhập tài khoản"
                    required
                    />
                </div>

                <div class="mb-3">
                    <label for="password"
                    >Mật khẩu<span class="text-danger">*</span></label
                    >
                    <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    required
                    />
                </div>
                <div class="mb-3">
                    <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="remember"
                    />
                    <label class="form-check-label" for="remember"
                    >Nhớ tài khoản</label
                    >
                </div>
                </div>
                <div class="modal-footer pt-4">
                <button type="submit" class="btn btn-success mx-auto w-100">
                    Đăng nhập
                </button>
                </div>
                <p class="text-center">
                Tôi chưa có tài khoản,
                <a
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#FormRegister"
                    >Đăng ký</a
                >
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import UserAPI from "../api/user"

export default {
    name: "Login",
    data: () => {
        return {
            user_name: "",
            password: "",
        }
    },
    methods: {
        async handleSubmitLogin() {
            const data = {
                user_name: this.user_name,
                password: this.password
            }

            await UserAPI.login(data)
            this.$router.push('/')
        },
    }
}
</script>