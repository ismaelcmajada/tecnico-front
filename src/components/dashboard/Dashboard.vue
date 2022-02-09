<template>
  <div class="wrapper">

    <Nav/>

    <Aside/>

    <div class="content-wrapper">

      <Header/>

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
  import Header from './layout/Header.vue'

  export default {
    name: 'Dashboard',
    components: {
        Aside,
        Nav,
        Header
    },
    beforeCreate() {
      document.body.className = "";
    }
  }
</script>