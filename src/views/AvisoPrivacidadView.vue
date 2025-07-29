
<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import { secciones } from '../data/avisoPrivacidadData';
</script>

<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <section class="container py-5">
    <h1 class="mb-4 text-center pt-5 mt-3 text-title display-2 fw-bold">Aviso de Privacidad</h1>

    <div v-for="(seccion, index) in secciones" :key="index" class="mb-5">
      <h3 class="text-primary mb-3 fw-semibold">{{ seccion.titulo }}</h3>
      <p
        v-for="(parrafo, idx) in seccion.contenido"
        :key="idx"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
      <ul v-if="seccion.lista" class="ps-5 fs-5">
        <li v-for="(item, i) in seccion.lista" :key="i">{{ item }}</li>
      </ul>
      <ul v-if="seccion.listabc" class="list-lower-alpha ps-5 fs-5">
        <li v-for="(item, i) in seccion.listabc" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div class="text-muted text-end">
      <p class="fs-6">Última actualización: septiembre/2022</p>
    </div>
  </section>
  <FooterComponent />
</template>


<style scoped>
.text-justify {
  text-align: justify;
}
.text-primary {
    color: #7AD100 !important;
}
.text-title {
    color: #396E4B !important;
}
  .list-lower-alpha {
    list-style-type: lower-alpha;
  }
</style>
