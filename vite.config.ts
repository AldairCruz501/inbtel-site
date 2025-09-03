import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
    host: true, // habilita acceso en red local
    port: 5173  // opcional: definir el puerto fijo
  }
})
