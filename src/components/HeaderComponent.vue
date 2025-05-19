<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="container-fluid">
    <nav :class="['navbar navbar-expand-lg fixed-top py-3', { scrolled: isScrolled }]">
      <div class="container-fluid container-xl">
        <a class="navbar-brand" href="#">
          <img class="logo" src="/img/logo-inbtel-blanco.webp" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list fs-1 color-burger"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Residencial</a></li>
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Gamer</a></li>
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Televisión</a></li>
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Negocios</a></li>
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Pymes</a></li>
            <li class="nav-item mx-xl-2"><a class="nav-link text-white" href="#">Empresarial</a></li>
            <li class="nav-item dropdown mx-xl-2">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oportunidades
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Distribuidor Autorizado</a></li>
                <li><a class="dropdown-item" href="#">Vendedor Comisionista</a></li>
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

.scrolled {
  background-color: #262937 !important;
}

.logo {
  height: 60px;
}

.navbar-nav .nav-link {
  font-weight: 400;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #95C83C !important;
  border: 1px solid #95C83C;
  border-radius: 3px;
}

.dropdown-menu {
  background-color: #262937;
}

.dropdown-item:hover {
  background-color: #2c2f3f;
  color: #95C83C;
}

.btn-nav{
  background-color: #95C83C;
  color: #ffffff;
}
.btn-nav:hover{
  color: #95C83C !important;
  border: 1px solid #95C83C;
}

.navbar-toggler {
  border: none !important;
}
.color-burger{
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
    background-color: #262937 !important;
    padding: 1rem;
  }
}
</style>

