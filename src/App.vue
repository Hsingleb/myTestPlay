<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>

<script>
import pageHeader from "./components/pageHeader.vue";

export default {
  name: "App",
  components: {
    pageHeader
  }
};
</script>

<style></style>
