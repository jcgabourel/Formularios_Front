<template>
    <div>
<CForm class="row g-3 needs-validation" novalidate :validated="validatedTooltip01" @submit="handleSubmitTooltip01">
  <CCol md="4" class="position-relative">
    <CFormLabel for="validationTooltip01">Email</CFormLabel>
    <CFormInput id="validationTooltip01" value="Mark" required/>
    <CFormFeedback tooltip valid>
      Looks good!
    </CFormFeedback>
  </CCol>
  <CCol md="4" class="position-relative">
    <CFormLabel for="validationTooltip02">Email</CFormLabel>
    <CFormInput id="validationTooltip02" value="Otto" required/>
    <CFormFeedback tooltip valid>
      Looks good!
    </CFormFeedback>
  </CCol>
  <CCol md="4" class="position-relative">
    <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
      <CFormInput id="validationTooltipUsername" value="" aria-describedby="inputGroupPrepend" required/>
      <CFormFeedback tooltip invalid>
      Please choose a username.
      </CFormFeedback>
    </CInputGroup>
  </CCol>
  <CCol md="6" class="position-relative">
    <CFormLabel for="validationTooltip03">City</CFormLabel>
    <CFormInput id="validationTooltip03" required/>
    <CFormFeedback tooltip invalid>
      Please provide a valid city.
    </CFormFeedback>
  </CCol>
  <CCol md="3" class="position-relative">
    <CFormLabel for="validationTooltip04">City</CFormLabel>
    <CFormSelect id="validationTooltip04" required>
      <option disabled value="">Choose...</option>
      <option>...</option>
    </CFormSelect>
    <CFormFeedback tooltip invalid>
      Please provide a valid city.
    </CFormFeedback>
  </CCol>
  <CCol md="3" class="position-relative">
    <CFormLabel for="validationTooltip05">City</CFormLabel>
    <CFormInput id="validationTooltip05" required/>
    <CFormFeedback tooltip invalid>
      Please provide a valid zip.
    </CFormFeedback>
  </CCol>
  <CCol xs="12" class="position-relative">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const validatedCustom01= ref(null)
const validatedDefault01= ref(null)
const validatedTooltip01= ref(null)


function handleSubmitCustom01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      validatedCustom01.value = true
    }

  function  handleSubmitDefault01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      validatedDefault01.value = true
    }

 function   handleSubmitTooltip01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      validatedTooltip01.value = true
    }

</script>

<style lang="scss" scoped>

</style>