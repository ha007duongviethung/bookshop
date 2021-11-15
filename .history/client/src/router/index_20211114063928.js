import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewBook from "../views/NewBook.vue";
import Type from "../views/Type.vue";
import TypeDescription from "../views/TypeDescription.vue";
import AuthorDescription from "../views/AuthorDescription.vue";
import BookDetail from "../views/BookDetail.vue";
import ShopingCart from "../views/ShopingCart.vue";
import CRUD from "../views/CRUD.vue";
import Login from "../views/LoginForm.vue";
import Register from "../views/RegisterForm.vue";
import ResultSearch from "../views/ResultSearch.vue";
import PageError from "../views/PageError.vue";

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
    path: "/type-:slug",
    name: "TypeDescription",
    component: TypeDescription,
  },
  {
    path: "/author-:slug",
    name: "AuthorDescription",
    component: AuthorDescription,
  },
  {
    path: "/book-detail_:id",
    name: "BookDetail",
    component: BookDetail,
  },
  {
    path: "/shoping-cart",
    name: "ShopingCart",
    component: ShopingCart,
  },
  {
    path: "/crud",
    name: "CRUD",
    component: CRUD,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/result-search/:foo",
    name: "ResultSearch",
    component: ResultSearch,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageError",
    component: PageError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
