import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Surya's Page",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import( /* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () =>
      import( /* webpackChunkName: "certificates" */ "../views/Certificates.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});