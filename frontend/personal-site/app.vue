<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
import './assets/css/tailwind.css'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600;700&display=swap');

body {
  max-width: 100%;
  overflow-x: hidden;
  background: #FEF6EF;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 425px) {
  body {
    padding-bottom: 70px;
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>