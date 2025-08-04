<template>
  <div class="container">
     <h3 class="mb-4 text-title">Planes de Internet</h3>
    <div v-for="plan in planes" :key="plan.nombre" class="mb-3">
      <h4 class="text-primary mb-3">{{ plan.nombre }}</h4>

      <div class="col-12 col-md-9 table-responsive">
        <table class="table table-bordered align-middle">
          <thead class="table-success">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Mensualidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fila, index) in plan.opciones" :key="index">
              <td>{{ fila.servicio }}</td>
              <td>{{ fila.precio }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface OpcionPlan {
  servicio: string
  precio: string
}

interface Plan {
  nombre: string
  opciones: OpcionPlan[]
}

const planes: Plan[] = [
  {
    nombre: 'Plan Residencial',
    opciones: [
      { servicio: 'Residencial 80Mbps + Telefonía', precio: '$399.00 MXN' },
      { servicio: 'Residencial 150Mbps + Telefonía', precio: '$449.00 MXN' },
      { servicio: 'Residencial 200Mbps + Telefonía', precio: '$599.00 MXN' },
      { servicio: 'Residencial 300Mbps + Telefonía + Extensor de señal', precio: '$649.00 MXN' },
      { servicio: 'Residencial 600Mbps + Telefonía + Extensor de señal', precio: '$949.00 MXN' },
      { servicio: 'Residencial 1000Mbps + Telefonía + Extensor de señal', precio: '$1,480.00 MXN' }
    ]
  },
  {
    nombre: 'Plan Gamer',
    opciones: [
      { servicio: 'Residencial 80Mbps + Telefonía', precio: '$449.00 MXN' },
      { servicio: 'Residencial 150Mbps + Telefonía', precio: '$549.00 MXN' },
      { servicio: 'Residencial 200Mbps + Telefonía', precio: '$699.00 MXN' },
      { servicio: 'Residencial 350Mbps + Telefonía + Extensor de señal', precio: '$1,099.00 MXN' },
      { servicio: 'Residencial 700Mbps + Telefonía + Extensor de señal', precio: '$1,349.00 MXN' },
      { servicio: 'Residencial 1000Mbps + Telefonía + Extensor de señal', precio: '$1,599.00 MXN' }
    ]
  },
  {
    nombre: 'Plan Inbtel Negocios',
    opciones: [
      {
        servicio:
          'Residencial 80Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$496.00 MXN'
      },
      {
        servicio:
          'Residencial 150Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$546.00 MXN'
      },
      {
        servicio:
          'Residencial 200Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$696.00 MXN'
      },
      {
        servicio:
          'Residencial 300Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$746.00 MXN'
      },
      {
        servicio:
          'Residencial 600Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$1,046.00 MXN'
      },
      {
        servicio:
          'Residencial 1000Mbps + Telefonía + Extensor de señal + Página Web + Hosting + Dominio .com.mx',
        precio: '$1,577.00 MXN'
      }
    ]
  }
]
</script>

<style scoped>
.text-primary {
    color: #396E4B !important; 
}
.text-title {
    color: #7AD100  !important;
}

.table td, .table th {
  vertical-align: middle;
}
</style>