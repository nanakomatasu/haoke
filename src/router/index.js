import Vue from "vue";
import VueRouter from "vue-router";
import MyRent from "../components/myrent.vue";
import detailsFav from "../components/DetailsFav.vue";
import DetailsRent from "../components/DetailsRent.vue";
import MyMap from "../components/mymap.vue";
const MyFound = () => import("../page/找房.vue");
const MyCenter = () => import("../page/我的.vue");
const MyNews = () => import("../page/资讯.vue");
const MyMain = () => import("../page/首页.vue");
const MyHome = () => import("../components/home.vue");
const UserLogin = () => import("../components/UserLogin.vue");
const MyCity = () => import("../components/mycity.vue");
const MyFa = () => import("../components/MyFavorite.vue");

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
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
