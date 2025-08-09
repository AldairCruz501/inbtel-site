<!-- src/components/DarkModeToggle.vue -->
<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';

useDarkMode

const { theme, toggleTheme } = useDarkMode();
</script>

<template>
  <button class="btn btn-sm btn-outline-secondary" @click="toggleTheme">
    <span v-if="theme === 'light'">🌙 Modo oscuro</span>
    <span v-else>☀️ Modo claro</span>
  </button>
</template>
