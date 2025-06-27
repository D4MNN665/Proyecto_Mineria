<!-- src/views/PaginaInicial.vue -->
<!-- portal -->
<template>
  <div>
    <form @submit.prevent="iniciarSesion">

      <label>Usuario: </label><br>
      <input type="text" v-model="username" name="" id=""><br>

      <label for="">Contraseña: </label><br>
      <input type="text" v-model="passw"><br><br>

      <input type="submit" value="Inicio sesion">

    </form>
  </div>
</template>


<script lang="ts">
/**
 * Por le momento pensare en que base de datos ocupar ya que no se la verdad...
 */
export default {
  data() {
    return {
      username: '',
      passw: ''
    };
  },
  methods: {
    iniciarSesion() {
      const adminU = "seba";
      const adminP = "123";


      if (this.username.length === 0 && this.passw.length === 0) {
        alert("Campos vacio")
      }

      if (this.username == adminU && this.passw == adminP) {
        this.$router.push('/dashboard');
      } else {
        alert("Credenciales Incorrectas");
      }
    }
  }
}
</script>
