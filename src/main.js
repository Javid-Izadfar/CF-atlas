import 'reset-css'
import '@/assets/main.css'

import { createApp } from 'vue'

import Router from './routes.js'
import App from './App.vue'

createApp(App).use(Router).mount('#app')
