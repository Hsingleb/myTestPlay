<!-- <template>
  <div class="my-test">
    <test-form></test-form>
  </div>
</template>

<script>
import Vue from "vue/types/umd";
import testForm from "./testForm.vue";
export default {
  name: "myTest",
  components: { testForm },
  methods: {
    test() {
      // ···········敏感词在线测试回显·············································································································
      setTimeout(() => {
        var widgetCmp = app.getElementByKey("widget-qSAlWOoy");
        var row = widgetCmp.curData;
        Object.keys(formData).forEach((itemKey) => {
          Vue.set(row, itemKey, formData[itemKey]);
        });
        console.log("在弹窗vue实例上挂载");
      });
      // ··················敏感词在线测试弹窗请求···············································································
      // this指向当前windows
      var testFromData = this.app.$store.getters.getFormData("widget-qSAlWOoy");
      var widgetCmp = app.getElementByKey("widget-qSAlWOoy");
      console.log("看看我获取了个什么玩意", testFromData, this, arguments);
      let data = {
        checkObjVal: testFromData.TEST_VALUE || "",
        senId: testFromData.KEYCODE || "",
        senKey: testFromData.KEYWORD || ""
      };
      console.log(data);
      var _url =
        "http://172.16.21.105:8000/ds/SensitiveDictionary/sensitiveOnlineScan";
      var result = ai.remoteData(_url, data, "POST");
      let res;
      if (result) {
        res = JSON.parse(result);
      }

      // testFromData.TEST_RESULT =
      //   "检测到" + res.sensitiveOnlineScanJSONVO.sensSize + "个敏感词";
      if (res) {
        Vue.set(
          widgetCmp,
          "TEST_RESULT",
          "检测到" + res.sensitiveOnlineScanJSONVO.sensSize + "个敏感词"
        );
      } else {
        Vue.set(widgetCmp.curData, "TEST_RESULT", "网络请求出现问题");
      }

      // var data = result.data;
      ////////////////////////////············规则库新增······················////////////////////////////////////////////////////////````````````````````````````````````````
      // 新增任务
      console.log("---------新增规则", this, this.$store);
      var formData = this.$store.getters.getFormData("widget-JcnobByr");
      var _UserInfo = ai.initUserInfo();
      var CREATOR = _UserInfo.userid || formData.CREATOR;
      const initStore = arguments[0]; //用作数据刷新
      var store = new JsonStore({
        apiCode: "ds_sst_function",
        params: { appCode: this.element.appcode || "ds-find" },
        pageSize: 1
      });
      console.log("---------", formData, this.$store);
      var r = store.getNewRecord();
      r.set("SF_NAME", formData.SF_NAME);
      r.set("SF_TYPE", formData.SF_TYPE);
      r.set("SF_FUNC", formData.SF_FUNC || "");
      if (formData.SF_TYPE == "sql") {
        formData.IN_PARAM = JSON.stringify({ dbName: formData.DB_name });
      }
      r.set("IN_PARAM", formData.IN_PARAM || "");
      r.set("OUT_PARAM", formData.OUT_PARAM);
      r.set("REMARK", formData.REMARK);
      r.set("USE_STATE", "1");
      r.set("IS_TEST", "0");
      r.set("CREATOR", CREATOR);
      console.log(r);
      store.add(r);
      store.commit();
      alert("新增成功");
      initStore.init();
      console.log("---------任务新增commit", store);
      //                                            规则库编辑回显
      setTimeout(() => {
        var widgetCmp = app.getElementByKey("widget-JcnobByr");
        var row = widgetCmp.curData;
        Object.keys(formData).forEach((itemKey) => {
          Vue.set(row, itemKey, formData[itemKey]);
        });
      });
      //                                            规则库编辑回调
      const initStore = arguments[0];
      var formData = this.$store.getters.getFormData("widget-JcnobByr");
      var _UserInfo = ai.initUserInfo();
      var updater = _UserInfo.userid || formData.CREATOR;
      var effDt = new Date().format("yyyy-mm-dd hh:mm:ss");
      // 先删除

      // ······························································································
      // 修改分类模板
      const initStore = arguments[0];
      var formData = this.$store.getters.getFormData("widget-H5zqxVAg");
      var _UserInfo = ai.initUserInfo();
      var updater = _UserInfo.userid || formData.CREATOR;
      var effDt = new Date().format("yyyy-mm-dd hh:mm:ss");
      // var url = dpServer+`/ds/categoryModel/add`;
      // var params = {SLM_TAG:formData.SLM_TAG,SLM_NAME:formData.SLM_NAME,ST_ID:formData.ST_ID,REMARK:formData.REMARK,SEQNO:formData.SEQNO,USE_STATE:formData.USE_STATE,CREATOR:CREATOR}
      // var result = ai.remoteData(url,params,'post');
      // alert(result.message)

      var store = new JsonStore({
        apiCode: "dsSstCategoryModel",
        params: {
          appCode: this.element.appcode || "ds-find",
          SCM_ID: formData.SCM_ID
        },
        pageSize: -1
      });
      var newR = store.getAt(0);
      newR.set("SCM_NAME", formData.SCM_NAME);
      newR.set("SCM_PID", formData.SCM_PID);
      newR.set("ST_ID", formData.ST_ID);
      newR.set("REMARK", formData.REMARK);
      newR.set("USE_STATE", formData.USE_STATE);
      newR.set("UPDATER", updater);
      newR.set("EFF_DT", effDt);
      newR.set("SEQNO", formData.SEQNO);
      newR.set("SCM_ID", formData.SCM_ID);
      const ruleIds = formData.RULES_ID;
      const result = store.commit();
      if (result.success) {
        // 先清空原有的规则
        var levelStore = new JsonStore({
          apiCode: "dsSstCategoryRule",
          params: {
            appCode: this.element.appcode || "ds-find",
            SCM_ID: formData.SCM_ID
          },
          pageSize: -1
        });

        var len = levelStore.root.length;
        for (var i = 0; i < len; i++) {
          var r = levelStore.getAt(0);
          levelStore.remove(r);
        }
        levelStore.commit();
        // 再重新插入规则
        var ruleStore = new JsonStore({
          apiCode: "dsSstCategoryRule",
          params: { appCode: this.element.appcode || "ds-find" },
          pageSize: -1
        });
        ruleIds.forEach((o) => {
          var newRule = ruleStore.getNewRecord();
          newRule.set("SCM_ID", formData.SCM_ID);
          newRule.set("SF_ID", o);
          newRule.set("USE_STATE", "1");
          newRule.set("UPDATER", updater);
          ruleStore.add(newRule);
        });
        ruleStore.commit();
        alert("编辑成功");
        initStore.init();
      }
    }
  }
};
</script>

<style></style> -->

<template>
  <div id="myTest">
    <div v-if="titleView">
      <!-- <a @click="testTitleView" v-if="titleView">动态表格表单校验</a> -->
      <!-- <router-link to="/myTest/testPageOne">动态表格表单校验</router-link> -->
      <router-link to="/myTest/testPageOne" @click="testTitleView"
        >动态表格表单校验</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "myTest",
  data() {
    return { titleView: true };
  },
  methods: {
    testTitleView() {
      // this.$router.push("/myTest/testPageOne");
      // this.$router.go("/myTest/testPageOne");
      this.titleView = false;
    }
  }
};
</script>

<style></style>
