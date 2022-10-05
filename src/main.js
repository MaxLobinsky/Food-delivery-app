import { createApp } from "vue";

import store from "@/components/vuex/store.js"

import routers from "./routes.js";

import App from "./App.vue";

import "./assets/scss/main.scss";

const app = createApp(App);

app.use(store);

app.use(routers);

app.mount("#app");
