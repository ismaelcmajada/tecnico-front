import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { jwtInterceptor } from './_helpers/jwt.interceptor';
import{ errorInterceptor } from './_helpers/error.interceptor' 

jwtInterceptor();
errorInterceptor();

import "../node_modules/admin-lte/plugins/jquery/jquery.min.js"
import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "../node_modules/admin-lte/dist/js/adminlte.min.js"
import "../node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js"
import "../node_modules/admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
import "../node_modules/admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js"
import "../node_modules/admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"
import "../node_modules/admin-lte/plugins/select2/js/select2.full.min.js"



import "../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css"
import '../node_modules/admin-lte/dist/css/adminlte.min.css'
import '../node_modules/admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
import '../node_modules/admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
import "../node_modules/admin-lte/plugins/select2/css/select2.min.css"
import "../node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css"


createApp(App).use(store).use(router).mount('#app')
