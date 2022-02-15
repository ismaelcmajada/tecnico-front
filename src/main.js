import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


import "../node_modules/admin-lte/plugins/jquery/jquery.min.js"
import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "../node_modules/admin-lte/dist/js/adminlte.min.js"
import "../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css"
import '../node_modules/admin-lte/dist/css/adminlte.min.css'

createApp(App).use(store).use(router).mount('#app')
