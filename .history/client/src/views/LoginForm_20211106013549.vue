<template>
    <div class="login ">
        <form>
            <div class="modal-header">
            <h5 class="modal-title">Đăng nhập</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
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
            <button type="submit" @click="handleSubmitLogin" class="btn btn-success mx-auto w-100">
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
    <div
    class="modal fade"
    id="FormLogin"
    tabindex="-1"
    aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <form>
                <div class="modal-header">
                <h5 class="modal-title">Đăng nhập</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
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
                <button type="submit" @click="handleSubmitLogin" class="btn btn-success mx-auto w-100">
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
    </div>
    </div>
</template>

<script>
export default {
    name: "Login",
}
</script>