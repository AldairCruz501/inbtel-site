<script setup>
    import { ref, onMounted } from 'vue'
    import FooterComponent from '../components/FooterComponent.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import LoaderComponent from '../components/LoaderComponent.vue';
    import PlanesSwiper from '../components/PlanesSwiper.vue';
    import PlanesSwiperTrip from '../components/PlanesSwiperTrip.vue';
    import InbtelAppComponent from '../components/InbtelAppComponent.vue';
    import { planesNegocios } from '../data/negocios'; 
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
    <section class="hero-main d-none d-lg-flex align-items-center pt-5"  v-if="!loading">
        <div class="container-fluid width-text">
            <div class="row pt-5"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200"
            >
                <div class="col-lg-6 text-uppercase">
                    <img src="/img/negocios/logo-negocios.png" alt="img" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
    <section class="hero-residencial-responsive d-block d-lg-none p-0">
		<div class="container-fluid p-0">
			<img src="/img/negocios/banner-negocio-2.png" alt="Banner Residencial" class="img-fluid w-100 h-auto d-block mx-auto">
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
                Tu emprendimiento <span class="fw-bold fst-italic">sin límites</span> siempre conectado
            </h1>
            <h1 class="display-5 text-white text-uppercase d-block d-md-none">
                Tu emprendimiento <span class="fw-bold fst-italic">sin límites</span> siempre conectado
            </h1>
        </div>
    </section>
    <section class="jumbotron-negocios">
        <div class="container py-4">
            <div 
                class="text-center mb-4"
                div v-motion-fade-visible 
            :delay="200"
            :duration="1200"
            >
                <h2 class="display-4 text-uppercase title-color fw-semibold">
                    Aprovecha y selecciona un adicional
                </h2>
                <p class="display-4">3 Meses <span class="text-uppercase fw-semibold">Gratis</span></p>
            </div>
            
            <div class="row g-4 justify-content-center">
            <!-- Tarjeta 1 -->
            <div class="col-12 col-lg-4 d-flex justify-content-center">
                <div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100" style="max-width: 350px;">
                <div class="p-5 p-md-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="/img/negocios/icono-clip.png" alt="icon-signal" class="img-fluid mb-3" width="130">
                    <p class="text-dark lh-1 fs-4 fw-semibold">
                        Terminal Clip
                    </p>
                </div>
                </div>
            </div>

            <!-- Tarjeta 2 -->
            <div class="col-12 col-lg-4 d-flex justify-content-center">
                <div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100" style="max-width: 350px;">
                <div class="p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="/img/negocios/icono-wifi.png" alt="icon-signal" class="img-fluid mb-3" width="140">
                    <p class="text-dark lh-1 fs-4 fw-semibold">
                        WiFi Extender
                    </p>
                </div>
                </div>
            </div>

            <!-- Tarjeta 3 -->
            <div class="col-12 col-lg-4 d-flex justify-content-center">
                <div class="shadow rounded-4 ratio ratio-4x3 w-100 h-100" style="max-width: 350px;">
                <div class="p-3 p-md-4 d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="/img/negocios/icono-telefono.png" alt="icon-signal" class="img-fluid mb-3" width="100">
                    <p class="text-dark lh-1 fs-4 fw-semibold">
                        Línea Telefónica +<br>
                        WhatsApp Empresarial
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section class="bg-plans-negocios py-5 position-relative">
        <div class="container-fluid pt-lg-3 mt-lg-2 position-relative">
        <div 
            class="text-center"
            v-motion-slide-visible-top
            :delay="200"
            :duration="1200"
        >
            <h2 class="text-uppercase display-1 fw-bold title-color">
            Paquetes de Internet
            </h2>
            <h4 class="display-6 fw-semibold subtitle-color">Paquetes Negocios</h4>
        </div>
            <PlanesSwiper
                :plans="planesNegocios.plansNegNorm"
                img-src="/img/negocios/logo-dobleplay.png"
                img-alt="Paquetes Doble Play"
            />
            <PlanesSwiperTrip
                :plans="planesNegocios.plansNegEntr"
                img-src="/img/negocios/logo-tripleplay.png"
                img-alt="Paquetes Triple Play"             
            />
        </div>
    </section>
    <InbtelAppComponent />
    <FooterComponent />
</template>

<style scoped>
.hero-main {
	background-image: url('/img/negocios/banner-negocio-1.png'); 
	background-size: cover;
    background-repeat: no-repeat; 
	min-height: 100vh;
}
.jumbotron-negocios {
	background-image: url('/img/negocios/fondo-negocio-1.png'); 
    background-repeat: no-repeat;
    background-position: center;
    min-height: 50vh; /* valor base para XS */
}
.bg-plans-negocios {
  background-image: url('/img/negocios/fondo-paquetes.png');
   background-position: center; 
  background-repeat: no-repeat;
  min-height: 100vh; /* valor base para XS */
}

.bg-badge-info {
    background-color: #D73D5D;
}

.title-color {
    color: #F27900 !important;
}

.subtitle-color {
    color: #D73D5D !important;
}

.width-text {
	width: 90%;
}
</style>
