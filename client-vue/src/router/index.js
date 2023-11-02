import { createRouter, createWebHistory } from "vue-router";
import Product from "../views/product/index.vue";
import Cart from "../views/cart/index.vue";
import ProductDetail from '../views/product/Detail.vue'
import NotFound from '../views/error/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product",
      component: Product,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: ProductDetail,
    },
    {
      path: "/*",
      component: NotFound,
    }
  ],
});

export default router;
