<template>
    <div class="row">
    <div class="col-12">
      <div class="card mt-3">
        <div class="card-header">
          <div class="row">
            <h2>Equipos</h2>
            <button class="btn btn-success ml-3" data-toggle="modal" data-target="#añadirEquipo">+</button>
          </div>
        </div>
        <div class="modal" id="añadirEquipo" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Añadir equipo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit="createEquipo">
                  <h5>Datos del equipo</h5>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="nombre">Nombre: </label>
                      <input class="form-control" type="text" name="nombre" id="nombre">
                    </div>

                    <div class="form-group col">
                      <label for="procesador">CPU: </label>
                      <input class="form-control" type="text" name="procesador" id="procesador">
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col">
                      <label for="ram">RAM: </label>
                      <input class="form-control" type="text" name="ram" id="ram">
                    </div>

                    <div class="form-group col">
                      <label for="almacenamiento">Almacenamiento: </label>
                      <input class="form-control" type="text" name="almacenamiento" id="almacenamiento">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <input type="submit" class="btn btn-primary" value="Añadir" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
            <table id="equipos" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>CPU</th>
                  <th>RAM</th>
                  <th>Almacenamiento</th>
                  <th>Fecha de compra</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="equipo in equipos" :key="equipo._id">
                  <td>{{ equipo.nombre }}</td>
                  <td>{{ equipo.procesador }}</td>
                  <td>{{ equipo.ram }}</td>
                  <td>{{ equipo.almacenamiento }}</td>
                  <td>{{ equipo.fechaCompra }}</td>
                  <td>
                      <button type="button" data-toggle="modal" :data-target="'#editarEquipo'+equipo._id"
                        class="btn btn-primary mr-2">
                        <i class="fas fa-wrench"></i>
                      </button>
                      <button type="button" @click="removeEquipo(equipo._id)" class="btn btn-danger">
                        <i class="fas fa-times"></i>
                      </button>
                  </td>
                  <div class="modal" :id="'editarEquipo'+equipo._id" tabindex="-1">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Editar equipo</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form @submit="updateEquipo($event, equipo._id)">
                            <h5>Datos del equipo</h5>
                            <div class="form-row">
                              <div class="form-group col">
                                <label :for="'nombre'+equipo._id">Nombre: </label>
                                <input class="form-control" type="text" :value="equipo.nombre" :name="'nombre'+equipo._id" :id="'nombre'+equipo._id">
                              </div>

                              <div class="form-group col">
                                <label :for="'procesador'+equipo._id">CPU: </label>
                                <input class="form-control" type="text" :value="equipo.procesador" :name="'procesador'+equipo._id" :id="'procesador'+equipo._id">
                              </div>
                            </div>

                            <div class="form-row">
                              <div class="form-group col">
                                <label :for="'ram'+equipo._id">RAM: </label>
                                <input class="form-control" type="text" :value="equipo.ram" :name="'ram'+equipo._id" :id="'ram'+equipo._id">
                              </div>

                              <div class="form-group col">
                                <label :for="'almacenamiento'+equipo._id">Almacenamiento: </label>
                                <input class="form-control" type="text" :value="equipo.almacenamiento" :name="'almacenamiento'+equipo._id" :id="'almacenamiento'+equipo._id">
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col">
                                <input type="submit" class="btn btn-primary" value="Guardar" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
        equipos: []
      };
    },

    methods: {
      inicializateDataTable() {
        $(function () {
          $("#equipos").DataTable({
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
         $("#equipos").DataTable().destroy();
         await this.getEquipos();
         this.inicializateDataTable();
         
      },

      async getEquipos() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/equipos`)

          this.equipos = response.data.equipos

        } catch (error) {
          console.log(error)
        }
      },

      async createEquipo(e) {
        try {
          await axios.post(`${process.env.VUE_APP_API_URL}/api/equipos`, {
            nombre: e.target.nombre.value,
            procesador: e.target.procesador.value,
            ram: e.target.ram.value,
            almacenamiento: e.target.almacenamiento.value
          })
        } catch (error) {
          console.log(error)
        }
      },

      async updateEquipo(e, id) {
        try {
          await axios.put(`${process.env.VUE_APP_API_URL}/api/equipos/${id}`, {
            nombre: e.target['nombre'+id].value,
            procesador: e.target['procesador'+id].value,
            ram: e.target['ram'+id].value,
            almacenamiento: e.target['almacenamiento'+id].value
          })
        } catch (error) {
          console.log(error)
        }
      },

      async removeEquipo(id) {
        try {
          await axios.delete(`${process.env.VUE_APP_API_URL}/api/equipos/${id}`)

          this.reInicializateDataTable();
        } catch (error) {
          console.log(error)
        }
      },
    },

    async created() {
      await this.getEquipos();
      this.inicializateDataTable();
    }
}

</script>