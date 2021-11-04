import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewBook from "../views/NewBook.vue";
import Type from "../views/Type.vue";
import TypeDescription from "../views/TypeDescription.vue";
import BookDetail from "../views/BookDetail.vue";
import ShopingCard from "../views/ShopingCard.vue";

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
  },
  {
    path: "/book/detail",
    name: "BookDetail",
    component: BookDetail,
  },
  {
    path: "/shoping-cart",
    name: "ShopingCard",
    component: ShopingCard,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
