<template>
  <div class="row">
    <div class="col-12">
      <div class="card mt-3">
        <div class="card-header">
          <div class="row">
            <h2>Reparaciones</h2>
            <button class="btn btn-success ml-3" data-toggle="modal" data-target="#añadirReparacion">+</button>
          </div>
        </div>
        <div class="modal" id="añadirReparacion" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Añadir reparación</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit="createReparacion">
                  <h5>Datos de la reparación</h5>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="descripcion">Descripción: </label>
                      <textarea name="descripcion" id="descripcion" class="form-control"></textarea>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col">
                      <label for="tecnico">Técnico: </label>
                      <select class="form-control select2" name="tecnico" id="tecnico" style="width: 100%">
                        <option v-for="usuario in usuarios" :key="usuario._id" :value="usuario._id">{{ usuario.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col">
                      <label for="equipo">Equipo: </label>
                      <select class="form-control select2" id="equipo" style="width: 100%">
                        <option v-for="equipo in equipos" :key="equipo._id" :value="equipo._id">{{ equipo.nombre }}
                        </option>
                      </select>
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
          <div class="row">
            <div class="col">
              <h1>Incompletas</h1>
              <table id="reparacionesIncompletas" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Descripción</th>
                    <th>Técnico</th>
                    <th>Equipo</th>
                    <th>Estado</th>
                    <th>Fecha de creación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="reparacion in reparacionesIncompletas" :key="reparacion._id">
                    <td>{{ reparacion.descripcion }}</td>
                    <td>{{ reparacion.user_id.name }}</td>
                    <td>{{ reparacion.equipo_id.nombre }}</td>
                    <td>
                      Incompleta
                      <button @click="cambiarEstado(reparacion._id, reparacion.completada)"
                        class="btn btn-success ml-2"><i class="fas fa-check"></i></button>
                    </td>
                    <td>{{ reparacion.fechaCreacion }}</td>
                    <td>
                      <button type="button" data-toggle="modal" :data-target="'#editarReparacion'+reparacion._id"
                        class="btn btn-primary mr-2">
                        <i class="fas fa-wrench"></i>
                      </button>
                      <button type="button" @click="removeReparacion(reparacion._id)" class="btn btn-danger">
                        <i class="fas fa-times"></i>
                      </button>
                    </td>
                    <div class="modal" :id="'editarReparacion'+reparacion._id" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Editar reparación</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form @submit="updateReparacion($event, reparacion._id)">
                              <h5>Datos de la reparación</h5>
                              <div class="form-row">
                                <div class="form-group col">
                                  <label>Descripción: </label>
                                  <textarea :name="'descripcion'+reparacion._id" :id="'descripcion'+reparacion._id"
                                    class="form-control" v-model="reparacion.descripcion"></textarea>
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col">
                                  <label>Técnico: </label>
                                  <select class="form-control select2" :id="'userSelect2'+reparacion._id"
                                    style="width: 100%">
                                    <option v-for="usuario in usuarios" :key="usuario._id" :value="usuario._id"
                                      :selected="usuario._id==reparacion.user_id._id">{{ usuario.name }}</option>
                                  </select>
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col">
                                  <label>Equipo: </label>
                                  <select class="form-control select2" :id="'select2'+reparacion._id"
                                    style="width: 100%">
                                    <option v-for="equipo in equipos" :key="equipo._id" :value="equipo._id"
                                      :selected="equipo._id==reparacion.equipo_id._id">{{ equipo.nombre }}</option>
                                  </select>
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
          <div class="row mt-5">
            <div class="col">
              <h1>Completas</h1>
              <table id="reparacionesCompletas" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Descripción</th>
                    <th>Técnico</th>
                    <th>Equipo</th>
                    <th>Estado</th>
                    <th>Fecha de creación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="reparacion in reparacionesCompletas" :key="reparacion._id">
                    <td>{{ reparacion.descripcion }}</td>
                    <td>{{ reparacion.user_id.name }}</td>
                    <td v-if="reparacion.equipo_id">{{ reparacion.equipo_id.nombre }}</td>
                    <td>
                      Completada
                      <button @click="cambiarEstado(reparacion._id, reparacion.completada)"
                        class="btn btn-danger ml-2"><i class="fas fa-times"></i></button>
                    </td>
                    <td>{{ reparacion.fechaCreacion }}</td>
                    <td>
                      <button type="button" @click="removeReparacion(reparacion._id)" class="btn btn-danger">
                        <i class="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
        reparacionesCompletas: [],
        reparacionesIncompletas: [],
        equipos: [],
        usuarios: [],
      };
    },

    methods: {
      inicializateDataTable() {
        $(function () {
          $("#reparacionesIncompletas").DataTable({
            paging: true,
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
            retrieve: true
          });
          $("#reparacionesCompletas").DataTable({
            paging: true,
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
            retrieve: true
          });
        })
      },

      async reInicializateDataTable() {
         $("#reparacionesCompletas").DataTable().destroy();
         $("#reparacionesIncompletas").DataTable().destroy();
         await this.getData();
         this.inicializateDataTable();
         
      },

      inicializateSelect2() {
        let esto = this
        $(function () {
          esto.reparacionesIncompletas.forEach(reparacion => {
            $("#userSelect2" + reparacion._id).select2({
              dropdownParent: $('#editarReparacion' + reparacion._id),
              theme: 'bootstrap4'
            });
            $("#select2" + reparacion._id).select2({
              dropdownParent: $('#editarReparacion' + reparacion._id),
              theme: 'bootstrap4'
            });
          });
          $("#tecnico").select2({
            dropdownParent: $('#añadirReparacion'),
            theme: 'bootstrap4'
          });
          $("#equipo").select2({
            dropdownParent: $('#añadirReparacion'),
            theme: 'bootstrap4'
          });
        });
      },

      async cambiarEstado(id, estado) {
        try {
          await axios.put(`${process.env.VUE_APP_API_URL}/api/reparaciones/${id}`, {
            completada: !estado
          })
          
          
          this.reInicializateDataTable();
        } catch (error) {
          console.log(error)
        }
      },

      async getReparaciones() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/reparaciones`)

          this.reparacionesCompletas = response.data.reparaciones.filter(function (element) {
            return element.completada == true
          })

          this.reparacionesIncompletas = response.data.reparaciones.filter(function (element) {
            return element.completada == false
          })

        } catch (error) {
          console.log(error)
        }
      },

      async removeReparacion(id) {
        try {
          await axios.delete(`${process.env.VUE_APP_API_URL}/api/reparaciones/${id}`)

          this.reInicializateDataTable();
        } catch (error) {
          console.log(error)
        }
      },

      async createReparacion(e) {
        try {
          await axios.post(`${process.env.VUE_APP_API_URL}/api/reparaciones`, {
            descripcion: e.target.descripcion.value,
            user_id: e.target.tecnico.value,
            equipo_id: e.target.equipo.value
          })
        } catch (error) {
          console.log(error)
        }
      },

      async updateReparacion(e, id) {
        try {
          await axios.put(`${process.env.VUE_APP_API_URL}/api/reparaciones/${id}`, {
            descripcion: e.target["descripcion" + id].value,
            user_id: e.target["userSelect2" + id].value,
            equipo_id: e.target["select2" + id].value
          })
        } catch (error) {
          console.log(error)
        }
      },

      async getEquipos() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/equipos`)

          this.equipos = response.data.equipos

        } catch (error) {
          console.log(error)
        }
      },

      async getUsuarios() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/usuarios`)

          this.usuarios = response.data.usuarios

        } catch (error) {
          console.log(error)
        }
      },
      async getData() {
        await this.getReparaciones();
        await this.getEquipos();
        await this.getUsuarios();
      }
    },

    async created() {
      await this.getData();
      this.inicializateDataTable();
      this.inicializateSelect2();
    }
  }
</script>