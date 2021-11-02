<template>
  <div class="logo">
    <h2><a href="/">Nikcio</a></h2>
  </div>
</template>

<style scoped>
h2 {
  @apply text-4xl md:text-6xl font-dubai-light m-6 mt-8 md:m-14 ml-16 relative
}

h2::after {
  content: '';
  @apply bg-light-blue w-20 md:w-32 h-20 md:h-32 absolute md:top-1/2
  transform -translate-y-5 md:-translate-y-16 -left-10 md:-left-12 -z-10 rounded-full
  transition duration-500
}

h2:hover::after {
  @apply scale-110
}
</style>
