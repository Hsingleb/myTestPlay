<template>
  <div class="page-header">
    <div class="left">
      <router-link to="/homePage"> Hsingleb </router-link>
      <router-link to="/mytest"> Test一下~ </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader"
};
</script>

<style lang="less" scoped>
.page-header {
  margin: 0 15% 0 15%;
  width: 70%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
