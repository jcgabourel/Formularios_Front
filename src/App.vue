<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CUSideBar from './components/Layout/sidebar.vue' ;
import CUwrapper from './components/Layout/wrapper.vue' ;

import index from './components/index.vue' ;
import Formularios from './components/formularios.vue' ;
import nuevoFormulario from './components/nuevoFormulario.vue';
import Conceptos from './components/conceptos.vue';



import { ref, computed } from 'vue'


 


 
const routes = {
  '/': index,
  '/formularios': Formularios,
  '/conceptos': Conceptos,

  '/formularios/nuevo':nuevoFormulario
  
}
 
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})



</script>

<template>
<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
  <CUSideBar />
</div>
<div class="wrapper d-flex flex-column min-vh-100 bg-light">
  <CUwrapper>
   
    <component :is="currentView" />    
  </CUwrapper>
</div>

</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';


</style>
