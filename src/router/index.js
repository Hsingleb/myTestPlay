import VueRouter from "vue-router";

// 首页
import HomePage from "../view/system/homePage.vue";
import MyTest from "../view/mytest/mytest.vue";

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
      component: MyTest
    }
  ]
});
