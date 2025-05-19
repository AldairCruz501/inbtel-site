<template>
    <div id="map" class="map-container"></div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { FeatureCollection } from 'geojson'

const map = ref<L.Map>()

onMounted(() => {
  map.value = L.map('map').setView([22.255277777778, -97.868611111111], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map.value!)

  const coverageData: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Tampico (4G)', coverage: '4G' },
        geometry: {
          type: 'Point',
          coordinates: [-97.868611111111, 22.255277777778], // Coordenadas de Tampico
        }
      },
      {
        type: 'Feature',
        properties: { name: 'Tampico (3G)', coverage: '3G' },
        geometry: {
          type: 'Point',
          coordinates: [-97.868611111111, 22.255277777778], // Misma ubicación
        }
      }
    ]
  }

  L.geoJSON(coverageData, {
    pointToLayer: (feature, latlng) => {
      let color = 'purple'
      if (feature?.properties?.coverage === '3G') color = 'green'
      if (feature?.properties?.coverage === '4G') color = 'blue'
      if (feature?.properties?.coverage === '5G') color = 'red'
      
      // Crear círculos (manchitas)
      const coverageRadius = feature?.properties?.coverage === '3G' ? 2000 : (feature?.properties?.coverage === '4G' ? 3000 : 5000)  // radio de cobertura

      return L.circle(latlng, {
        radius: coverageRadius,
        color: color,
        fillColor: color,
        fillOpacity: 0.4,
        weight: 1,
      })
    }
  }).addTo(map.value!)
})


</script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 500px;
  }
  </style>
  