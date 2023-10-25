import { createRouter, createWebHistory } from "vue-router";
import HomeV from './pages/HomeV.vue';
import ListV from './pages/ListV.vue';
import ClassV from './pages/ClassV.vue';

const routes = [
    {path: '/', name: 'HomeV', component: HomeV},
    {path: '/list', name: 'ListV', component: ListV},
    {path: '/class', name: 'ClassV', component: ClassV }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export { router };