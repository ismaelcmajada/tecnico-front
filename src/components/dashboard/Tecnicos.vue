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
            <table id="tecnicos" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Password</th>
                  <th>Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="usuario in usuarios" :key="usuario._id">
                  <td>{{ usuario.name }}</td>
                  <td>{{ usuario.procesador }}</td>
                  <td>{{ usuario.admin }}</td>
                </tr>
              </tbody>
            </table>
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
       async getUsuarios() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/usuarios`)

          this.usuarios = response.data.usuarios

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