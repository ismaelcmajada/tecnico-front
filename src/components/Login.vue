<template>
    <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-body">
        <p class="login-box-msg">Inicia sesión</p>
  
        <form name="form" novalidate @submit.prevent="login">
          <div class="input-group mb-3">
            <input type="username" class="form-control" name="email" required placeholder="Email"  v-model="email"/>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" name="password" required placeholder="Contraseña"  v-model="password"/>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
            </div>
            <!-- /.col -->
            <div class="col-4">
              <input type="submit" class="btn btn-primary btn-block" value="Entrar">
            </div>
            <!-- /.col -->
          </div>
        </form>
  
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.login-box -->
</template>

<script>
import {mapMutations} from 'vuex'
import axios from "axios"

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(['logIn']),
    async login() {
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/api/user/login`, 
          {
            email: this.email,
            password: this.password,
          } 
        )

        this.logIn(response.data)

        window.location.href = '/dashboard'

      } catch (error) {
        this.$router.push("/");
      } 
    }
  },

  beforeCreate() {
    document.body.className = "login-page";
  }
}

</script>

<style scoped>
body {
    height: 100%;
}
</style>