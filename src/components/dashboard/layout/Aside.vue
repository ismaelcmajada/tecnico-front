<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <a href="#" class="brand-link">
            <span class="brand-text font-weight-light ml-2">Soporte Técnico</span>
        </a>

        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="info">
                    <a href="#" class="d-block">{{ name }}</a>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">

                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/dashboard/reparaciones" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Reparaciones</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/dashboard/equipos" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Equipos</p>
                                </router-link>
                            </li> 
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a @click="logout()" class="nav-link bg-danger">
                            <i class="nav-icon fas fa-power-off"></i>
                            <p>
                                Cerrar sesión
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            name: this.$store.state.name
        }
    },
    methods: {
        ...mapMutations(['logOut']),
        logout() {
            this.logOut();
            window.location.href = '/'
        }
    }
}
</script>
