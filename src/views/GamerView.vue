<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	import CountCircleMBPS from '../components/CountCircleMBPS.vue';
	import { gamerData } from '../data/gamer';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/swiper-bundle.css';
	import { Navigation } from 'swiper/modules';
	const modules = [Navigation]

	const loading = ref(true)
	onMounted(() => {
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			loading.value = false
			document.body.style.overflow = ''
		}, 3000)
	})


</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
    <section class="hero-residencial d-none d-lg-block position-relative overflow-hidden" v-if="!loading">
		<div class="container-fluid width-text position-absolute start-50 translate-middle-x text-center text-white px-3 mb-5 w-100 pt-5 mt-5">
			<div class="row pt-3 title-padding"
				v-motion-slide-visible-bottom
				:delay="200"
				:duration="1200"
			>
				<div class="col-12 text-uppercase mx-3">
					<img src="/img/gamer/logo-gamer.png" alt="img-gamer" class="img-fluid mt-4" width="850">
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/gamer/banner-gamer-2.jpeg" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
    <section class="jumbotron-residencial">
		<div class="container py-2" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="pt-5 pb-5 text-center">
				<h1 class="display-2 text-uppercase fw-semibold text-white mt-3">Sumérgete en la aventura</h1>
			</div>
			<div class="row g-4 pb-5">
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-1.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									Diseñado para Gamers
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-2.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									Mejora tu stream
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-3.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									Más megas de subida
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-4.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									Mejora tu latencia
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-5.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									Alcanza la victoria
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-4">
							<div class="text-center">
								<img src="/img/gamer/icono-gamer-6.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-3 pt-2 fw-bold text-white">
									LAN para gamers
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
  		</div>
	</section>
	<section class="bg-plans-gamer py-5 position-relative">
		<div class="container pt-lg-3 mt-lg-2 position-relative">
			<div 
				class="text-center text-white"
				v-motion-slide-visible-top
				:delay="200"
				:duration="1200"				
			>
                <h4 class="display-6 fw-semibold">Planes Gamer</h4>
				<h2 class="text-uppercase display-1 fw-bold text-uppercase">
					Internet por fibra óptica
				</h2>
			</div>
			<!-- Flechas de navegación -->
			<div class="d-flex justify-content-center gap-5 mb-3">
				<button class="btn swiper-button-prev-custom btn-arrow position-absolute end-100 top-50 translate-middle-y">
				<i class="bi bi-caret-left-fill fs-3"></i>
				</button>
				<button class="btn swiper-button-next-custom btn-arrow position-absolute start-100 top-50 translate-middle-y">
				<i class="bi bi-caret-right-fill fs-3"></i>
				</button>
			</div>
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
				768: { slidesPerView: 2 },
				1200: { slidesPerView: 3 }
			}"
			class="pt-4 pb-5"
			>

			<SwiperSlide v-for="plan in gamerData.plansInt" :key="plan.nombre">
				<div class="card text-center border-color-card d-flex shadow h-100">
				<div class="card-header fs-3 fw-bold">
					Plan {{ plan.nombre }}
				</div>
				<div class="card-body h-100">
					<CountCircleMBPS :value="plan.mbps" color="#7AD100" class="subtitle-text" />
					<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
					<div class="border icon-circle p-3 shadow">
						<img src="/img/gamer/icono-gamer-7.png" alt="" class="mx-auto" width="25" />
					</div>
					<div class="border icon-circle p-3 shadow">
						<img src="/img/gamer/icono-gamer-8.png" alt="" class="mx-auto" width="25" />
					</div>
					<div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
						<img :src="plan.simetrico" alt="" class="mx-auto" width="25" />
					</div>
					<div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
						<img :src="plan.repetidor" alt="" class="mx-auto" width="25" />
					</div>
					</div>
					<p class="fs-5">Internet + Telefonía</p>
					<h5 class="card-title subtitle-text display-3 fw-semibold">
					${{ plan.precio }}<small class="small fs-5">/Mensual</small>
					</h5>
					<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
					<p v-if="plan.wifi" class="card-text fs-4 m-0">{{ plan.wifi }}</p>
					<p v-if="plan.repwifi" class="card-text fs-4 m-0">{{ plan.repwifi }}</p>
					<p class="card-text fs-4">{{ plan.sub1 }} <span class="title-text fw-semibold">{{ plan.sub2 }}</span></p>
					<p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
					<p class="card-text fs-6 text-uppercase">USA|MEX|Canada</p>
					<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
					<p class="card-text fs-4 m-0">Pronto Pago</p>
					<h6 class="card-title subtitle-text display-5 fw-semibold">
					${{ plan.pago }}<small class="small fs-5">/Mensual</small>
					</h6>
					<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
					<a href="https://wa.link/w28bec" target="_blank" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
				</div>
				<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
					<!-- Folio ift: {{ plan.folioIFT }} -->
				</div>
				</div>
			</SwiperSlide>
			</Swiper>

		</div>
	</section>   
	<!-- <CovaregeMap /> -->
	<FooterComponent />
</template>

<style scoped>
.hero-residencial {
	background-image: url('/img/gamer/banner-gamer-1.png'); 
	background-size: cover; 
    background-position: center;
	min-height: 100vh;
}
.jumbotron-residencial {
	background-image: url('/img/gamer/fondo-gamer-1.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 80vh; /* valor base para XS */
}
.bg-plans-gamer {
  background-image: url('/img/gamer/fondo-gamer-2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  	min-height: 100vh; /* valor base para XS */
}
.width-text {
	width: 90%;
}
.subtitle-text {
	color: #7AD100 !important;
}
.title-text {
	color: #7AD100 !important
}
.resalt-text {
    color: #00133E !important
}
.gamer-text {
	color: #54e1fb !important;
}
.btn-gamer {
	background-color: #7AD100 !important;
	color: #FFFFFF !important;
}
.logo-ideal {
	height: 60px;
}
.title-ideal {
	font-size: 8.5rem;
}

.border-color {
	border: 2px solid #FFFFFF !important;
	  background: 
    linear-gradient(
      rgba(151, 151, 151, 0.3), 
      rgba(151, 151, 151, 0.3)
    );
  color: white;
}

.border-bottom-color {
	border-bottom: 2px solid #396E4B !important;
	width: 50% !important;
}

.border-color-card {
	border: 1px solid #396E4B;
}

.btn-primary {
	background-color: #7AD100 !important;
	color: #FFFFFF;
	border: 1px solid	#7AD100 !important;
}

.btn-primary:hover {
	background-color: #ffffff !important;
	border: 1px solid	#7AD100 !important;
	color: #7AD100;
}

.btn-light {
	background-color: #ffffff;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

.btn-light:hover {
	background-color: #396E4B;
	border: 1px solid #ffffff !important;
	color: #ffffff;
}

.card-header {
	background-color: #7AD100;
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


.btn-arrow,
.swiper-button-prev-custom,
.swiper-button-next-custom{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7AD100 !important;
}

.btn-arrow:hover,
.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover {
  color: #7AD100 !important;
}


@media (max-width: 1070px) {
  .btn-arrow {
    display: none;
  }
}



@media (min-width: 1025px) and (max-width: 1439.98px) {
	.title-padding {
		padding-top: 0rem !important;
	}
}
</style>