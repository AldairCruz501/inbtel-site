<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	// import CountCircleMBPS from '../components/CountCircleMBPS.vue';
	import InbtelAppComponent from '../components/InbtelAppComponent.vue';
	// import { pymeData } from '../data/pymes';

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
    <section class="hero-pymes d-none d-lg-flex align-items-center pt-5" v-if="!loading">
        <div class="container-fluid width-text">
            <div class="row pt-5"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200"
            >
                <div class="col-lg-6 text-uppercase">
                    <img src="/img/pymes/logo-pyme.png" alt="img" class="img-fluid">
                </div>
            </div>
        </div>
	</section>
    <section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/pymes/banner-pyme-2.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
	<section class="container-fluid bg-badge-info p-4">
        <div 
            class="text-center"
            div v-motion-fade-visible 
            :delay="200"
            :duration="1200"
        >
            <h1 class="display-4 text-white text-uppercase d-none d-md-block">
                Lleva tu negocio a otro nivel con los <span class="fw-bold fst-italic">Planes Pyme</span>
            </h1>
            <h1 class="display-5 text-white text-uppercase d-block d-md-none">
                Lleva tu negocio a otro nivel con los <span class="fw-bold fst-italic">Planes Pyme</span>
            </h1>
        </div>
    </section>
    <section class="jumbotron-pyme">
		<div class="container py-2" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="pt-5 pb-5 text-center">
				<h2 class="display-2 fw-semibold text-white mt-3">Ventajas Pyme</h2>
			</div>
			<div class="row g-4 pb-5">
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme1.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-4 pt-2 fw-bold text-white">
									Servicio Empresarial
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme2.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-4 pt-2 fw-bold text-white">
									Mayor velocidad y estabilidad
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme3.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-5 pt-2 fw-bold text-white">
									Tiempo de respuesta 24 a 48 hrs
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme4.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-4 pt-2 fw-bold text-white">
									Atención Personalizada
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme5.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-4 pt-2 fw-bold text-white">
									Fibra Óptica
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="border-color rounded-4 h-100">
						<div class="p-2">
							<div class="text-center">
								<img src="/img/pymes/icono_pyme6.png" alt="icon-signal" class="img-fluid" width="130">
								<p class="text-dark lh-1 fs-4 pt-2 fw-bold text-white">
									Línea Telefónica Ilimitada MEX|USA|CAN
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
  		</div>
	</section>
	<section class="m-0">
		<div class="row g-0 container-fluid">
			<div class="col-12 col-xl-6 bg-info-pyme text-white pt-5">
				<div class="p-5 mt-5"
					v-motion-slide-visible-left
					:delay="200"
					:duration="1200"
				>
					<h3 class="fw-semibold display-4 text-white pb-2">
						¿Quieres llevar tu Pyme al siguiente nivel?
					</h3>
					<div class="fs-4 text-white pb-1">
						<p class="m-0">
							Descubre las soluciones diseñadas especialmente para tu pyme.  
						</p>
						<p>
							Haz clic en el botón de abajo y conoce todos nuestros planes pensados para impulsar tu crecimiento.
						</p>
					</div>
					<div class="pt-2 pb-5">
						<a href="https://wa.link/w28bec" target="_blank" class="btn btn-info-pyme btn-lg rounded-pill px-4 fw-semibold">
							Saber Más
						</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-xl-6">
				<img src="/img/pymes/img-pyme.jpg" alt="img-electro" class="img-fluid">
			</div>
		</div>
	</section>
	<!-- <section class="bg-plans-gamer py-5">
		<div class="container pt-lg-3 mt-lg-2">
			<div 
				class="text-center"
				v-motion-slide-visible-top
				:delay="200"
				:duration="1200"
			>
                <h4 class="display-6 resalt-text fw-semibold text-uppercase">Paquetes Pymes</h4>
				<h2 class="display-1 fw-bold subtitle-text">
					Paquetes de Internet Pymes
				</h2>
			</div>
			<div class="row justify-content-xl-center p-0 p-md-5 p-lg-4 g-5 m-0">
				<div v-for="plan in pymeData.plansInt.slice(0,2)" class="col-12 col-lg-6 col-xl-4">
					<div class="card text-center border-color-card h-100 d-flex shadow">
						<div class="card-header fs-3 fw-bold">
							Plan {{ plan.nombre }}
						</div>
						<div class="card-body">
							<CountCircleMBPS :value="plan.mbps" color="#64B7D9" class="title-text" />
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3 shadow">
									<img src="/img/pymes/pyme-internet.png" alt="" class="mx-auto" width="25">
								</div>
								<div class="border icon-circle p-3 shadow">
									<img src="/img/pymes/pyme-tel.png" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
									<img :src="plan.simetrico" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
									<img :src="plan.repetidor" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Internet + Telefonía</p>
							<h5 class="card-title title-text display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p v-if="plan.wifi" class="card-text fs-4 m-0">{{plan.wifi}}</p>
							<p v-if="plan.repwifi" class="card-text fs-4 m-0">{{plan.repwifi}}</p>
							<p class="card-text fs-4">{{ plan.sub1 }} <span class="title-text fw-semibold">{{ plan.sub2 }}</span></p>
							<p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
							<p class="card-text fs-6 text-uppercase">USA|MEX|Canada</p>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<a href="https://wa.link/w28bec" target="_blank" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
						<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
							Folio ift: {{ plan.folioIFT }}
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-xl-center p-0 p-md-5 p-lg-4 g-5 m-0">
				<div v-for="plan in pymeData.plansInt.slice(2,4)" class="col-12 col-lg-6 col-xl-4">
					<div class="card text-center border-color-card h-100 d-flex shadow">
						<div class="card-header fs-3 fw-bold">
							Plan {{ plan.nombre }}
						</div>
						<div class="card-body">
							<CountCircleMBPS :value="plan.mbps" color="#64B7D9" class="title-text" />
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3 shadow">
									<img src="/img/pymes/pyme-internet.png" alt="" class="mx-auto" width="25">
								</div>
								<div class="border icon-circle p-3 shadow">
									<img src="/img/pymes/pyme-tel.png" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
									<img :src="plan.simetrico" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
									<img :src="plan.repetidor" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Internet + Telefonía</p>
							<h5 class="card-title title-text display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p v-if="plan.wifi" class="card-text fs-4 m-0">{{plan.wifi}}</p>
							<p v-if="plan.repwifi" class="card-text fs-4 m-0">{{plan.repwifi}}</p>
							<p class="card-text fs-4">{{ plan.sub1 }} <span class="title-text fw-semibold">{{ plan.sub2 }}</span></p>
							<p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
							<p class="card-text fs-6 text-uppercase">USA|MEX|Canada</p>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<a href="https://wa.link/w28bec" target="_blank" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
						<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
							Folio ift: {{ plan.folioIFT }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>    -->
    <section class="jumbotron-pyme-clients d-none d-lg-block">
		<div class="container py-2" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="pt-5 mt-5 text-center text-uppercase">
				<span class="display-6 fw-semibold lh-1" style="color: #023768;">Marcas que confían</span>
				<h2 class="display-1 fw-bold lh-1" style="color: #0061aa">
					 En Nosotros
				</h2>
			</div>
			<div class="row g-4 pb-5">
				<div class="col-12">
					<img src="/img/pymes/clientes_pymes.png" alt="" class="img-fluid">
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/pymes/clientes-pyme-2.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
	<!-- <CovaregeMap /> -->
	<InbtelAppComponent />
	<FooterComponent />
</template>

<style scoped>
.hero-pymes {
	background-image: url('/img/pymes/banner-pyme-1.png'); 
	background-size: cover; 
    background-position: center;
	min-height: 100vh;
}
.jumbotron-pyme {
	background-image: url('/img/pymes/fondo_pymes1.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 50vh; /* valor base para XS */
}
.bg-plans-gamer {
  background-image: url('/img/pymes/fondo_pymes2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  	min-height: 100vh; /* valor base para XS */
}
.jumbotron-pyme-clients {
	background-image: url('/img/pymes/fondo_pymes3.png'); 
    background-repeat: no-repeat;
	background-size: cover;
    background-position: center;
    min-height: 80vh; /* valor base para XS */
}
.bg-badge-info,
.bg-info-pyme {
	background-color: #1978A4;
}
.width-text {
	width: 90%;
}
.subtitle-text {
	color: #00A0B0 !important;
}
.title-text {
	color: #64B7D9 !important
}
.resalt-text {
    color: #14DE00!important
}
.logo-ideal {
	height: 60px;
}
.title-ideal {
	font-size: 8.5rem;
}

.btn-info-pyme {
	background-color: #64B7D9 !important;
	border-color: 1px solid	#64B7D9  !important;
	color: #ffffff !important;
}

.btn-info-pyme:hover {
	background-color: #ffffff !important;
	border-color: 1px solid	#64B7D9  !important;
	color: #64B7D9 !important;
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