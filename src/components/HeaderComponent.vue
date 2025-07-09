<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  const navbarCollapse = document.getElementById('navbarNav')

  if (navbarCollapse) {
    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      isMenuOpen.value = true
    })

    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      isMenuOpen.value = false
    })
  }

  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10
  })
})


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 👉 Se evalúa el scroll actual al cargar
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="container-fluid">
    <nav :class="['navbar navbar-expand-lg fixed-top py-3 d-none d-lg-block', { scrolled: isScrolled }]">
      <div class="container-fluid container-xl">
        <router-link class="navbar-brand" to="/">
          <img class="logo" src="/img/logo-color.png" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list fs-1 color-burger"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center fw-bold">
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/residencial'">Residencial</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/gamer'">Gamer</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/television'">Televisión</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/negocios'">Negocios</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/pymes'">Pymes</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/empresarial'">Empresarial</router-link></li>
            <li class="nav-item dropdown mx-xl-2">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oportunidades
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><router-link class="dropdown-item fw-bold" :to="'/distribuidor-autorizado'">Distribuidor Autorizado</router-link></li>
                <li><router-link class="dropdown-item fw-bold" :to="'/vendedor-comisionista'">Vendedor Comisionista</router-link></li>
              </ul>
            </li>
            <li class="nav-item mx-xl-2">
              <a class="btn btn-nav px-3" href="#">Mi Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav :class="['navbar navbar-expand-lg py-2 fixed-top d-block d-lg-none', { scrolled: isScrolled || isMenuOpen }]">
      <div class="container-fluid container-xl">
        <router-link class="navbar-brand" to="/">
          <img src="/img/logo-color.png" alt="logo" height="50">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list fs-1 color-burger"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center fw-bold">
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/residencial'">Residencial</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/gamer'">Gamer</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/television'">Televisión</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/negocios'">Negocios</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/pymes'">Pymes</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link text-white" :to="'/empresarial'">Empresarial</router-link></li>
            <li class="nav-item dropdown mx-xl-2">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oportunidades
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><router-link class="dropdown-item fw-bold" :to="'/distribuidor-autorizado'">Distribuidor Autorizado</router-link></li>
                <li><router-link class="dropdown-item fw-bold" :to="'/vendedor-comisionista'">Vendedor Comisionista</router-link></li>
              </ul>
            </li>
            <li class="nav-item mx-xl-2">
              <a class="btn btn-nav px-3" href="#">Mi Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background: transparent;
  transition: background-color 0.4s ease-in-out;
}

.navbar {
  background-color: transparent;
  transition: background-color 0.4s ease;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}


.scrolled{
  background-color: #FFFFFF !important;
}

.logo {
  height: 65px;
}

.navbar-nav .nav-link {
  transition: color 0.3s ease;
  color: #396E4B !important;
}

.navbar-nav .nav-link:hover {
  color: #95C83C !important;
  border: 1px solid #95C83C;
  border-radius: 3px;
}

.dropdown-menu {
  background-color: #ffffff !important;
}

.dropdown-item {
  background-color: #ffffff;
  color: #396E4B;
}


.dropdown-item:hover {
  background-color: #ffffff;
  color: #95C83C;
}

.btn-nav {
  background-color: #6ACAAC;
  color: #ffffff;
}

.btn-nav:hover {
  color: #6ACAAC !important;
  border: 1px solid #6ACAAC;
}

.navbar-toggler {
  border: none !important;
}

.color-burger {
  color: #95C83C !important;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .logo {
    height: 45px;
  }
}

@media (max-width: 991.98px) {
  .navbar-nav,
  nav {
    padding: 1rem;
  }
}
</style>
