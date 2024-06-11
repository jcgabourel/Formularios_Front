<template>
  <div class="container-lg">
    <CAlert v-if="SuccesAlert" color="success"
      >A simple success alert—check it out!</CAlert
    >
    <CCard>
      <CCardHeader component="h5">Nuevo Formulario</CCardHeader>
      <CCardBody>
        <CForm
          class="row g-3 needs-validation"
          novalidate
          :validated="validatedCustom01"
          @submit="handleSubmitCustom01"   >
          <div class="mb-3">
            <label for="Nombre" class="form-label">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="Nombre"
              v-model="data.Nombre"
              required      />
          </div>

          <div class="mb-3">
            <label for="Clave" class="form-label">Clave</label>
            <input type="text" class="form-control" id="Clave"  v-model="data.Clave" />
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
            <input type="text" class="form-control"  v-model="data.Linea1" id="Linea1" />
          </div>

          <div class="mb-3">
            <label for="Linea2" class="form-label">Linea2</label>
            <input type="text" class="form-control"  v-model="data.Linea2" id="Linea2" />
          </div>

          <div class="mb-3">
            <label for="Linea3" class="form-label">Linea3</label>
            <input type="text" class="form-control"  v-model="data.Linea3" id="Linea3" />
          </div>

           
          

            <CCol :xs="12">
                
                <CButton component="a" href="#/formularios" color="secondary">Cancelar</CButton>
                <CButton color="primary" type="submit"><CSpinner v-if="esperando" size="sm" />Guardar</CButton >
            </CCol>
        </CForm>
      </CCardBody>
    </CCard>

   
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const props = defineProps(['id'])
const esperando = ref(false);

const Nombre = ref("");
const Clave = ref("");
const data = ref("");
 const route = useRoute() ;

const validatedCustom01= ref(null)


function handleSubmitCustom01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      validatedCustom01.value = true
    }
 
  fetch('http://10.9.200.57:8000/api/formularios/'+route.params.id)
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))



</script>

<style lang="scss" scoped></style>
