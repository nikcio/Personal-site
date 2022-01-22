<template>
  <footer>
    <span>© Nikcio 2019-{{ currentYear }}</span>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  @apply h-28 flex items-end justify-center w-full text-center;
}

footer span {
  @apply font-semibold text-lg mt-3;
}
</style>