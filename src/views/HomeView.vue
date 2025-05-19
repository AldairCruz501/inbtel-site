<script setup lang="ts">
	import CovaregeMap from '../components/CovaregeMap.vue';
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent />
	<section id="carouselExampleIndicators" class="carousel slide">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="/img/banner-simetricos.jpg" class="img-fluid" alt="...">
			</div>
			<div class="carousel-item">
				<img src="/img/banners_1.jpg" class="img-fluid" alt="...">
			</div>
			<div class="carousel-item">
				<img src="/img/banners_2.jpg" class="img-fluid" alt="...">
			</div>
			<div class="carousel-item">
				<img src="/img/banners_3.jpg" class="img-fluid" alt="...">
			</div>
		</div>
	</section>
	<CovaregeMap />
	<FooterComponent />
</template>

<style scoped>
.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #95C83C; /* Color del círculo */
  opacity: 0.5;
  transition: opacity 0.3s;
}

.carousel-indicators .active {
  opacity: 1;
  background-color: #95C83C; /* Color del círculo activo */
}

</style>