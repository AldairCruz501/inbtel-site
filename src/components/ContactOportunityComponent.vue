
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'


const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  hasBusiness: ''
})

const wasValidated = ref(false)
const isLoading = ref(false)
const recaptchaSiteKey = '6LdWkpIrAAAAAOgHmxJxJpZUv0VwnjDKbgYOB72F' // tu clave pública de reCAPTCHA v3

const handleSubmit = async () => {
  wasValidated.value = true

  const formValid = Object.values(form.value).every(value => value.trim() !== '')
  const phoneValid = /^\d{10}$/.test(form.value.phone)
  const emailValid = /\S+@\S+\.\S+/.test(form.value.email)

  if (!formValid) {
    Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos.', 'warning')
    return
  }

  if (!emailValid) {
    Swal.fire('Correo inválido', 'Por favor, ingresa un correo válido.', 'warning')
    return
  }

  if (!phoneValid) {
    Swal.fire('Teléfono inválido', 'Ingresa un número de 10 dígitos.', 'warning')
    return
  }

  isLoading.value = true

  try {
    const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'submit' })

    const response = await axios.post('/form-handler.php', {
      ...form.value,
      'g-recaptcha-response': token
    })

    if (response.data.status === 'success') {
      Swal.fire('¡Enviado!', response.data.message, 'success')
      form.value = {
        name: '',
        email: '',
        phone: '',
        city: '',
        hasBusiness: ''
      }
      wasValidated.value = false
    } else {
      Swal.fire('Error', response.data.message, 'error')
    }

  } catch (error) {
    console.error('Error en envío:', error)
    Swal.fire('Error', 'Ocurrió un error inesperado al enviar el formulario.', 'error')
  } finally {
    isLoading.value = false
  }
}
</script>


<template>
  <div class="contact-wrapper p-4 text-white rounded">
    <h4 class="text-center mb-4 fw-bold fs-1 pt-4">CONTÁCTANOS</h4>

    <form novalidate :class="{ 'was-validated': wasValidated }" @submit.prevent="handleSubmit">
      <!-- Nombre -->
      <div class="mb-3">
        <input
          v-model="form.name"
          type="text"
          class="form-control input-lg"
          placeholder="Nombre"
          required
        />
        <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
      </div>

      <!-- Correo -->
      <div class="mb-3">
        <input
          v-model="form.email"
          type="email"
          class="form-control input-lg"
          placeholder="Correo"
          required
        />
        <div class="invalid-feedback">Ingresa un correo válido.</div>
      </div>

      <!-- Teléfono -->
      <div class="mb-3">
        <input
          v-model="form.phone"
          type="tel"
          class="form-control input-lg"
          placeholder="Teléfono"
          pattern="\d{10}"
          required
        />
        <div class="invalid-feedback">Ingresa un teléfono válido de 10 dígitos.</div>
      </div>

      <!-- Ciudad -->
      <div class="mb-3">
        <input
          v-model="form.city"
          type="text"
          class="form-control input-lg"
          placeholder="Ciudad"
          required
        />
        <div class="invalid-feedback">Ingresa el nombre de tu ciudad.</div>
      </div>

      <!-- Pregunta -->
      <div class="mb-3">
        <label class="form-label">
          ¿Cuenta con algún negocio o distribuye servicios de alguna marca actualmente?
        </label>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hasBusinessYes"
              value="sí"
              v-model="form.hasBusiness"
              required
              name="hasBusiness"
            />
            <label class="form-check-label" for="hasBusinessYes">Sí</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hasBusinessNo"
              value="no"
              v-model="form.hasBusiness"
              required
              name="hasBusiness"
            />
            <label class="form-check-label" for="hasBusinessNo">No</label>
          </div>
          <div class="invalid-feedback d-block" v-if="!form.hasBusiness && wasValidated">
            Selecciona una opción.
          </div>
        </div>
      </div>

      <p class="small text-white">
        Sus datos personales serán tratados de forma confidencial.
      </p>

      <!-- Botón -->
      <div class="d-grid mb-5">
        <button type="submit" class="btn btn-light">Enviar</button>
      </div>
    </form>

    <!-- Logo -->
    <div class="text-center py-5">
        <img src="/img/logo-blanco.png" alt="" class="img-fluid">
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  background: linear-gradient(to bottom, #376949, #00133E); /* fondo igual a la imagen */
  max-width: 400px;
  margin: auto;
  border-radius: 15px;
}
.input-lg {
  height: 3.5rem;
  font-size: 1rem;
}
</style>
