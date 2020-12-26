import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Projects from "../views/Projects.vue";
import ContactMe from "../views/ContactMe.vue";
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "/profile"
      },
      {
        path: "/profile",
        component: Profile
      },
      {
        path: "/projects",
        component: Projects
      },
      {
        path: "/contact-me",
        component: ContactMe
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
