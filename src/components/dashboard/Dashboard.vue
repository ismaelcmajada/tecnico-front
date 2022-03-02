<template>
  <div class="wrapper">

    <Nav/>

    <Aside/>

    <div class="content-wrapper">

      <div class="content">
        <div class="container-fluid">
          <router-view/>
        </div>
      </div>
    </div>

    <footer class="main-footer">
      <strong>Ismael Cedrés Gil</strong> 2022
    </footer>
  </div>
</template>

<script>
  import Nav from './layout/Nav.vue'
  import Aside from './layout/Aside.vue'

  export default {
    name: 'Dashboard',
    components: {
        Aside,
        Nav
    },
    beforeCreate() {
      document.body.className = "";
    }
  }
</script>