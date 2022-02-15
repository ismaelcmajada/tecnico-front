import { createWebHistory, createRouter } from 'vue-router'
import Login from './../components/Login.vue'
import Dashboard from './../components/dashboard/Dashboard.vue'
import Home from './../components/dashboard/Home.vue'
import Ventas from './../components/dashboard/Ventas.vue'
import store from '../store'

const routes = [
    { 
        path: '/', 
        component: Login,
        beforeEnter(to, from, next){
            if(store.state.logged) {
                next({
                    path: '/dashboard',
                    replace: true
                })
            } else {
                next()
            }
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter(to, from, next){
            if(!store.state.logged) {
                next({
                    path: '/',
                    replace: true
                })
            } else {
                next()
            }
        },
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
