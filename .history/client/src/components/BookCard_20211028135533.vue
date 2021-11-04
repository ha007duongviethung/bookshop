<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-3">
      <div class="card-img">
        <img :src="book.img" class="card-img-top" alt="book" />
        <div class="quick-add">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#quickadd"
            >Quick add</a
          >
        </div>
        <div
            class="modal fade"
            id="quickadd"
            tabindex="-1"
            aria-hidden="true"
          >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="Username"
                      >Username<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="username"
                      class="form-control"
                      id="Username"
                      placeholder="Enter Username"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="Password"
                      >Password<span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="Password"
                      placeholder="Enter Password"
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
                      >Remember Me</label
                    >
                  </div>
                </div>
                <div class="modal-footer pt-4">
                  <button type="submit" class="btn btn-success mx-auto w-100">
                    Login
                  </button>
                </div>
                <p class="text-center">
                  Not yet account,
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#FormRegister"
                    >Register</a
                  >
                </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">{{ book._type }}</p>
        <p class="card-text">
          <small class="text-muted">by: {{ book.auth }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: ["book"],
};
</script>
