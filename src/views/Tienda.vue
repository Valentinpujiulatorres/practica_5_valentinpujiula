<template>
<PaginaTienda/>
  <div class="tienda">
    <img alt="Vue logo" src="../assets/BicycleLogo.jpg">
  </div>
</template>


<script>
// @ is an alias to /src
import PaginaTienda from '@/components/PaginaTienda.vue'


export default {
  name: 'Tienda',
  components: {
    PaginaTienda
   
  }
}
</script>
