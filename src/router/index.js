import { createRouter, createWebHistory } from "vue-router";
import MarvelMain from "../components/MarvelMain.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: MarvelMain,
    },
    {
        path: "/comicsAll",
        name: "Comics",
        component: () => import("../components/MarvelComicsAll.vue"),
    },
    {
        path: "/characters",
        name: "MarvelCharacters",
        component: () => import("../views/MarvelCharacters.vue"),
    },
    // {
    //     path: "/video",
    //     name: "MarvelVideo",
    //     component: () => import("../views/MarvelCharacters.vue"),
    // },
    {
        path: "/comicsAll",
        name: "MarvelComicsAll",
        component: () => import("../components/MarvelComicsAll.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
