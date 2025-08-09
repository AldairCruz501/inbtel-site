<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import FooterComponent from '../components/FooterComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import LoaderComponent from '../components/LoaderComponent.vue'

const API_BASE = 'https://api-inbtel.cero208.mx/cobertura'

// Datos para selects
const estados = ref<string[]>([])
const municipios = ref<string[]>([])
const colonias = ref<string[]>([])

const selectedEstado = ref('')
const selectedMunicipio = ref('')
const selectedColonia = ref('')

// URLs del mapa
const embedDireccion = ref('')
const googleMapsDireccion = ref('')

// Loading inicial
const loading = ref(true)
onMounted(async () => {
  document.body.style.overflow = 'hidden'
  await fetchEstados()
  loading.value = false
  document.body.style.overflow = ''
})

async function fetchEstados() {
  try {
    const { data } = await axios.get(`${API_BASE}/estados`)
    estados.value = data.map((item: any) => item.estado)
  } catch (error) {
    console.error('Error cargando estados', error)
  }
}

async function fetchMunicipios() {
  if (!selectedEstado.value) return
  try {
    const { data } = await axios.get(
      `${API_BASE}/municipios?estado=${encodeURIComponent(selectedEstado.value)}`
    )
    municipios.value = data.map((item: any) => item.municipio)
    colonias.value = []
    selectedMunicipio.value = ''
    selectedColonia.value = ''
  } catch (error) {
    console.error('Error cargando municipios', error)
  }
}

async function fetchColonias() {
  if (!selectedEstado.value || !selectedMunicipio.value) return
  try {
    const { data } = await axios.get(
      `${API_BASE}/colonias?estado=${encodeURIComponent(selectedEstado.value)}&municipio=${encodeURIComponent(selectedMunicipio.value)}`
    )
    colonias.value = data.map((item: any) => item.colonia)
    selectedColonia.value = ''
  } catch (error) {
    console.error('Error cargando colonias', error)
  }
}

watch(selectedEstado, () => {
  fetchMunicipios()
})

watch(selectedMunicipio, () => {
  fetchColonias()
})

function buscarCobertura() {
  if (selectedEstado.value && selectedMunicipio.value && selectedColonia.value) {
    const direccion = `${selectedColonia.value}, ${selectedMunicipio.value}, ${selectedEstado.value}`
    const encodedDireccion = encodeURIComponent(direccion)

    embedDireccion.value = `https://www.google.com/maps?q=${encodedDireccion}&z=16&output=embed`
    googleMapsDireccion.value = `https://www.google.com/maps/place/${encodedDireccion}`
  }
}
</script>


<template>
  <LoaderComponent />
  <HeaderComponent />

  <div class="container py-5 my-5">
    <h1 class="mb-2 mt-3 text-uppercase text-center fw-bold display-1 title-text">Cobertura inbtel</h1>
    <p class="fs-5 mb-4">
      Con <span class="fw-semibold resalt-text">INBTEL</span>, la conexión va contigo. Disfruta de internet y televisión de alta calidad en Tampico, Cd. Madero y Altamira, con la velocidad y estabilidad que tu hogar o negocio necesitan.
    </p>
    <div class="row g-3">
      <div class="col-12 col-md-6 col-lg-4">
        <!-- Estado -->
        <div class="mb-3">
          <label class="form-label">Estado</label>
          <select v-model="selectedEstado" class="form-select">
            <option value="">Seleccione un estado</option>
            <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
          </select>
        </div>

        <!-- Municipio -->
        <div class="mb-3">
          <label class="form-label">Municipio</label>
          <select v-model="selectedMunicipio" class="form-select" :disabled="!municipios.length">
            <option value="">Seleccione un municipio</option>
            <option v-for="municipio in municipios" :key="municipio" :value="municipio">{{ municipio }}</option>
          </select>
        </div>

        <!-- Colonia -->
        <div class="mb-3">
          <label class="form-label">Colonia</label>
          <select v-model="selectedColonia" class="form-select" :disabled="!colonias.length">
            <option value="">Seleccione una colonia</option>
            <option v-for="colonia in colonias" :key="colonia" :value="colonia">{{ colonia }}</option>
          </select>
        </div>

        <button class="btn btn-primary" @click="buscarCobertura" :disabled="!selectedColonia">
          Buscar Cobertura
        </button>
      </div>
      <div class="col-12 col-md-6 col-lg-8">
        <div v-if="embedDireccion">
          <div class="ratio ratio-16x9">
            <iframe
              :src="embedDireccion"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <p class="mt-2">
            <a :href="googleMapsDireccion" target="_blank" rel="noopener">
              Abrir en Google Maps →
            </a>
          </p>
        </div>        
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<style scoped>
.title-text {
	color: #396E4B !important
}
.resalt-text {
  color: #7AD100 !important
}

.btn-primary {
	background-color: #396E4B !important;
	border: 1px solid	#396E4B !important;
}
.btn-primary:hover {
	background-color: #ffffff !important;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

select:focus {
  /* border: 1px solid	#396E4B !important; */
  outline: none !important; /* Elimina el borde azul por defecto */
  border: 1px solid #396E4B; /* Nuevo color de borde */
  box-shadow: 0 0 10px #396E4B; /* Sombra alrededor */
  transition: all 0.2s ease; /* Animación suave */
}
</style>

