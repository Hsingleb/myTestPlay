<template>
  <div class="homePage">
    <div style="width: 100%; height: 200px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import pageHeader from "./system/pageHeader.vue";
export default {
  name: "homePage"
  // components: {
  //   pageHeader
  // }
};
</script>

<style lang="less" scoped>
.homePage {
}
</style>
