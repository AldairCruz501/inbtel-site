<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { CountUp } from 'countup.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const textColorClass = computed(() => {
  switch (route.path) {
    case '/gamer':
      return 'text-gamer' // rojo
    case '/television':
      return 'text-primary' // azul
    case '/negocios':
      return 'text-negocios' // verde
    default:
      return 'text-residencial' // clase por defecto
  }
})

const circleStrokeColor = computed(() => {
  switch (route.path) {
    case '/gamer':
      return '#7AD100' // Bootstrap "danger" rojo
    case '/television':
      return '#0d6efd' // Bootstrap "primary" azul
    case '/negocios':
      return '#FFD401' // Bootstrap "success" verde
    default:
      return '#396E4B' // Color por defecto
  }
})

const props = defineProps<{
  value: number
}>()

const isVisible = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const counterRef = ref<HTMLElement | null>(null)

const numberSizeClass = computed(() => {
  if (props.value >= 10000) return 'small-text'
  if (props.value >= 1000) return 'medium-text'
  return 'large-text'
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isVisible.value) {
        isVisible.value = true

        if (counterRef.value) {
          const countUp = new CountUp(counterRef.value, props.value, {
            duration: 3.5,
            separator: ',' // 👈 Esto agrega comas para miles
          })
          countUp.start()
        }

        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  if (wrapperRef.value) {
    observer.observe(wrapperRef.value)
  }
})
</script>

<template>
  <div class="circle-wrapper" ref="wrapperRef">
    <svg class="progress-ring" width="120" height="120">
    <circle
      class="progress-ring__circle"
      :stroke="circleStrokeColor"
      stroke-width="3"
      fill="transparent"
      r="51"
      cx="60"
      cy="60"
      :class="{ 'animate-stroke': isVisible }"
    />
    </svg>
    <div class="circle-content">
      <span ref="counterRef" :class="[textColorClass, 'fw-bold lh-1', numberSizeClass]">0</span>
      <small>Mbps</small>
    </div>
  </div>
</template>

<style scoped>
.circle-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  padding: 0px;
  margin: 0 auto 1rem auto;
}

.progress-ring__circle {
  stroke-dasharray: 326;
  stroke-dashoffset: 326;
  transition: stroke-dashoffset 1.5s ease;
}

.animate-stroke {
  stroke-dashoffset: 0;
}

.circle-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-residencial {
  color: #396E4B;
}
.text-gamer{
  color: #7AD100;
}
.text-negocios {
  color: #FFD401;
}
.large-text {
  font-size: 2.5rem;
}

.medium-text {
  font-size: 1.8rem;
}

.small-text {
  font-size: 1.4rem;
}
</style>
