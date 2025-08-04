<script setup lang="ts">
import { terminosCondiciones, terminosCondiciones1 } from '../data/terminosCondicionesData'
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import PlanesInternet from '../components/PlanesInternet.vue';
import InfoAcordeon from '../components/InfoAcordeon.vue';
</script>

<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <div class="container py-5">
    <h1 class="mb-4 text-center pt-5 mt-3 text-title display-2 fw-bold">Términos y Condiciones</h1>

    <section v-for="(seccion, index) in terminosCondiciones" :key="index" class="mb-5">
      <h3 class="text-primary fs-2 fw-semibold mb-3">{{ seccion.titulo }}</h3>
      <p
        v-for="(parrafo, idx) in seccion.contenido"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
      <ul v-if="seccion.lista" class="list-unstyled ps-3 fs-5">
        <li v-for="(item, i) in seccion.lista" :key="`li-${i}`">· {{ item }}</li>
      </ul>
    <p
        v-for="(parrafo, idx) in seccion.contenido1"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
    </section>
    <PlanesInternet />
    <InfoAcordeon />
    <section v-for="(seccion, index) in terminosCondiciones1" :key="index" class="mb-5 mt-5">
      <h3 class="text-primary fs-2 fw-semibold mb-3">{{ seccion.titulo }}</h3>
      <p
        v-for="(parrafo, idx) in seccion.contenido"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
      <ul v-if="seccion.lista" class="list-unstyled ps-3 fs-5">
        <li v-for="(item, i) in seccion.lista" :key="`li-${i}`">· {{ item }}</li>
      </ul>
    <p
        v-for="(parrafo, idx) in seccion.contenido1"
        :key="`p-${idx}`"
        class="text-justify fs-5"
      >
        {{ parrafo }}
      </p>
    </section>

    <div class="text-muted text-end">
      <small class="fs-6">Última actualización: octubre/2022</small>
    </div>
  </div>
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
.list-lower-alpha {
    list-style-type: lower-alpha;
  }
</style>
