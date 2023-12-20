<!--
 * @Author: huangbiao huangb@faithindata.com.cn
 * @Date: 2023-01-17 09:34:59
 * @LastEditors: huangbiao huangb@faithindata.com.cn
 * @LastEditTime: 2023-12-20 18:19:16
 * @FilePath: \test_vue_cli2\src\components\pageHeader.vue
 * @Description: 
-->
<template>
  <div class="page-header">
    <div class="left">
      <router-link to="/homePage" class="host-name"> Hsingleb </router-link>
      <router-link to="/myTest"> Test实验室</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader"
};
</script>

<style lang="less" scoped>
@import "../styles/font_set.less";

.page-header {
  margin: 8px 10% 8px 10%;
  // width: 70%;
  // 默认填满可利用空间
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: aliMomFont;
  font-size: 16px;
  // 左边标题文字
  .host-name {
    font-size: 32px;
    color: #5dc3ea;
  }
}
</style>
