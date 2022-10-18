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
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Secretaría de Ecología y Medio Ambiente</CTableDataCell >
              <CTableDataCell>SEMA</CTableDataCell>
              <CTableDataCell>Activo</CTableDataCell>
              <CTableDataCell
                ><CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <CButton color="danger">Eliminar</CButton>
                  <CButton color="warning">Editar</CButton>
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
//import { CAlert } from '@coreui/vue';
//import CoreuiVue from "@coreui/vue";
</script>

<style lang="scss" scoped></style>
