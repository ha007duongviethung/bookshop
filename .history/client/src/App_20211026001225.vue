<template>
  <Header />
  <router-view />
  <Footer />
  <BackToTop />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/BackToTop.vue";

export default {
  components: {
    Header,
    Footer,
    BackToTop,
  },
};
</script>
