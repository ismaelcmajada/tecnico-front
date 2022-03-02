<template>
      <div class="row">
        <div class="col-12">
            <div class="card mt-3">
                <div class="card-header">
                    <div class="row">
                        <h2>Técnicos</h2>
                    </div>
                </div>
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <form @submit="registrar" class="form row">
                    <div class="form-group col-md col-12">
                      <input type="text" placeholder="Nombre" class="form-control" name="nombre" id="nombre">
                    </div>
                    <div class="form-group col-md col-12">
                      <input type="text" placeholder="Email" class="form-control" name="email" id="email">
                    </div>
                    <div class="form-group col-md col-12">
                      <input type="password" placeholder="Contraseña" class="form-control" name="password" id="password">
                    </div>
                    <div class="form-group col-md-1 col-12">
                      <input type="submit" value="+" class="btn btn-success">
                    </div>
                  </form>
                </div>
              </div>
            <table id="tecnicos" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="usuario in usuarios" :key="usuario._id">
                  <td>{{ usuario.name }}</td>
                  <td>{{ usuario.email }}</td>
                  <td v-if="usuario.admin">Administrador</td>
                  <td v-else>Técnico</td>
                  <td v-if="!usuario.admin">
                    <button type="button" @click="removeUsuario(usuario._id)" class="btn btn-danger">
                      <i class="fas fa-times"></i>
                    </button>
                  </td>
                  <td v-else></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
const $ = require("jquery");

export default {
    data() {
      return {
        usuarios: []
      };
    },

    methods: {
      inicializateDataTable() {
        $(function () {
          $("#tecnicos").DataTable({
            paging: true,
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
          });
        })
      },

      async reInicializateDataTable() {
         $("#tecnicos").DataTable().destroy();
         await this.getUsuarios();
         this.inicializateDataTable();
         
      },

      async getUsuarios() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/usuarios`)

          this.usuarios = response.data.usuarios

        } catch (error) {
          console.log(error)
        }
      },

      async removeUsuario(id) {
        try {
          await axios.delete(`${process.env.VUE_APP_API_URL}/api/usuarios/${id}`)

          this.reInicializateDataTable();
        } catch (error) {
          console.log(error)
        }
      },

      async registrar(e) {
        try {
          await axios.post(`${process.env.VUE_APP_API_URL}/api/user/register`, {
            name: e.target.nombre.value,
            email: e.target.email.value,
            password: e.target.password.value,
          })
        } catch (error) {
          console.log(error)
        }
      },
    },
    async created() {
      await this.getUsuarios();
      this.inicializateDataTable();
    }
}
</script>