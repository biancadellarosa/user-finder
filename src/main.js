import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router/main";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css ";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(pinia);

router.isReady().then(() => {
  app.mount("#app");
});
