<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import { planesTriplePlay } from '../data/planes';

const planRes = planesTriplePlay.plansRes
const planGamer = planesTriplePlay.plansGamer
</script>

<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <section class="container py-5">
    <h1 class="mb-1 text-end pt-5 mt-3 text-title display-2 fw-bold">Tarifas registradas ante la IFT</h1>
    <h2 class="text-end text-primary display-5 fw-bold">Triple Play</h2>
    <div class="mt-5">
      <h3 class="text-title display-6 fw-semibold">Residencial Estándar</h3>
      <div class="table-responsive mt-4">
        <table class="table table-bordered table-hover">
          <thead class="table-success text-center">
            <tr>
              <th>Número de Inscripción</th>
              <th>Nombre de la Tarifa</th>
              <th>Fecha de Inscripción</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="plan in planRes" :key="plan.numeroInscripcion">
              <td>{{ plan.numeroInscripcion }}</td>
              <td>{{ plan.nombreTarifa }}</td>
              <td>{{ plan.fechaInscripcion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mt-3">
      <h3 class="text-title display-6 fw-semibold">Residencial Elite</h3>
      <div class="table-responsive mt-4">
        <table class="table table-bordered table-hover">
          <thead class="table-success text-center">
            <tr>
              <th>Número de Inscripción</th>
              <th>Nombre de la Tarifa</th>
              <th>Fecha de Inscripción</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="plan in planGamer" :key="plan.numeroInscripcion">
              <td>{{ plan.numeroInscripcion }}</td>
              <td>{{ plan.nombreTarifa }}</td>
              <td>{{ plan.fechaInscripcion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
