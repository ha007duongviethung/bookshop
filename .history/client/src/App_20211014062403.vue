<template>
  <div id="nav">
    <Header />
  </div>
  
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <router-view /> -->
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
