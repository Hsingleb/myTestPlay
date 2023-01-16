import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import vueRouter from 'vue-router';
import router from './router'
Vue.use(vueRouter)

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)


Vue.use(ElementUI);
// 关闭生产模式
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
