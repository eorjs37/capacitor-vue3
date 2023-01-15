import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: import("@/pages/index.vue") },
  { path: "/speech", component: import("@/pages/speech.vue") },
  { path: "/voice", component: import("@/pages/voice.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
