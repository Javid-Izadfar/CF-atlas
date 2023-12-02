import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: import('@/pages/index.vue')
        },
        {
            path: '/country/:id',
            component: import('@/pages/country.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: import('@/pages/404.vue')
        }
    ]
})