import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalogo from "../views/Catalogo.vue";
import Personaliza from "../views/Personaliza.vue";
import Contacto from "../views/Contacto.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/catalogo", component: Catalogo, name: "catalogo" },
  { path: "/personaliza", component: Personaliza, name: "personaliza" },
  { path: "/contacto", component: Contacto, name: "contacto" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});