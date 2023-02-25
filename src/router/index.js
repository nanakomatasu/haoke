import Vue from "vue";
import VueRouter from "vue-router";
import MyFound from "../page/找房.vue";
import MyCenter from "../page/我的.vue";
import MyNews from "../page/资讯.vue";
import MyMain from "../page/首页.vue";
import MyHome from "../components/home.vue";
import UserLogin from "../components/UserLogin.vue";
import MyCity from "../components/mycity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    component: MyHome,
    children: [
      { path: "found", component: MyFound },
      { path: "center", component: MyCenter },
      { path: "news", component: MyNews },
      { path: "main", component: MyMain },
    ],
  },
  {
    path: "/login",
    component: UserLogin,
  },
  {
    path: "/city",
    component: MyCity,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
