import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { worker } from "./mocks/browser.js";
worker.start();
createApp(App).mount("#app");
