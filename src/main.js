import { createApp } from 'vue' 
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import {RouterLink,createRouter,createWebHashHistory} from 'vue-router'

 

import index from './components/index.vue' ;
import Formularios from './components/formularios.vue' ;
import nuevoFormulario from './components/nuevoFormulario.vue';
import editarFormulario from './components/editarFormulario.vue';
import Conceptos from './components/conceptos.vue';


 
const routes = [
  
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/formularios",
    name: "formularios",
    component: Formularios
  },
  {
    path: "/conceptos",
    name: "conceptos",
    component: Conceptos
  },
  {
    path: "/formularios/nuevo",
    name: "nuevoFormulario",
    component: nuevoFormulario
  },
  {
    path: "/formularios/editar/:id",
    name: "editarFormulario",
    props: true,
    component: editarFormulario
  }

]
/*

  '/': index,
  '/formularios': Formularios,
  '/conceptos': Conceptos,
  '/formularios/nuevo':nuevoFormulario,
  '/formularios/editar/:id':editarFormulario
*/
  
 
 

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
 


createApp(App).use(CoreuiVue).use(router).mount('#app')
