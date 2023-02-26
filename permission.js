import router from "@/router";
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const whitelist = ["/login"];
  if (token) {
    console.log(from);
    next();
  } else {
    if (whitelist.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
