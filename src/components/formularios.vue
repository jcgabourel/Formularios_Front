<template>
  <div class="container-lg">
    <CCard>
      <CCardHeader component="h5">Formularios</CCardHeader>
      <CCardBody>
        <CTable responsive="sm">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Clave</CTableHeaderCell>
              <CTableHeaderCell scope="col">Estatus</CTableHeaderCell>
              <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <CTableRow v-for="formulario in data" >
              <CTableHeaderCell scope="row">{{formulario.id}}</CTableHeaderCell>
              <CTableDataCell>{{formulario.Nombre}}</CTableDataCell >
              <CTableDataCell>{{formulario.Clave}}</CTableDataCell>
              <CTableDataCell>{{formulario.Activado}}</CTableDataCell>
              <CTableDataCell
                ><CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <CButton color="danger">Eliminar</CButton>
                  <CButton color="warning" component="a" :href="`#/formularios/editar/${formulario.id}`" >Editar</CButton>
                  <CButton color="success" component="a"  href="#/conceptos">Conceptos</CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>

        <CButton component="a"  href="#/formularios/nuevo">Agregar</CButton>
      </CCardBody>
    </CCard>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const data = ref(null)
  const error = ref(null)
 

  fetch('http://10.9.200.57:8000/api/formularios')
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))


</script>

<style lang="scss" scoped></style>
