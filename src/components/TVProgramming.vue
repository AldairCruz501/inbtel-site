<script setup lang="ts">
import { ref, computed } from 'vue'
import { televisonData } from '../data/television'
import type {
  PlanStandard,
  PlanElite,
  PlanPremium,
} from '../interfaces/Television'

type PlanType = 'Standard' | 'Elite' | 'Premium'

const activeTab = ref<PlanType>('Standard')

// Precios por plan
const planPrices: Record<PlanType, number> = {
  Standard: 149,
  Elite: 199,
  Premium: 249,
}

// Computed: canales según plan
const currentChannels = computed<PlanStandard[] | PlanElite[] | PlanPremium[]>(() => {
  switch (activeTab.value) {
    case 'Standard':
      return televisonData.planStan
    case 'Elite':
      return televisonData.planElite
    case 'Premium':
      return televisonData.planPrem
    default:
      return []
  }
})

// Computed: precio actual según plan activo
const currentPrice = computed(() => planPrices[activeTab.value])
</script>

<template>
  <div class="container my-3">
    <div
      v-motion-slide-visible-top
      :delay="200"
      :duration="1200"
    >
      <h3 class="text-center text-tv fw-bold display-5">Programación</h3>
      <h1 class="text-center fw-bold display-1">
        <span class="text-plan text-uppercase">{{ activeTab }} ${{ currentPrice }}/MES</span>
      </h1>
    </div>
    <ul class="nav nav-tabs justify-content-center mt-4 mb-5 border-0">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn-tv rounded-1 fw-bold mt-1 mx-lg-3"
          :class="{ active: activeTab === 'Standard', 'tab-selected': activeTab === 'Standard' }"
          @click="activeTab = 'Standard'"
        >
          Standard
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn-tv rounded-1 fw-bold mt-1 mx-lg-3"
          :class="{ active: activeTab === 'Elite', 'tab-selected': activeTab === 'Elite' }"
          @click="activeTab = 'Elite'"
        >
          Elite
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn-tv rounded-1 fw-bold mt-1 mx-lg-3"
          :class="{ active: activeTab === 'Premium', 'tab-selected': activeTab === 'Premium' }"
          @click="activeTab = 'Premium'"
        >
          Premium
        </button>
      </li>
    </ul>

    <Transition name="fade" mode="out-in">
      <div class="tab-pane fade show active" :key="activeTab">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
          <div
            class="col"
            v-for="(channel, index) in currentChannels"
            :key="index"
          >
            <div class="border p-2 bg-white rounded shadow-sm text-center h-100 d-flex justify-content-center">
              <img :src="channel.logo" alt="Canal" class="img-fluid p-2" />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <div class="text-center mt-5">
      <a href="https://wa.link/w28bec" target="_blank" class="btn btn-success px-4 py-2">Contratar</a>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 100px;
  object-fit: contain;
}

/* Botón general */
.btn-tv {
  background-color: #7AD100 !important;
  color: #FFFFFF !important;
  border: 1px solid #7AD100 !important;
  transition: all 0.3s ease;
}

/* Hover */
.btn-tv:hover {
  background-color: #FFFFFF !important;
  color: #7AD100 !important;
}

/* Tab seleccionado */
.tab-selected,
.nav-link.active {
  background-color: #FFFFFF !important;
  color: #7AD100 !important;
  border-bottom: 3px solid #7AD100 !important;
}

/* Texto */
.text-tv {
  color: #7AD100 !important;
}
.text-plan {
  color: #00133E !important;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
