import { createWebHistory, createRouter } from 'vue-router'
import Login from './../components/Login.vue'
import Dashboard from './../components/dashboard/Dashboard.vue'
import Equipos from './../components/dashboard/Equipos.vue'
import Reparaciones from './../components/dashboard/Reparaciones.vue'
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
                component: Reparaciones
            },
            {
                path: 'equipos',
                component: Equipos
            },
            {
                path: 'reparaciones',
                component: Reparaciones
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
