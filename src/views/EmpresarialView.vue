<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	import InbtelAppComponent from '../components/InbtelAppComponent.vue';


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
	<section class="hero-pymes d-flex d-lg-block align-items-center" v-if="!loading">
		<div class="container-fluid width-text">
			<div 
			class="row justify-content-start my-5"
			v-motion-slide-visible-left
			:delay="200"
			:duration="1200"
			>
				<div class="col-12 col-sm-10 col-md-8 col-lg-6 text-uppercase py-5 my-5">
					<span class="text-subtitle d-block fw-semibold lh-1">Internet</span>
					<h1 class="text-title fw-bold lh-1">Empresarial</h1>
				</div>
			</div>
		</div>
	</section>
	<section id="ventajas" class="container-fluid bg-advantage p-4">
        <div 
            class="text-center"
            div v-motion-fade-visible 
            :delay="200"
            :duration="1200"
        >
            <h2 class="display-3 subtitle-text fw-bold d-none d-md-block">
                Ventajas del Internet Empresarial
            </h2>
            <h2 class="display-4 subtitle-text fw-bold text-uppercase d-block d-md-none">
                Ventajas del Internet Empresarial
            </h2>
        </div>
		<div class="row g-3 my-2 mx-auto">
			<div class="col-12 col-xl-4">
				<img src="/img/empresarial/ventajas.png" alt="img-ventajas" class="img-fluid">
			</div>
			<div class="col-12 col-xl-8">
				<div class="mb-3">
					<p class="fs-1">
						En Inbtel, sabemos que tu negocio necesita una
						conexión rápida y confiable. Por eso, ofrecemos
						internet empresarial con soluciones que se adaptan
						a tus necesidades.
					</p>
				</div>
				<div class="container my-4">
					<div class="row g-3">
						<div class="col-md-6 fs-4">
							<p><i class="bi bi-check2-circle title-text me-2"></i><strong>Internet por Fibra Óptica</strong></p>
							<p><i class="bi bi-check2-circle title-text me-2"></i><strong>Disponibilidad 24/7</strong></p>
							<p><i class="bi bi-check2-circle title-text me-2"></i><strong>Optimización de costos</strong></p>
							</div>
							<div class="col-md-6 fs-4">
							<p><i class="bi bi-check2-circle title-text me-2"></i><strong>Red dedicada, no compartida</strong></p>
							<p><i class="bi bi-check2-circle title-text me-2"></i><strong>Monitorea tu tráfico en tiempo real</strong></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-3 mb-lg-5">
			<div class="row g-5 justify-content-center">
				<!-- Tarjeta 1 -->
				<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100">
						<div class="p-3 d-flex flex-column align-items-center justify-content-center text-center">
							<img src="/img/empresarial/icono-empresarial1.png" alt="icon-signal" class="img-fluid mb-3" width="150">
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps Simétrico
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100">
						<div class="p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
							<img src="/img/empresarial/icono-empresarial2.png" alt="icon-signal" class="img-fluid mt-2 mb-3" width="180">
							<p class="text-dark lh-1 fs-4 fw-semibold">
								IP Fija
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100">
						<div class="p-3 d-flex flex-column align-items-center justify-content-center text-center">
							<img src="/img/empresarial/icono-empresarial3.png" alt="icon-signal" class="img-fluid mb-3" width="130">
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Llamadas Mundiales
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100">
						<div class="p-3 p-md-4 d-flex flex-column align-items-center justify-content-center text-center">
							<img src="/img/empresarial/icono-empresarial4.png" alt="icon-signal" class="img-fluid mb-3" width="160">
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Instalación Rápida
							</p>
						</div>
					</div>
				</div>
			</div>		
		</div>
    </section>
    <section class="jumbotron-pyme">
		<div class="container-fluid py-2" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="row g-4 pb-5">
				<div class="col-lg-6 pt-3 pt-md-4 pt-lg-5 mt-lg-5 ms-lg-4">
					<h2 class="display-3 fw-bold text-white">
						¡Consulta a un especialista!
					</h2>
					<p class="fs-2 text-white">
						Nuestro equipo de expertos está listo para ayudarte
						a elegir la mejor opción según las necesidades de
						tu empresa.
					</p>
					<button class="btn btn-contact btn-lg fw-bold">Contactar</button>
				</div>
			</div>
  		</div>
	</section>
	<section class="container-fluid bg-company p-4">
        <div 
            class="text-center mt-5"
            div v-motion-fade-visible 
            :delay="200"
            :duration="1200"
        >
            <h3 class="display-4 fw-semibold d-none d-md-block">
                Proporcionamos a tu empresa una conexción
				segura, initerrumpida y de alta velocidad
            </h3>
            <h3 class="display-5 subtitle-text fw-semibold text-uppercase d-block d-md-none">
                Proporcionamos a tu empresa una conexción
				segura, initerrumpida y de alta velocidad
            </h3>
        </div>
		<div class="container mt-5 mb-3 mb-lg-5">
			<div class="row g-5 justify-content-center">
				<!-- Tarjeta 1 -->
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">80</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">150</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">200</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 p-md-4 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">300</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 p-md-4 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">600</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
					<div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100 bg-white border-color-green">
						<div class="p-3 p-md-4 d-flex flex-column align-items-center justify-content-center text-center">
							<h4 class="subtitle-text mt-2 mb-1 fw-bold display-5">1000</h4>
							<p class="text-dark lh-1 fs-4 fw-semibold">
								Mbps
							</p>
						</div>
					</div>
				</div>
			</div>		
		</div>
    </section>  
    <section class="jumbotron-pyme-clients d-none d-lg-block">
		<div class="container py-2" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="pt-5 mt-5 text-center text-uppercase">
				<span class="display-6 fw-semibold lh-1 subtitle-text">Cartera de</span>
				<h2 class="display-2 fw-bold lh-1 title-text">
					Clientes
				</h2>
			</div>
			<div class="row g-4 pb-5">
				<div class="col-12">
					<img src="/img/empresarial/clientes-empresarial.png" alt="" class="img-fluid">
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/empresarial/clientes-empresarial.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
	<!-- <CovaregeMap /> -->
	<InbtelAppComponent />
	<FooterComponent />
