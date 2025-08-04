<script setup lang="ts">
import {terminosCondiciones2 } from '../data/terminosCondicionesData'
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

</script>

<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <section class="container py-5">
    <h1 class="mb-4 text-center pt-5 mt-3 text-title display-2 fw-bold">Colaboración con la Justicia</h1>

    <div v-for="(seccion, index) in terminosCondiciones2" :key="index" class="mb-5">
      <h3 class="text-primary fs-2 fw-semibold mb-3">{{ seccion.titulo }}</h3>
      <p
        v-for="(parrafo, idx) in seccion.contenido"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
      <ul v-if="seccion.lista" class="ps-3 fs-5 list-none">
        <li v-for="(item, i) in seccion.lista" :key="`li-${i}`">
          {{ i + 1 }}) {{ item }}
        </li>
      </ul>

    <p
        v-for="(parrafo, idx) in seccion.contenido1"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
    </div>
  </section>
  <FooterComponent />
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
.text-justify {
  text-align: justify;
}
.text-primary {
    color: #7AD100 !important;
}
.text-title {
    color: #396E4B !important;
}
.list-none {
    list-style-type: none !important;
  }
</style>
