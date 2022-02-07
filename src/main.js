import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "../node_modules/admin-lte/plugins/jquery/jquery.min.js"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/admin-lte/dist/js/adminlte.min.js"
import "../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css"
import '../node_modules/admin-lte/dist/css/adminlte.min.css'

createApp(App).use(router).mount('#app')
