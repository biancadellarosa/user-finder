import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { setActivePinia, createPinia } from "pinia";

import { routes } from "@/router/main.js";

import PersonalData from "@/modules/components/StepsForm/PersonalData.vue";

describe("Component testing for Home ", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(PersonalData, {
      global: {
        plugins: [router, setActivePinia(createPinia())],
      },
    });
  });

  test("check if has all inputs", () => {
    expect(wrapper.findAll("input")).toHaveLength(3);
  });
});
