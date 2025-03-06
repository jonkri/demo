import { createApp } from "vue";

import App from "./App.vue";

import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "../assets/main.scss";

createApp(App).use(createBootstrap()).mount("#app");
