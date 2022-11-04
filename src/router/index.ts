import { createRouter, createWebHistory } from "vue-router";
import { staticRoutes, errorRoutes, notFoundRoute } from "@/router/modules/staticRoutes";

const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRoutes, ...errorRoutes, notFoundRoute]
});

export default router;
