<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import InbtelAppComponent from '../components/InbtelAppComponent.vue';
    import ExtComponent from '../components/ExtComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	import CountCircleMBPS from '../components/CountCircleMBPS.vue';
    import { residencialData } from '../data/residencial';

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
		<div class="container-fluid text-center text-white px-3 mb-5 w-100 pt-5 mt-5 mx-auto">
			<div class="row pt-3 title-padding m-0"
				v-motion-fade-visible
				:delay="200"
				:duration="1200"
			>
				<div class="col-12 text-uppercase">
					<h1 class="display-1 fw-bold title-text lh-1">
                        <span class="subtitle-text lh-1">Planes</span> <br>
                        Residenciales
                    </h1>
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-residencial-responsive d-block d-lg-none">
		<div class="container-fluid p-0">
			<img src="/img/residencial/banner-residencial-2.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
    <section class="jumbotron-residencial">
		<div class="container py-2">
			<div class="row g-5 m-0 overflow-hidden">
				<div class="col-xl-5 pt-5"
					v-motion-slide-visible-left
					:delay="200"
					:duration="1200"
				>
                    <img src="/img/residencial/chicos-residencial.png" alt="img-residencial" class="img-fluid">
				</div>
                <div class="col-xl-7 pt-5"
					v-motion-slide-visible-right
					:delay="200"
					:duration="1200"
				>
                    <div class="mb-3 text-uppercase">
                        <h2 class="display-4 resalt-text fw-semibold">
                            Moderniza tu <span class="title-text">Señal</span>
                        </h2>
                    </div>
                    <p class="text-dark fs-4">
                        Contrata tu servicio de internet desde <span class="title-text fw-bold">$399/Mes</span>
                        y disfruta de la mejor conexión en tu hogar.
                    </p>
                    <div class="row g-4">
                        <div class="col-lg-4">
                            <div class="border-color rounded-4 h-100">
                                <div class="p-4">
                                   <div class="text-center">
                                     <img src="/img/residencial/icono-residencial-1.png" alt="icon-signal" class="img-fluid" width="120">
                                     <p class="text-dark lh-1 fs-5 fw-medium">
                                        Velocidad <br>
                                        <span class="title-text fs-4 fw-bold">100 Mbps</span>
                                     </p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="border-color rounded-4 h-100">
                                <div class="p-4">
                                   <div class="text-center">
                                     <img src="/img/residencial/icono-residencial-2.png" alt="icon-signal" class="img-fluid" width="120">
                                     <p class="text-dark lh-1 fs-5 fw-medium">
                                        Gran <br>
                                        <span class="title-text fs-4 fw-bold">Estabilidad</span>
                                     </p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="border-color rounded-4 h-100">
                                <div class="p-4">
                                   <div class="text-center">
                                     <img src="/img/residencial/icono-residencial-3.png" alt="icon-signal" class="img-fluid" width="120">
                                     <p class="text-dark lh-1 fs-5 fw-medium">
                                        100% <br>
                                        <span class="title-text fs-4 fw-bold">Fibra Óptica</span>
                                     </p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
  		</div>
	</section>
	<section class="bg-plans py-5">
		<div class="container pt-lg-3 mt-lg-2">
			<div 
				class="text-center"
				v-motion-slide-visible-top
				:delay="200"
				:duration="1200"
			>
                <h4 class="display-6 resalt-text fw-semibold">Planes Residenciales</h4>
				<h2 class="text-uppercase display-1 fw-bold subtitle-text">
					INTERNET POR FIBRA ÓPTICA
				</h2>
			</div>
			<div class="row p-0 p-md-5 p-lg-4 g-5 m-0">
				<div v-for="plan in residencialData.plansInt" class="col-12 col-md-6 col-xl-4">
					<div class="card text-center border-color-card h-100 d-flex shadow">
						<div class="card-header fs-3 fw-bold">
							Plan {{ plan.nombre }}
						</div>
						<div class="card-body">
							<CountCircleMBPS :value="Number(plan.mbps)" />
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3 shadow">
									<img src="/img/inicio/icono-internet.png" alt="" class="mx-auto" width="25">
								</div>
								<div class="border icon-circle p-3 shadow">
									<img src="/img/inicio/icono-telefonia.png" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
									<img :src="plan.simetrico" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
									<img :src="plan.repetidor" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Internet + Telefonía</p>
							<h5 class="card-title subtitle-text display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p v-if="plan.wifi" class="card-text fs-4 m-0">{{plan.wifi}}</p>
							<p v-if="plan.repwifi" class="card-text fs-4 m-0">{{plan.repwifi}}</p>
							<p class="card-text fs-4">{{ plan.sub1 }} <span class="title-text fw-semibold">{{ plan.sub2 }}</span></p>
							<p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
							<p class="card-text fs-6 text-uppercase">USA|MEX|Canada</p>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p class="card-text fs-4 m-0">Pronto Pago</p>
							<h6 class="card-title subtitle-text display-5 fw-semibold">
								${{ plan.pago }}<small class="small fs-5">/Mensual</small>
							</h6>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<a href="#" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
						<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
							Folio ift: {{ plan.folioIFT }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <ExtComponent />    
	<InbtelAppComponent />
	<!-- <CovaregeMap /> -->
	<FooterComponent />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden !important;
}

html {
  overflow-x: hidden !important;
}

.container,
.container-fluid,
.row,
.col-12,
.col-md-6,
.col-xl-4 {
  max-width: 100vw !important;
  overflow-x: hidden !important;
}


.hero-residencial {
	background-image: url('/img/residencial/banner-residencial-1.png'); 
	background-size: cover; 
    background-position: center;
	min-height: 100vh;
}
.jumbotron-residencial {
	background-image: url('/img/residencial/fondo-residencial-1.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 50vh; /* valor base para XS */
}
.bg-plans {
  background-image: url('/img/inicio/fondo-inicio-6.png');
  background-size: cover; 
  min-height: 100vh; /* valor base para XS */
}
.width-text {
	max-width: 100%;
	margin: 0 auto;
}
.subtitle-text {
	color: #396E4B !important;
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
	border: 2px solid #396E4B !important;
}

.border-bottom-color {
	border-bottom: 2px solid #396E4B !important;
	width: 50% !important;
}

.border-color-card {
	border: 1px solid #396E4B;
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
	background-color: #396E4B;
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

@media (min-width: 1025px) and (max-width: 1439.98px) {
	.title-padding {
		padding-top: 0rem !important;	}
	
}

</style>