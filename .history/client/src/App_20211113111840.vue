<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    BackToTop
    Footer,
  },
};
</script>
