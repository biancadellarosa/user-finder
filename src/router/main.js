import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/components/Home.vue";
import UserFinderStart from "@/modules/components/UserFinderStart.vue";
import PersonalData from "@/modules/components/StepsForm/PersonalData.vue";
import TermsAndServices from "@/modules/components/StepsForm/TermsAndServices.vue";
import UserProfile from "@/modules/components/StepsForm/UserProfile.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/find-user",
    component: UserFinderStart,
    children: [
      { path: "personal-information", component: PersonalData },
      { path: "terms-and-services", component: TermsAndServices },
      {
        path: "user-profile/:username",
        component: UserProfile,
      },
    ],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  // verify if the user roload the page inside of terms-and-services or 'user-profile/:username'
  if (
    from.fullPath === "/" &&
    (to.fullPath === "/find-user/terms-and-services" ||
      to.fullPath === `/find-user/user-profile/${to.params.username}`)
  ) {
    // redirect the user to the home
    return { path: "/" };
  }
});

export default router;
