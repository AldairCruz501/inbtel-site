<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
    import InbtelAppComponent from '../components/InbtelAppComponent.vue';
    import axios from 'axios'
    import Swal from 'sweetalert2'

	

	const loading = ref(true)
	onMounted(() => {
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			loading.value = false
			document.body.style.overflow = ''
		}, 3000)
	})

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  subject: '',
  message: '',
  client: ''
})

const handleSubmit = async () => {
  const isValid = Object.values(form.value).every(value => value.trim() !== '')
  const phoneValid = /^\d{10}$/.test(form.value.phone)
  const emailValid = /\S+@\S+\.\S+/.test(form.value.email)

  if (!isValid || !phoneValid || !emailValid) {
    Swal.fire('Error', 'Por favor completa todos los campos correctamente.', 'error')
    return
  }

  const token = await (window as any).grecaptcha.execute('TU_CLAVE_RECAPTCHA_V3', { action: 'submit' })

  const formData = new FormData()
  Object.entries(form.value).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append('g-recaptcha-response', token)

  try {
    const res = await axios.post('https://inbtel.com/contacto/prueba-contacto.php', formData)
    if (res.data.status === 'success') {
      Swal.fire('¡Éxito!', res.data.message, 'success')
      form.value = { name: '', email: '', phone: '', address: '', subject: '', message: '', client: '' }
    } else {
      Swal.fire('Error', res.data.message, 'error')
    }
  } catch (err) {
    console.error(err)
    Swal.fire('Error', 'Ocurrió un error al enviar el formulario.', 'error')
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?render=6LdWkpIrAAAAAOgHmxJxJpZUv0VwnjDKbgYOB72F'
  document.head.appendChild(script)
})

</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
    <section class="hero-contacto align-items-center pt-5" v-if="!loading">
        <div class="container-fluid width-text">
            <div class="row pt-5 mt-5"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200"
            >
                <div class="col-lg-6 text-capitalize mt-5">
					<h1 class="title-size subtitle-text fw-semibold mb-3">¡Contáctanos!</h1>
                    <img src="/img/logo-color.png" alt="img" class="img-fluid mx-auto" style="width: 60%;">
                </div>
            </div>
        </div>
	</section>
    <section class="bg-contact-main py-5">
    <div class="pt-2 pb-5 text-center container">
      <h2 class="fw-bold display-1 text-color">
        ¡Contáctanos aquí!
      </h2>
      <p class="fs-3 text-dark fw-semibold">
        Nuestro personal está listo para atender tus solicitudes, si requieres ayuda
        más rápida te compartimos nuestros datos de contacto: <span class="resalt-text">833 526 0000</span>
      </p>
    </div>
    <div class="container-fluid width-text rounded-1 shadow p-5">
      <div class="row g-5 p-lg-5">
        <div class="col-12 col-xl-6">
          <form @submit.prevent="handleSubmit" novalidate>
            <div class="row g-3 mb-3">
              <div class="col-12">
                <label class="form-label fw-bold fs-5 subtitle-text">¿Eres cliente Inbtel?</label>
                <br>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="Sí" v-model="form.client" id="clientYes" />
                  <label class="form-check-label" for="clientYes">Sí</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="No" v-model="form.client" id="clientNo" />
                  <label class="form-check-label" for="clientNo">No</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="text" class="form-control rounded-0 border-color form-control-lg input-height" v-model="form.name" placeholder="Nombre completo" required />
                  <label class="text-color">Nombre completo</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control rounded-0 border-color form-control-lg input-height" v-model="form.email" placeholder="Correo electrónico" required />
                  <label class="text-color">Correo Electrónico</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="tel" class="form-control rounded-0 border-color form-control-lg input-height" v-model="form.phone" placeholder="Número de contacto" required />
                  <label class="text-color">Número de contacto</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control rounded-0 border-color form-control-lg input-height" v-model="form.address" placeholder="Dirección" required />
                  <label class="text-color">Dirección</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <select v-model="form.subject" class="form-select rounded-0 border-color form-control-lg input-height" required>
                    <option value="" disabled>Escoge una opción...</option>
                    <option value="Contratar internet">Contratar internet</option>
                    <option value="Solicitud tarjeta OXXO">Solicitud tarjeta OXXO</option>
                    <option value="Cuenta Inbtel APP">Cuenta Inbtel APP</option>
                    <option value="Reporte o Falla">Reporte o Falla</option>
                    <option value="Facturación">Facturación</option>
                    <option value="Sugerencias">Sugerencias</option>
                  </select>
                  <label class="text-color">Asunto</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea class="form-control rounded-0 border-color form-control-lg input-height" v-model="form.message" placeholder="Mensaje" style="height: 130px" required></textarea>
                  <label class="text-color">Mensaje</label>
                </div>
              </div>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
          </form>
        </div>
        <div class="col-12 col-xl-6">
          <img src="/img/contacto/formulario-contacto.png" alt="Familia conectada" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <InbtelAppComponent />
	<FooterComponent />
</template>

<style scoped>
.hero-contacto {
	background-image: url('/img/contacto/banner-contacto.png'); 
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
.title-size {
    font-size: 7rem !important;
}
.text-justify {
	text-align: justify !important;
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
.border-color {
	border: 2px solid #396E4B !important;
}
.border-bottom-color {
	border-bottom: 2px solid #396E4B !important;
	width: 50% !important;
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

</style>