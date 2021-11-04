import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewBook from "../views/NewBook.vue";
import Type from "../views/Type.vue";
import TypeDescription from "../views/TypeDescription.vue";
import BookDetails from "../views/BookDetails.vue";

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
    path: "/type",
    name: "Type",
    component: Type,
  },
  {
    path: "/type/:slug",
    name: "TypeDescription",
    component: TypeDescription,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
