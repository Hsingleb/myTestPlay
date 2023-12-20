/*
 * @Author: huangbiao huangb@faithindata.com.cn
 * @Date: 2023-01-17 09:34:59
 * @LastEditors: huangbiao huangb@faithindata.com.cn
 * @LastEditTime: 2023-12-19 18:23:42
 * @FilePath: \test_vue_cli2\src\router\index.js
 * @Description:
 */
import VueRouter from "vue-router";

// 首页
import HomePage from "../view/system/homePage.vue";
import MyTest from "../view/mytest/myTest.vue";
// import testPage from "../view/mytest/testPage/testPageOne.vue";

// const testPage = (r) =>
//   require.ensure(
//     [],
//     () => r(require("../view/mytest/testPage/testPageOne.vue")),
//     "testPage"
//   );

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "HomePage"
    },
    {
      path: "/homePage",
      component: HomePage
    },
    {
      path: "/myTest",
      component: MyTest,
      children: [
        {
          path: "testPageOne",
          // parent: "myTest",
          component: () => import('../view/mytest/testPage/testPageOne.vue')
          // component: "../view/mytest/testPage/testPageOne.vue"
          // component: testPage
        }
      ]
    }
    // {
    //   path: "/myTest/testPageOne",
    //   component: () => {
    //     return "../view/mytest/testPage/testPageOne.vue";
    //   }
    // }
  ]
});
