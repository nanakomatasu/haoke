import Vue from 'vue'
import VueRouter from 'vue-router'
import MyFound from '../page/找房.vue'
import MyCenter from "../page/我的.vue"
import MyNews from "../page/资讯.vue"
import MyMain from '../page/首页.vue'
import MyHome from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',
  redirect: '/home',
  component:MyHome
},
  {
    path: '/home',
    component: MyHome,
    children: [
      {path:'/found',component:MyFound},
      {path:'/center',component:MyCenter},
      {path:'/news',component:MyNews},
      {path:'/main',component:MyMain},
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
