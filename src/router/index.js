import VueRouter from 'vue-router'

import HomePage from '../view/index.vue'
import MyTest from '../view/mytest/mytest.vue'

export default new VueRouter({
    routes:[
        {
            path:"/homePage",
            component: HomePage
        },
        {
            path:"/myTest",
            component: MyTest
        }
    ]
})