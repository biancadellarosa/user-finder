import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/components/Home.vue";
import UserFinderStart from "@/modules/components/UserFinderStart.vue";
import PersonalData from "@/modules/components/StepsForm/PersonalData.vue";
import TermsAndServices from "@/modules/components/StepsForm/TermsAndServices.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/find-user",
    component: UserFinderStart,
    children: [
      { path: "personal-information", component: PersonalData },
      { path: "terms-and-services", component: TermsAndServices },
    ],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
