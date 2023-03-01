import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import "../permission";
import store from "./store";
import BaiduMap from "vue-baidu-map"; // 导入地图

// 进行全局注册，一次性引入百度地图组件库的所有组件
// ak为官方提供的密钥
Vue.use(BaiduMap, {git 
  ak: "MznXZvfNxuMelxcRzTlAsq3wqF0SzMep",
});

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
