<template>
  <Header />
  <router-view />
  <Footer />
  <button type="button" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
  <i class="fas fa-arrow-up"></i>
</button>

<!-- Explanation -->
<div class="container mt-4 text-center" style="height: 2000px;">
  <p>
    Start scrolling the page and a strong
    <strong>"Back to top" button </strong> will appear in the
    <strong>bottom right corner</strong> of the screen.
  </p>

  <p>
    Click this button and you will be taken to the top of the page.
  </p>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
};
</script>
