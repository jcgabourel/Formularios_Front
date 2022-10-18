<template>
  
    <header class="header header-sticky mb-4">
        <CUheader />
    </header>

    <div class="body flex-grow-1 px-3"><slot></slot></div>
    <footer class="footer"></footer>
  
</template>

<script setup>
import CUheader from "./header.vue" ;

</script>
