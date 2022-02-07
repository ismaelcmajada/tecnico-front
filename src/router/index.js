import { createWebHistory, createRouter } from 'vue-router'
import Login from './../components/Login.vue'
import Dashboard from './../components/dashboard/Dashboard.vue'
import Home from './../components/dashboard/Home.vue'
import Ventas from './../components/dashboard/Ventas.vue'

const routes = [
    { 
        path: '/', 
        component: Login 
    },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'ventas',
                component: Ventas
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
