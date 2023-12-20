<!--
 * @Author: huangbiao huangb@faithindata.com.cn
 * @Date: 2023-04-28 14:25:09
 * @LastEditors: huangbiao huangb@faithindata.com.cn
 * @LastEditTime: 2023-11-15 15:31:21
 * @FilePath: \myProject\test_vue_cli2\src\view\mytest\testPage\testPageOne.vue
 * @Description: 
-->
<template>
  <div id="testPageOne">
    <span>123213</span>
    <!-- <a-select
      mode="multiple"
      :default-value="['a1', 'b2']"
      style="width: 100px"
      placeholder="Please select"
      @change="handleChange"
      :maxTagTextLength="2"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select> -->
    测试element 复选框
    <el-checkbox-group v-model="checkList" @change="test">
      <el-checkbox v-for="i in 10" :label="String(i)" :key="i"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "testPageOne",
  data() {
    return {
      checkList: [],
      type: "1"
    };
  },
  watch: {
    type(val, newVal) {
      console.log(val, newVal);
      this.test2();
    }
  },
  methods: {
    test(val) {
      console.log(val);
      this.type = this.type == "3" ? "1" : "3";
    },
    test2() {
      this.checkList = this.checkList.map((item) => {
        return String(item);
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

<style></style>
