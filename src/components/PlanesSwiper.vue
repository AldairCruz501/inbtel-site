<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import CountCircleMBPS from './CountCircleMBPS.vue'

defineProps<{
  plans: {
    nombre: string
    mbps: number
    triple?: boolean
    precio: number
    sub1: string
    sub2: string
    simetrico?: string,
    repetidor?: string,
    pago: number
    folioIFT: string
  }[]
  imgSrc: string
  imgAlt: string
}>()

const modules = [Navigation]
</script>

<template>
  <div class="planes-swiper row mt-md-5 pb-md-5">
    <!-- Imagen lateral -->
    <div class="col-12 col-md-5 col-lg-4 col-xl-3 pt-0 mt-0 pt-md-5 mt-md-5 pb-5 pb-md-0">
      <div class="pt-0 mt-0 pt-md-3 mt-md-3">
        <img
          :src="imgSrc"
          :alt="imgAlt"
          class="img-fluid w-100 pt-3 mt-3 pt-md-5 mt-md-5"
        />
      </div>
    </div>

    <!-- Swiper y flechas -->
    <div class="col-12 col-md-7 col-lg-8 col-xl-9 px-5 position-relative">
      <div class="swiper-wrapper-container position-relative">
        <!-- Flechas laterales -->
        <button
          class="btn swiper-button-prev-custom btn-arrow position-absolute start-0 top-50 translate-middle-y z-3"
        >
          <i class="bi bi-caret-left-fill fs-3"></i>
        </button>
        <button
          class="btn swiper-button-next-custom btn-arrow position-absolute end-0 top-50 translate-middle-y z-3"
        >
          <i class="bi bi-caret-right-fill fs-3"></i>
        </button>

        <!-- Swiper -->
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }"
          :breakpoints="{
            768: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }"
          class="pt-4 pb-5"
        >
          <SwiperSlide
            v-for="plan in plans"
            :key="plan.nombre + plan.mbps"
          >
            <div class="card text-center shadow h-100">
              <div class="card-header fs-4 fw-bold text-white text-uppercase">
                {{ plan.nombre }}
              </div>
              <div class="card-body">
                <CountCircleMBPS :value="plan.mbps" />
                <div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
                  <div class="border icon-circle p-3 shadow">
                    <img src="/img/negocios/negocio-internet.png" alt="" class="mx-auto" width="25">
                  </div>
                  <div class="border icon-circle p-3 shadow">
                    <img src="/img/negocios/negocio-tel.png" alt="" class="mx-auto" width="25">
                  </div>
                  <div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
                    <img :src="plan.simetrico" alt="" class="mx-auto" width="25">
                  </div>
                  <div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
                    <img :src="plan.repetidor" alt="" class="mx-auto" width="25">
                  </div>
                </div>                

                <p class="fs-5 mt-3">
                  Internet + Telefonía<span v-if="plan.triple"> + TV</span>
                </p>

                <h5 class="card-title subtitle-text display-3 fw-semibold">
                  ${{ plan.precio }}<small class="small fs-5">/Mensual</small>
                </h5>

                <div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>

                <p class="card-text fs-4 m-0"><span class="subtitle-text fw-semibold">{{ plan.sub1 }}</span> {{ plan.sub2 }}</p>
                <p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
                <p class="card-text fs-6 text-uppercase">USA | MEX | CAN</p>

                <div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>

                <p class="card-text fs-4 m-0">Pronto Pago</p>
                <h6 class="card-title subtitle-text display-5 fw-semibold">
                  ${{ plan.pago }}<small class="small fs-5">/Mensual</small>
                </h6>

                <div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
                <a href="#" class="btn btn-primary fw-bold px-4">¡Lo quiero!</a>
              </div>
              <div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
                Folio IFT: {{ plan.folioIFT }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>

.subtitle-text {
	color: #FFD401 !important;
}
.subtitle-text-2 {
	color: #F27900 !important;
}
.btn-primary {
	background-color: #FFD401 !important;
	border: 1px solid	#FFD401 !important;
}

.btn-primary:hover {
	background-color: #ffffff !important;
	border: 1px solid	#FFD401 !important;
	color: #F27900;
}
.card-header {
	background-color: #FFD401;
  border: 1px solid	#FFD401 !important;
	color: #ffffff;
}

.plan-circle {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	margin: 0 auto 1rem auto;
	flex-direction: column;
}

.icon-circle {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	flex-direction: column;
}

.swiper-button-prev-custom {
  left: -2.5rem !important; /* desplaza hacia la izquierda */
  border: none !important;
  color: #FFD401 !important;
}

.swiper-button-next-custom {
  right: -2.5rem !important; /* desplaza hacia la derecha */
  border: none !important;
  color: #FFD401 !important;
}

/* Aumenta la zona de clic en pantallas grandes */
@media (max-width: 768px) {
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    display: none !important;
  }
}
</style>