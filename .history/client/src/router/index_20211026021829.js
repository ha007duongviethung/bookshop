import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewBook from "../views/NewBook.vue";
import Type from "../views/Type.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-book",
    name: "NewBook",
    component: NewBook,
  },
  {
    path: "/type/:id",
    name: "Type",
    component: Type,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
