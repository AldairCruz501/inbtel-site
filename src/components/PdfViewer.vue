<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const pdfPath = `/pdf/${route.meta.pdfFile}`
</script>

<template>
  <iframe
    :src="pdfPath"
    title="PDF Viewer"
    width="100%"
    height="100%"
    style="border: none; height: 100vh"
  ></iframe>
</template>