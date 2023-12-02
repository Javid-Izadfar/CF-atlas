import 'reset-css'
import '@/assets/main.css'

import HomePage from '@/pages/index.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        }
    ]
})

import App from './App.vue'

createApp(App).use(Router).mount('#app')
