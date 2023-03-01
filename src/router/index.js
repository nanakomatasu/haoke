import Vue from "vue";
import VueRouter from "vue-router";
const MyFound = () => import("../page/找房.vue");
const MyCenter = () => import("../page/我的.vue");
const MyNews = () => import("../page/资讯.vue");
const MyMain = () => import("../page/首页.vue");
const MyHome = () => import("../components/home.vue");
const UserLogin = () => import("../components/UserLogin.vue");
const MyCity = () => import("../components/mycity.vue");
const MyFa = () => import("../components/MyFavorite.vue");
const MyRent = () => import("../components/myrent.vue");
const detailsFav = () => import("../components/DetailsFav.vue");
const DetailsRent = () => import("../components/DetailsRent.vue");
const MyMap = () => import("../components/mymap.vue");
const HotCity = () => import("../components/hotcity.vue");
const RentForm = () => import("../components/renform.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/main",
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
  {
    path: "/fav",
    component: MyFa,
  },
  {
    path: "/rent",
    component: MyRent,
  },
  {
    path: "/favdetails",
    component: detailsFav,
  },
  {
    path: "/rentdetails",
    component: DetailsRent,
  },
  {
    path: "/map",
    component: MyMap,
  },
  {
    path: "/hotcity",
    component: HotCity,
  },
  {
    path: "/rentform",
    component: RentForm,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
