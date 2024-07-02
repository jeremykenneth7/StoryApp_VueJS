import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AddStory from '../components/AddStory.vue';
import EditStory from '../components/EditStory.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/create',
        name: 'AddStory',
        component: AddStory
    },
    {
        path: '/edit/:id',
        name: 'EditStory',
        component: EditStory
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
