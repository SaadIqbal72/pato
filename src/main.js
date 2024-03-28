// import "./assets/main.css";
import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import routes from "./routes/routers";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faTrashAlt,
  faPenToSquare,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faTrashAlt, faPenToSquare, faEllipsisH);

// Create Vue Router Object
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App)
  //   .use(bootstrap({ components: true, directives: true }))
  //   .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
