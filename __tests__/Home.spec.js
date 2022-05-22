import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router/main.js";
import Home from "@/modules/components/Home.vue";

describe("Component testing for Home ", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  let wrapper;
  router.push("/");
  await router.isReady();
  beforeEach(() => {
    wrapper = mount(Home, {
      global: {
        stubs: { button: false },
        plugins: [router],
      },
    });
  });

  test("testing if has all UI elements", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("p").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  test("testing button functionatly", async () => {
    const button = wrapper.find("button");
    expect(router.currentRoute.value.fullPath).toContain("/");
    await button.trigger("click");
    await flushPromises();
    expect(router.currentRoute.value.fullPath).toContain(
      "/find-user/personal-information"
    );
  });
});
