<!--
 * @Author: huangbiao huangb@faithindata.com.cn
 * @Date: 2023-01-17 09:34:59
 * @LastEditors: huangbiao huangb@faithindata.com.cn
 * @LastEditTime: 2023-12-20 18:21:45
 * @FilePath: \test_vue_cli2\src\App.vue
 * @Description: 
-->
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
