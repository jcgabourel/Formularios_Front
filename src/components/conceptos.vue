<template>
  <div class="container-lg">
    <CCard>
      <CCardHeader component="h5">Conceptos</CCardHeader>
      <CCardBody>
        <CCard>
          <CCardBody>Derechos por información de transparencia. </CCardBody>
        </CCard>

        <CTable responsive="sm">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tarifa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Rubro</CTableHeaderCell>
              <CTableHeaderCell scope="col">Estatus</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tipo Calculo</CTableHeaderCell>
               <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>


            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell >1 Por los materiales que se utilicen para reproducir la información que proporcionen las Dependencias, a través de sus Unidades de Transparencia, Acceso a la Información Pública y Protección de Datos Personales</CTableDataCell >
              <CTableDataCell>Divición</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>000000</CTableDataCell>
              <CTableDataCell>Activo</CTableDataCell>
              <CTableDataCell>Tarifa</CTableDataCell>              
              
              <CTableDataCell
                ><CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <CButton color="danger">Eliminar</CButton>
                  <CButton color="warning">Editar</CButton>
                  <CButton color="success">Subsidios</CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell >1.1 Para la expedición de copia simple blanco y negro por cada foja tamaño carta</CTableDataCell >
              <CTableDataCell>Cobrable</CTableDataCell>
              <CTableDataCell>0.0110</CTableDataCell>
              <CTableDataCell>000000</CTableDataCell>
              <CTableDataCell>Activo</CTableDataCell>
              <CTableDataCell>Tarifa</CTableDataCell>              
              
              <CTableDataCell
                ><CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <CButton color="danger">Eliminar</CButton>
                  <CButton color="warning">Editar</CButton>
                  <CButton color="success">Subsidios</CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>


          </CTableBody>
        </CTable>

        <CButton component="a" href="#/formularios/nuevo">Agregar</CButton>
      </CCardBody>
    </CCard>
  </div>
</template>

<script setup></script>
