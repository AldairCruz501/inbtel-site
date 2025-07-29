<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	import ContactOportunityComponent from '../components/ContactOportunityComponent.vue';
	

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
    <section class="hero-distribuidor d-flex align-items-center pt-5" v-if="!loading">
        <div class="container-fluid width-text">
            <div class="row pt-5 justify-content-center justify-content-lg-start"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200"
            >
                <div class="col-lg-6 text-capitalize">
					<h1 class="display-4 text-dark lh-1 fw-semibold">Vendedor <span class="title-text">Comisionista</span></h1>
                    <img src="/img/logo-color.png" alt="img" class="img-fluid mx-auto" style="width: 90%;">
                </div>
            </div>
        </div>
	</section>
    <section class="bg-white">
		<div class="container-fluid py-3" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="row g-4 p-4 p-xl-0">
				<div class="col-xl-8 p-0">
					<div class="h-100">
						<div class="mt-5 ms-xl-5">
							<div class="text-justify">
								<h2 class="title-text fw-semibold display-3">
									¡Únete al equipo de <br class="lh-1">
									<span class="display-1 fw-semibold">Vendedores Online INBTEL!</span>
								</h2>
								<h3 class="fw-semibold display-5 subtitle-text">
									¿Te gustaría ganar dinero vendiendo Internet,
									Telefonía y TV sin salir de casa?
								</h3>
								<p class="pt-3 fs-2 text-dark">
									Conviértete en Vendedor Online INBTEL y aprovecha
									esta gran oportunidad. Lleva conectividad de
									calidad a tu comunidad y genera ingresos
									comercializando nuestros servicios.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 p-0 h-100">
					<img src="/img/vendedor/nosotros-vendedor.png" alt="img-girl" class="img-fluid">
				</div>
			</div>
  		</div>
	</section>  
    <section class="jumbotron-dist-contact">
		<div class="container-fluid py-2 width-text" 
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="row flex-lg-row-reverse fle g-3 pb-5">
				<div class="col-12 col-xl-7 text-justify">
					<div class="pt-5">
						<h3 class="text-color fw-semibold display-6 mt-5">¿En qué consiste ser Vendedor Online INBTEL?</h3>
						<p class="fs-3 text-dark">
							Tendrás la oportunidad de vender paquetes de Internet,
							Telefonía y TV de INBTEL a través de redes sociales, mensajes,
							llamadas y plataformas digitales, sin necesidad de salir de casa.
						</p>
					</div>
					<div class="pt-3">
						<h3 class="text-color fw-semibold display-6">¿Por qué ser Vendedor Online INBTEL?</h3>
						<div class="d-flex align-content-center mt-3">
							<div class="me-3">
								<img src="/img/vendedor/servicio1-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Trabaja desde cualquier lugar <br>
									con total flexibilidad.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/vendedor/servicio2-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Tus ingresos dependen de tu <br>
									esfuerzo, sin límites.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/vendedor/servicio3-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Vende productos de alta demanda en <br>
									el mercado de telecomunicaciones.
								</p>
							</div>
						</div>
					</div>
					<div class="pt-4">
						<h3 class="text-color fw-semibold display-6 text-start">¿Qué te ofrecemos?</h3>
						<div class="d-flex align-content-center mt-3">
							<div class="me-3">
								<img src="/img/vendedor/servicio4-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Capacitación constante en estrategias <br>
									de ventas digitales.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/vendedor/servicio5-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Excelentes comisiones y pagos <br>
									semanales.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/vendedor/servicio6-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Respaldo de una marca consolidada <br>
									con cobertura en la región.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/vendedor/servicio7-vendedor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Material publicitario y herramientas <br>
									para mejorar tu alcance.
								</p>
							</div>
						</div>											
					</div>
					<div class="pt-4">
						<h3 class="text-color fw-semibold display-6 text-start">Requisitos para unirte:</h3>
						<ul class="list-unstyled fs-5 text-dark">
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Experiencia en ventas digitales, atención al cliente o redes sociales.</li>
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Habilidad para la comunicación y persuasión.</li>
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Contar con equipo de cómputo o smartphone con acceso a internet.</li>
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Documentación en regla (INE, comprobante de domicilio, etc.).</li>
						</ul>											
					</div>						
				</div>
				<div class="col-12 col-xl-5 d-flex">
					<ContactOportunityComponent/>
				</div>
				<div class="mt-5 text-center">
					<h2 class="fw-bold display-5 text-color text-uppercase">
						¡Únete ahora y comienza a generar ingresos con inbtel!
					</h2>
				</div>
			</div>
  		</div>
	</section>
	    <section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/pymes/clientes-pyme-2.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
.hero-distribuidor {
	background-image: url('/img/vendedor/banner-vendedor.png'); 
	background-size: cover; 
    background-position: center;
	min-height: 100vh;
}
.jumbotron-distribuidor {
	background-image: url('/img/pymes/fondo_pymes1.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 50vh; /* valor base para XS */
}
.jumbotron-dist-contact {
	background-image: url('/img/distribuidor/fondo-distribuidor.png'); 
    background-repeat: no-repeat;
    min-height: 150vh; /* valor base para XS */
}
.text-justify {
	text-align: justify !important;
}
.bg-badge-info {
	background-color: #1978A4;
}
.width-text {
	width: 90%;
}
.subtitle-text {
	color: #00133E !important;
}
.title-text,
.text-color {
	color: #396E4B !important
}
.resalt-text {
    color: #7AD100 !important
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