</template>

<style scoped>
.hero-pymes {
  background-image: url('/img/empresarial/banner-empresaria-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #fff;
}

.bg-advantage {
	background-image: url('/img/empresarial/fondo-empresarial1.5.png'); 
    background-repeat: no-repeat;
    min-height: 50vh;
}
.jumbotron-pyme {
	background-image: url('/img/empresarial/fondo-empresarial.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 50vh; /* valor base para XS */
}
.bg-company {
	background-image: url('/img/empresarial/fondo-empresarial1.png'); 
    background-repeat: no-repeat;
	background-size: cover;
    background-position: center;
    min-height: 50vh;
}
.jumbotron-pyme-clients {
	background-image: url('/img/empresarial/fondo-empresarial2.png'); 
    background-repeat: no-repeat;
	background-size: cover;
    background-position: center;
    min-height: 80vh; /* valor base para XS */
}

.text-title {
	color: #7AD100 !important;
	font-size: 3rem;
}
.text-subtitle {
	font-size: 2.5rem;
	color: #396E4B !important;
}

@media (max-width: 575.98px) {
  .text-subtitle {
    font-size: 1.75rem;
  }
  .text-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .text-subtitle {
    font-size: 2rem;
  }
  .text-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .text-subtitle {
    font-size: 2.25rem;
  }
  .text-title {
    font-size: 2.75rem;
  }
}

@media (min-width: 992px) {
  .text-subtitle {
    font-size: 3.5rem;
  }
  .text-title {
    font-size: 4rem;
  }
}

@media (min-width: 1200px) {
  .text-subtitle {
    font-size: 4.25rem;
  }
  .text-title {
    font-size: 5.25rem;
  }
}

@media (min-width: 1400px) {
  .text-subtitle {
    font-size: 5rem;
  }
  .text-title {
    font-size: 6.5rem;
  }
}

.title-size {
	font-size: 7rem;
	width: auto !important;
}

.bg-badge-info {
	background-color: #1978A4;
}
.width-text {
	width: 90%;
}
.subtitle-text {
	color: #396E4B !important;
}
.title-text {
	color: #7AD100 !important
}
.logo-ideal {
	height: 60px;
}
.title-ideal {
	font-size: 8.5rem;
}

.border-color-green {
	border: 1px solid #396E4B !important;
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
	border-bottom: 2px solid #64B7D9 !important;
	width: 50% !important;
}

.border-color-card {
	border: 1px solid #64B7D9;
}

.btn-contact {
	background-color: #FFFFFF !important;
	color: #396E4B;
	border: 1px solid	#FFFFFF !important;
}

.btn-contact:hover {
	background-color: #396E4B !important;
	color: #FFFFFF;
	border: 1px solid	#FFFFFF !important;
}

.btn-primary {
	background-color: #64B7D9 !important;
	color: #FFFFFF;
	border: 1px solid	#64B7D9 !important;
}

.btn-primary:hover {
	background-color: #ffffff !important;
	border: 1px solid	#64B7D9 !important;
	color: #64B7D9
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
	background-color: #64B7D9;
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

</style>