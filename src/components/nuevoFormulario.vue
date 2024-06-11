<template>
  <div class="container-lg">
    <CAlert v-if="SuccesAlert" color="success">A simple success alert—check it out!</CAlert>
    <CCard>
      <CCardHeader component="h5">Nuevo Formulario</CCardHeader>
      <CCardBody>
        <form>
        <div class="mb-3">
          <label for="Nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="Nombre" />
        </div>

        <div class="mb-3">
          <label for="Clave" class="form-label">Clave</label>
          <input
            type="text"
            class="form-control"
            id="Clave" />
        </div>

        <div class="mb-3">
            <label for="Clave" class="form-label">Cabecera</label>
            <select class="form-select" aria-label="Default select example">                
                <option value="1">Cabecera/default.php</option>
                <option value="2">Cabecera/default_fiscalia.php</option>
                <option value="3">Cabecera/default2.php</option>
            </select>
        </div>


        <div class="mb-3">
          <label for="Linea1" class="form-label">Linea1</label>
          <input
            type="text"
            class="form-control"
            id="Linea1" />
        </div>

        <div class="mb-3">
          <label for="Linea2" class="form-label">Linea2</label>
          <input
            type="text"
            class="form-control"
            id="Linea2" />
        </div>

        <div class="mb-3">
          <label for="Linea3" class="form-label">Linea3</label>
          <input
            type="text"
            class="form-control"
            id="Linea3" />
        </div>

        <div class="mb-3">
          <label for="Rubro" class="form-label">Rubro</label>
          <input
            type="text"
            class="form-control"
            id="Rubro" />
        </div>
         
        <CButton component="a"  href="#/formularios" color="secondary">Cancelar</CButton>
        <CButton color="primary" @click="SuccesAlert=true"> <CSpinner  size="sm"/>Guardar</CButton> 
    

   
        </form>
        
      </CCardBody>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const SuccesAlert = ref(false)
</script>

<style lang="scss" scoped></style>
