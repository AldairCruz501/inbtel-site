<script setup lang="ts">
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import InbtelAppComponent from '../components/InbtelAppComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	import TVProgramming from '../components/TVProgramming.vue';

	
</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="hero-main d-none d-lg-flex align-items-center pt-5">
		<div class="container-fluid width-text">
			<div class="row pt-5">
				<div class="col-lg-6 text-uppercase">
					<span class="display-6 fw-bold lh-1 m-0 television-text">Television hd</span>
					<h2 class="display-4 subtitle-text fw-bold lh-1 m-0 p-0">Disfruta tus</h2>
					<h1 class="fw-bold title-text text-title lh-1 m-0">Canales</h1>
					<span class="title-text text-subtitle fw-bold mt-0 pt-0">Favoritos</span>
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/television/banner-tv-2.jpeg" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
		</div>
	</section>
    <section class="jumbotron-main">
		<div class="container py-5">
			<div class="row pt-5 mt-5">
				<div class="col-12 pt-5 mt-4 text-white text-center text-uppercase">
                    <h4 class="fw-bold fs-2 m-0 lh-1">Televisión exclusiva para clientes Inbtel</h4>
					<h2 class="fw-bold display-1 m-0 lh-1">Vive el cine en tu hogar</h2>
					<h4 class="fw-bold display-2 m-0 lh-1">Desde $149/<span class="text-capitalize">mes</span></h4>
				</div>
			</div>
  		</div>
	</section>
	<section class="bg-plans py-5">
		<TVProgramming />
	</section>
	<InbtelAppComponent />
	<!-- <CovaregeMap /> -->
	<FooterComponent />
</template>

<style scoped>
.hero-main {
	background-image: url('/img/television/banner-tv-1.png'); 
	background-size: cover; 
	min-height: 100vh;
}
.jumbotron-main {
	background-image: url('/img/television/fondo-television.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 70vh; /* valor base para XS */
}
.bg-plans {
  background-image: url('/img/television/fondo-canales.png');
  background-size: cover; 
  min-height: 100vh; /* valor base para XS */
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
.text-title {
	font-size: 110px;
}
.text-subtitle {
	font-size: 95px;
	margin: 0px !important;
	line-height: 1 !important;
	padding: 0px !important;
}
.television-text {
	color: #6ACAAC !important;
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

.contenedor-info {
	width: 90% !important;
}


.bg-porta .img-porta {
  max-width: 100%;
  height: auto;
}

@media (max-width: 991.98px) {
	.title-ideal {
		font-size: 6.5rem;
	}
}

@media (max-width: 768px) {
  .bg-porta .fondo {
    padding: 2rem 1rem;
  }

  .bg-porta .row.align-items-center {
    text-align: center;
  }

  .bg-porta .col-md-6 img {
    margin-bottom: 1rem;
  }
}

@media (max-width: 575.98px) {
	.title-ideal {
		font-size: 4.5rem;
	}
}
</style>