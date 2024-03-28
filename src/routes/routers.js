import Home from "../page/Home.vue";
import About from "@/page/About.vue";
// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Added our new route file named profile.vue
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/about",
    name: "About",
    // The route level code-splitting
    // this generates a separate chunk
    // (about.[hash].js) for this route
    // which is lazy-loaded when the
    // route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */
        "../page/About.vue"
      ),
  },
];
export default routes;
