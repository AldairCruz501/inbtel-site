<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import CountUp from 'vue-countup-v3'

const { value, duration, size, strokeWidth, color, prefix, suffix } = defineProps<{
  value: number
  duration?: number
  size?: number
  strokeWidth?: number
  color?: string
  prefix?: string
  suffix?: string
}>()

const isVisible = ref(false)
const progress = ref(0)
const elRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

// Cálculo del radio y circunferencia del círculo
const radius = computed(() => (size || 120) / 2 - (strokeWidth || 8) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          let start = 0
          const step = () => {
            if (start < value) {
              start += value / ((duration || 2) * 60) // 60fps aprox
              progress.value = Math.min((start / value) * 100, 100)
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        } else {
          isVisible.value = false
          progress.value = 0
        }
      })
    },
    { threshold: 0.3 }
  )

  if (elRef.value) {
    observer.observe(elRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && elRef.value) {
    observer.unobserve(elRef.value)
  }
})
</script>

<template>
  <div
    ref="elRef"
    class="circle-counter"
    :style="{ width: (size || 120) + 'px', height: (size || 120) + 'px' }"
  >
    <svg :width="size || 120" :height="size || 120">
      <!-- Fondo -->
      <circle
        :r="radius"
        :cx="(size || 120) / 2"
        :cy="(size || 120) / 2"
        stroke="#e5e5e5"
        fill="transparent"
        :stroke-width="strokeWidth || 8"
      />
      <!-- Progreso -->
      <circle
        :r="radius"
        :cx="(size || 120) / 2"
        :cy="(size || 120) / 2"
        :stroke="color || '#007bff'"
        fill="transparent"
        :stroke-width="strokeWidth || 8"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (progress / 100) * circumference"
        style="transition: stroke-dashoffset 0.05s linear;"
      />
    </svg>

    <!-- Número centrado -->
    <div class="counter-text">
      <CountUp
        v-if="isVisible"
        :end-val="value"
        :duration="duration || 2"
        :prefix="prefix || ''"
        :suffix="suffix || ''"
        class="m-0 lh-1 fs-3"
      />
      <small class="fw-light m-0 lh-1 text-dark">Mbps</small>
    </div>
  </div>
</template>

<style scoped>
.circle-counter {
  position: relative;
  display: inline-block;
}
.counter-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
}
</style>
