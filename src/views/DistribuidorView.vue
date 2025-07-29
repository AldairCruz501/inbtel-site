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
					<h1 class="display-3 text-dark lh-1 fw-semibold">Distribuidor <span class="title-text">Autorizado</span></h1>
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
		<div class="row g-4 p-3 p-lg-0">
			<!-- Imagen lateral -->
			<div class="col-md-6 col-lg-4 p-0 h-100">
				<img src="/img/distribuidor/nosotros-distribuidor.png" alt="img-girl" class="img-fluid">
			</div>

			<!-- Contenido principal -->
			<div class="col-md-6 col-lg-8 p-0">
				<div class="h-100 mt-4 mt-lg-5">
					<div class="text-start">
						<h2 class="section-title text-color">
							¡Conviértete en <br class="lh-1">
							Distribuidor Autorizado!
						</h2>

						<p class="section-paragraph pt-3 text-dark">
							Si tienes experiencia en ventas y un equipo comprometido, esta es tu
							oportunidad para impulsar el crecimiento en tu comunidad, ofreciendo
							conectividad de calidad y comercializando nuestros servicios de:
						</p>

						<!-- Iconos de servicios -->
						<div class="d-flex justify-content-center justify-content-lg-start flex-wrap gap-3 pt-3">
							<div class="text-center" style="min-width: 100px;">
								<img src="/img/distribuidor/icono1-distribuidor.png" alt="icono-internet" class="img-fluid w-75">
								<div class="flex-column">
									<span class="section-icon-label title-text">Internet</span>
								</div>
							</div>

							<div class="text-center" style="min-width: 100px;">
								<img src="/img/distribuidor/icono2-distribuidor.png" alt="icono-telefonía" class="img-fluid w-75">
								<div class="flex-column">
									<span class="section-icon-label title-text">Telefonía</span>
								</div>
							</div>

							<div class="text-center" style="min-width: 100px;">
								<img src="/img/distribuidor/icono3-distribuidor.png" alt="icono-tv" class="img-fluid w-75">
								<div class="flex-column">
									<span class="section-icon-label title-text">Tv</span>
								</div>
							</div>
						</div>
						<!-- Fin iconos -->
					</div>
				</div>
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
			<div class="row g-3 pb-5">
				<div class="col-12 col-xl-7 text-justify">
					<div class="pt-5">
						<h3 class="text-color fw-semibold display-6 mt-5">¿Qué implica ser un Distribuidor Autorizado?</h3>
						<p class="fs-3 text-dark">
							Tendrás la oportunidad de vender nuestros paquetes con un
							modelo flexible y rentable, utilizando estrategias de cambaceo,
							redes sociales y puntos de venta.
						</p>
					</div>
					<div class="pt-3">
						<h3 class="text-color fw-semibold display-6">Nuestros servicios incluyen:</h3>
						<div class="d-flex align-content-center mt-3">
							<div class="me-3">
								<img src="/img/distribuidor/servicio1-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Internet de alta velocidad para <br>
									hogares y negocios.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio2-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Telefonía con llamadas ilimitadas <br>
									y beneficios exclusivos.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio3-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									TV con una amplia selección de <br>
									canales y contenido premium.
								</p>
							</div>
						</div>
					</div>
					<div class="pt-4">
						<h3 class="text-color fw-semibold display-6 text-start">Lo que te ofrecemos como Distribuidor INBTEL:</h3>
						<div class="d-flex align-content-center mt-3">
							<div class="me-3">
								<img src="/img/distribuidor/servicio4-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Atractivas comisiones y pagos <br>
									semanales.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio5-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Material publicitario y herramientas <br>
									de apoyo.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio6-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Capacitación constante y asesoría <br>
									especializada.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio7-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Seguimiento y soporte para optimizar <br>
									tus ventas.
								</p>
							</div>
						</div>
						<div class="d-flex align-content-center mt-4">
							<div class="me-3">
								<img src="/img/distribuidor/servicio8-distribuidor.png" alt="" class="img-fluid" width="80">
							</div>
							<div class="h-100 pt-2">
								<p class="text-dark fs-5">
									Acceso a una plataforma de gestión <br>
									para facilitar tu operación.
								</p>
							</div>
						</div>												
					</div>
					<div class="pt-4">
						<h3 class="text-color fw-semibold display-6 text-start">Requisitos para unirte:</h3>
						<ul class="list-unstyled fs-5 text-dark">
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Habilidad en ventas y experiencia en negocios.</li>
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Contar con un equipo de al menos 5 vendedores.</li>
							<li><i class="bi bi-check-lg fs-5 resalt-text mx-3"></i>Documentación en regla: Cédula fiscal, INE y comprobante de domicilio.</li>
						</ul>											
					</div>						
				</div>
				<div class="col-12 col-xl-5 d-flex">
					<ContactOportunityComponent/>
				</div>
				<div class="mt-5 text-center">
					<h2 class="fw-bold display-2 text-color text-uppercase">
						¡No dejes pasar esta oportunidad!
					</h2>
				</div>
			</div>
  		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
.hero-distribuidor {
	background-image: url('/img/distribuidor/banner-distribuidor.png'); 
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

/* Escala de títulos */
.section-title {
	font-weight: 600;
	line-height: 1.2;
	font-size: 2rem; /* base móvil */
}

.section-paragraph {
	font-size: 1rem;
}

.section-icon-label {
	font-size: 1.125rem;
	font-weight: 600;
}

/* A partir de LG (≥992px), mantenemos tamaños grandes */
@media (min-width: 992px) {
	.section-title {
		font-size: 4.5rem; /* equivalente a display-1 */
	}
	.section-paragraph {
		font-size: 2rem; /* equivalente a fs-2 */
	}
	.section-icon-label {
		font-size: 1.75rem; /* equivalente a fs-3 */
	}
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
	color: #00A0B0 !important;
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
</style>