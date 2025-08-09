<script setup lang="ts">

import { useDarkMode } from './composables/useDarkMode';


// Inicializa al cargar la app
useDarkMode();
</script>

<template>
	<router-view />
	
</template>

<style scoped>

</style>
