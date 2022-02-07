<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <a href="#" class="brand-link">
            <span class="brand-text font-weight-light">Ventas</span>
        </a>

        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="info">
                    <a href="#" class="d-block">Ismael Cedrés</a>
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
                                <router-link to="/dashboard" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Inicio</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/dashboard/ventas" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Ventas</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="nav-icon fas fa-power-off"></i>
                            <p>
                                Cerrar sesión
                            </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>