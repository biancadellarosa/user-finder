import { createApp } from "vue";

import router from "./router/main";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css ";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
