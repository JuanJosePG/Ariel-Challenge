import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfileView from '../views/MyProfile.vue';
import TasksView from '../views/MyTask.vue';
import RefundView from '../views/MyRefund.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: () => {
            return {
                path: '/tasks',
                name: 'task',
                component: TasksView,
            };
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    },
    {
        path: '/tasks',
        name: 'task',
        component: TasksView,
    },
    {
        path: '/refunds',
        name: 'refunds',
        component: RefundView,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
