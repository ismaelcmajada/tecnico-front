<template>
    <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-body">
        <p class="login-box-msg">Inicia sesión</p>
  
        <form name="form" novalidate>
          <div class="input-group mb-3">
            <input type="username" class="form-control" name="identificacion" required placeholder="Identificación" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" name="password" required placeholder="Contraseña" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember">
                <label for="remember">
                  Recuerdame
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <a class="btn btn-primary btn-block" href="/dashboard">Entrar</a>
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
export default {
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