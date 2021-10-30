<template>
  <div class="logo">
    <h2><a href="/">Nikcio</a></h2>
  </div>
</template>

<style scoped>
h2 {
  @apply text-6xl font-dubai-light m-12 ml-16 relative
}

h2::after {
  content: '';
  @apply bg-light-blue w-32 h-32 absolute top-1/2
  transform -translate-y-16 -left-12 -z-10 rounded-full
  transition duration-500
}

h2:hover::after {
  @apply scale-110
}
</style>
