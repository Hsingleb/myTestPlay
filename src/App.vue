<template>
  <div id="app">
    <page-header></page-header>
    <home-page></home-page>
  </div>
</template>

<script>
import homePage from "./view/index.vue";
import pageHeader from "./view/system/pageHeader.vue";

export default {
  name: "App",
  components: {
    pageHeader,
    homePage
  }
};
</script>

<style></style>
