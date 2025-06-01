<template>
  <div id="tawk-chat-container"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const TAWK_PROPERTY_ID = '6837017559084f190c0dd38b'
const TAWK_WIDGET_ID = '1isbdrdcg'

let tawkScript = null

onMounted(() => {
  // Initialize Tawk API
  window.Tawk_API = window.Tawk_API || {}
  window.Tawk_LoadStart = new Date()

  // Create and load the script
  tawkScript = document.createElement('script')
  tawkScript.async = true
  tawkScript.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`
  tawkScript.charset = 'UTF-8'
  tawkScript.setAttribute('crossorigin', '*')
  document.head.appendChild(tawkScript)
})

onBeforeUnmount(() => {
  // Clean up the script when component is unmounted
  if (tawkScript) {
    tawkScript.remove()
  }
  // Clean up Tawk global variables
  delete window.Tawk_API
  delete window.Tawk_LoadStart
})
</script>