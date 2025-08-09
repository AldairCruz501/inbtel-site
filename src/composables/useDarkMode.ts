import { ref, onMounted, watch } from 'vue';

const THEME_KEY = 'user-theme';

export function useDarkMode() {
  const theme = ref<'light' | 'dark'>('light');

  // Detectar preferencia inicial
  function detectPreferredTheme(): 'light' | 'dark' {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  // Aplicar tema al <html>
  function applyTheme(newTheme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  }

  // Cambiar y guardar
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, theme.value);
    applyTheme(theme.value);
  }

  // Inicialización al montar
  onMounted(() => {
    theme.value = detectPreferredTheme();
    applyTheme(theme.value);
  });

  // Aplicar cambios si cambia el ref
  watch(theme, (newVal) => applyTheme(newVal));

  return {
    theme,
    toggleTheme,
  };
}
