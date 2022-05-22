import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { setActivePinia, createPinia } from "pinia";

import { routes } from "@/router/main.js";

import UserFinderStart from "@/modules/components/UserFinderStart.vue";
import PersonalData from "@/modules/components/StepsForm/PersonalData.vue";
import TermesAndServices from "@//modules/components/StepsForm/TermsAndServices.vue";
import UserProfile from "@/modules/components/StepsForm/UserProfile.vue";
import NotFound from "@/views/NotFound.vue";

describe("Component testing for UserFinderStart ", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  let wrapper;

  router.push("/find-user/personal-information");
  await router.isReady();

  beforeEach(() => {
    wrapper = mount(UserFinderStart, {
      global: {
        plugins: [router, setActivePinia(createPinia())],
      },
    });
  });

  test("Routing into components", async () => {
    expect(wrapper.findComponent(PersonalData).exists()).toBe(true);

    router.push("/find-user/terms-and-services");
    await flushPromises();
    expect(wrapper.findComponent(TermesAndServices).exists()).toBe(true);

    router.push(`/find-user/user-profile/user`);
    await flushPromises();
    expect(wrapper.findComponent(UserProfile).exists()).toBe(true);
  });

  test("notFound page", async () => {
    router.push("/find-user/any-page-does-not-exist");
    await flushPromises();
    expect(wrapper.findComponent(NotFound).exists()).toBe(true);
  });
});
