import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/components/Home.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
